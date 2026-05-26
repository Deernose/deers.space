import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import * as pdfjsLib from "pdfjs-dist";
import pdfWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url";
import JSZip from "jszip";
import { toast } from "@/hooks/use-toast";

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

interface FileResult {
  name: string;
  text: string;
  progress: number;
  status: string;
  error?: string;
}

const Pdf2Txt = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [results, setResults] = useState<FileResult[]>([]);
  const [busy, setBusy] = useState(false);

  const handleExtract = async () => {
    const files = inputRef.current?.files;
    if (!files || files.length === 0) {
      toast({ title: "Selecione pelo menos um PDF!" });
      return;
    }
    setBusy(true);
    const initial: FileResult[] = Array.from(files).map((f) => ({
      name: f.name,
      text: "",
      progress: 0,
      status: "Aguardando...",
    }));
    setResults(initial);

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      try {
        const buf = await file.arrayBuffer();
        const pdf = await pdfjsLib.getDocument({ data: buf }).promise;
        let full = "";
        for (let pn = 1; pn <= pdf.numPages; pn++) {
          const page = await pdf.getPage(pn);
          const tc = await page.getTextContent();
          full += tc.items.map((it) => ("str" in it ? it.str : "")).join(" ") + "\n\n";
          const pct = (pn / pdf.numPages) * 100;
          setResults((prev) => {
            const c = [...prev];
            c[i] = { ...c[i], progress: pct, status: `Página ${pn} de ${pdf.numPages} (${pct.toFixed(1)}%)`, text: full };
            return c;
          });
        }
        setResults((prev) => {
          const c = [...prev];
          c[i] = { ...c[i], text: full, progress: 100, status: "Extração concluída!" };
          return c;
        });
      } catch (e) {
        console.error(e);
        setResults((prev) => {
          const c = [...prev];
          c[i] = { ...c[i], error: "Erro ao processar o PDF.", status: "Erro" };
          return c;
        });
      }
    }
    setBusy(false);
  };

  const copyOne = (idx: number) => {
    navigator.clipboard.writeText(results[idx].text);
    toast({ title: `Arquivo ${idx + 1} copiado!` });
  };
  const downloadOne = (idx: number) => {
    const r = results[idx];
    const blob = new Blob([r.text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = r.name.replace(/\.pdf$/i, ".txt");
    a.click();
    URL.revokeObjectURL(url);
  };
  const downloadZip = async () => {
    const zip = new JSZip();
    results.forEach((r) => zip.file(r.name.replace(/\.pdf$/i, ".txt"), r.text));
    const content = await zip.generateAsync({ type: "blob" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(content);
    a.download = "textos_extraidos.zip";
    a.click();
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border px-4 py-3 flex items-center justify-between">
        <Link to="/" className="font-bold text-lg">← DEER&apos;s SPACE</Link>
        <span className="text-sm text-muted-foreground">Extrator de PDF</span>
      </header>
      <main className="w-full px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <header className="text-center mb-8">
            <h1 className="text-3xl font-bold">Extrair Texto de Múltiplos PDFs</h1>
            <p className="text-muted-foreground mt-2">Selecione um ou mais arquivos PDF para extrair o conteúdo de texto.</p>
          </header>
          <div className="bg-card border border-border p-6 rounded-2xl shadow-lg mb-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <input ref={inputRef} type="file" accept=".pdf" multiple
              className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:opacity-90 cursor-pointer text-sm" />
            <button onClick={handleExtract} disabled={busy}
              className="w-full sm:w-auto bg-primary text-primary-foreground font-bold py-2 px-6 rounded-lg hover:opacity-90 disabled:opacity-50 transition">
              {busy ? "Processando..." : "Extrair Texto"}
            </button>
          </div>

          {results.length > 0 && (
            <div className="mb-6 text-center flex flex-wrap justify-center gap-2">
              {results.length > 1 && (
                <button onClick={downloadZip} className="bg-secondary text-secondary-foreground font-bold py-2 px-4 rounded-lg hover:opacity-90">
                  Baixar Todos (.zip)
                </button>
              )}
              {results.map((_, i) => (
                <div key={i} className="inline-flex">
                  <button onClick={() => copyOne(i)} className="bg-muted text-foreground font-bold py-2 px-4 rounded-l-lg hover:opacity-90">Copiar #{i + 1}</button>
                  <button onClick={() => downloadOne(i)} className="bg-primary text-primary-foreground font-bold py-2 px-4 rounded-r-lg hover:opacity-90 border-l border-border">Baixar #{i + 1}</button>
                </div>
              ))}
            </div>
          )}

          <div className="space-y-6">
            {results.map((r, i) => (
              <div key={i} className="bg-card border border-border p-6 rounded-2xl shadow-lg">
                <div className="text-lg font-bold mb-3">Arquivo {i + 1}: {r.name}</div>
                <div className="text-sm text-muted-foreground mb-1">{r.status}</div>
                <div className="w-full bg-muted rounded-full h-2.5 mb-4">
                  <div className="bg-primary h-2.5 rounded-full transition-all" style={{ width: `${r.progress}%` }} />
                </div>
                <pre className="bg-background p-4 rounded-lg whitespace-pre-wrap overflow-y-auto max-h-96 text-sm border border-border">
                  {r.error || r.text}
                </pre>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Pdf2Txt;

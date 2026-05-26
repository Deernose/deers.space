import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const CANVAS_WIDTH = 1080;
const CANVAS_HEIGHT = 2220;
const SAFE_AREA_WIDTH = 1080;
const SAFE_AREA_HEIGHT = 1920;
const TOP_OFFSET = 150;

const StoryInsta = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [originalSrc, setOriginalSrc] = useState<string>("");
  const [downloadUrl, setDownloadUrl] = useState<string>("");

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const dataUrl = ev.target?.result as string;
      const img = new Image();
      img.onload = () => {
        setOriginalSrc(dataUrl);
        const canvas = canvasRef.current!;
        canvas.width = CANVAS_WIDTH;
        canvas.height = CANVAS_HEIGHT;
        const ctx = canvas.getContext("2d")!;
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        const scale = Math.min(SAFE_AREA_WIDTH / img.width, SAFE_AREA_HEIGHT / img.height);
        const nw = img.width * scale;
        const nh = img.height * scale;
        const x = (SAFE_AREA_WIDTH - nw) / 2;
        const y = (SAFE_AREA_HEIGHT - nh) / 2 + TOP_OFFSET;
        ctx.drawImage(img, x, y, nw, nh);
        setDownloadUrl(canvas.toDataURL("image/png"));
      };
      img.src = dataUrl;
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border px-4 py-3 flex items-center justify-between">
        <Link to="/" className="font-bold text-lg">← DEER&apos;s SPACE</Link>
        <span className="text-sm text-muted-foreground">Ajustador de Story</span>
      </header>
      <main className="flex items-center justify-center w-full px-4 py-8">
        <div className="bg-card border border-border p-6 md:p-8 rounded-2xl shadow-2xl w-full max-w-6xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">Ajustador de Imagem DEERS.SPACE</h1>
            <p className="text-muted-foreground mt-2">Prepare suas imagens para Stories e Reels no formato 1080x2220px.</p>
          </div>

          <div className="flex justify-center mb-6">
            <label htmlFor="image-upload" className="bg-primary text-primary-foreground font-bold py-3 px-6 rounded-lg cursor-pointer hover:opacity-90 transition">
              Escolher Imagem
            </label>
            <input ref={inputRef} id="image-upload" type="file" accept="image/*" className="hidden" onChange={handleFile} />
          </div>

          <div className={`${originalSrc ? "grid" : "hidden"} grid-cols-1 md:grid-cols-2 gap-8 items-start`}>
            <div>
              <h2 className="text-xl font-semibold mb-3 text-center">Original</h2>
              <div className="bg-background rounded-lg overflow-hidden">
                {originalSrc && <img src={originalSrc} alt="Pré-visualização" className="w-full h-auto object-contain" />}
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-3 text-center">Resultado (1080x2220)</h2>
              <div className="canvas-bg border-2 border-dashed border-border rounded-lg">
                <canvas ref={canvasRef} className="w-full h-auto" />
              </div>
              <div className="mt-4 p-3 bg-muted border border-border rounded-lg text-sm text-center">
                A área visível (1080x1920) está centralizada. Faixas de 150px no topo e na base ficam transparentes.
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            {downloadUrl && (
              <a href={downloadUrl} download="instagram_ajustado.png"
                className="inline-block bg-primary text-primary-foreground font-bold py-3 px-8 rounded-lg hover:opacity-90 transition text-lg">
                Baixar Imagem Ajustada
              </a>
            )}
          </div>
        </div>
      </main>
      <style>{`
        .canvas-bg {
          background-image:
            linear-gradient(45deg, hsl(var(--muted)) 25%, transparent 25%),
            linear-gradient(-45deg, hsl(var(--muted)) 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, hsl(var(--muted)) 75%),
            linear-gradient(-45deg, transparent 75%, hsl(var(--muted)) 75%);
          background-size: 20px 20px;
          background-position: 0 0, 0 10px, 10px -10px, -10px 0;
        }
      `}</style>
    </div>
  );
};

export default StoryInsta;

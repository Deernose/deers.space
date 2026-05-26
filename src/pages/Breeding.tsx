import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import mermaid from "mermaid";

type Tipo = "ditto" | "eevee";
interface Node {
  id: string;
  tipo: Tipo;
  ivs: number[];
  cost: number;
  cumulativeCost: number;
  fatherId?: string;
  motherId?: string;
}

const statMapping: Record<number, string> = { 1: "HP", 2: "Atk", 3: "Def", 4: "Sp.A", 5: "Sp.D", 6: "Spd" };

mermaid.initialize({ startOnLoad: false, htmlLabels: true, theme: "dark", securityLevel: "loose" });

const renderIVs = (ivs: number[]) =>
  ivs.map((iv) => `<span class="iv-bubble iv${iv}">${statMapping[iv]}</span>`).join("");

const breedNodes = (father: Node, mother: Node, collarCost: number, costMale: number, costFemale: number): Node => {
  const common = father.ivs.filter((iv) => mother.ivs.includes(iv));
  const fatherUnique = father.ivs.filter((iv) => !mother.ivs.includes(iv));
  const motherUnique = mother.ivs.filter((iv) => !father.ivs.includes(iv));
  let childIVs = [...common];
  if (fatherUnique.length > 0) childIVs.push(fatherUnique[0]);
  if (motherUnique.length > 0) childIVs.push(motherUnique[0]);
  childIVs = Array.from(new Set(childIVs)).sort((a, b) => a - b);
  const eventCost =
    (fatherUnique.length ? collarCost : 0) + (motherUnique.length ? collarCost : 0) + costMale + costFemale;
  const cumulativeCost = father.cumulativeCost + mother.cumulativeCost + eventCost;
  return { id: "", tipo: "eevee", ivs: childIVs, cost: eventCost, cumulativeCost, fatherId: father.id, motherId: mother.id };
};

const createLevel0 = (dittoCost: number[], eeveeCost: number[]): Node[] => {
  const createGroup = (count: number, tipo: Tipo, iv: number, cost: number): Node[] =>
    Array.from({ length: count }, (_, i) => ({
      id: `L0_${String.fromCharCode(65 + iv - 1)}_${i + 1}`,
      tipo,
      ivs: [iv],
      cost,
      cumulativeCost: cost,
    }));
  const eevees = createGroup(16, "eevee", 1, eeveeCost[0]);
  const dittos: Node[] = [
    ...createGroup(8, "ditto", 2, dittoCost[1]),
    ...createGroup(4, "ditto", 3, dittoCost[2]),
    ...createGroup(2, "ditto", 4, dittoCost[3]),
    ...createGroup(1, "ditto", 5, dittoCost[4]),
    ...createGroup(1, "ditto", 6, dittoCost[5]),
  ];
  const L0: Node[] = [];
  for (let i = 0; i < 16; i++) {
    L0.push(eevees[i]);
    L0.push(dittos[i]);
  }
  return L0;
};

const createLevel = (parents: Node[], pairs: number[][], level: number, collar: number, m: number, f: number): Node[] =>
  pairs.map((p, i) => {
    const child = breedNodes(parents[p[0]], parents[p[1]], collar, m, f);
    child.id = `L${level}_${i + 1}`;
    return child;
  });

const buildMermaid = (levels: Node[][]): string => {
  const createLabel = (p: Node) =>
    `<div class='pokemon-card'><img src='${p.tipo === "ditto" ? "/ditto.png" : "/eevee.png"}' style='width:50px;margin:0 auto;'/><br/><b>${p.tipo.toUpperCase()}</b><br/>${renderIVs(p.ivs)}<br/><small>Op.: ${p.cost.toLocaleString("pt-BR")}</small><br/><small>Total: ${p.cumulativeCost.toLocaleString("pt-BR")}</small></div>`;
  let code = "flowchart LR\n";
  levels.flat().forEach((p) => {
    code += `${p.id}["${createLabel(p)}"]\n`;
    if (p.fatherId && p.motherId) {
      code += `${p.fatherId} --> ${p.id}\n`;
      code += `${p.motherId} --> ${p.id}\n`;
    }
  });
  return code;
};

const defaults = {
  dittoIV: [2000, 2500, 3000, 3500, 4000, 4500],
  eeveeIV: [1500, 1600, 1700, 1800, 1900, 2000],
  collar: 10000,
  male: 500,
  female: 500,
};

const Breeding = () => {
  const [dittoIV, setDittoIV] = useState<number[]>(defaults.dittoIV);
  const [eeveeIV, setEeveeIV] = useState<number[]>(defaults.eeveeIV);
  const [collar, setCollar] = useState(defaults.collar);
  const [male, setMale] = useState(defaults.male);
  const [female, setFemale] = useState(defaults.female);
  const [svg, setSvg] = useState<string>("");
  const [finalCost, setFinalCost] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const generate = async () => {
    const L0 = createLevel0(dittoIV, eeveeIV);
    const L1 = createLevel(L0, Array.from({ length: 16 }, (_, i) => [2 * i, 2 * i + 1]), 1, collar, male, female);
    const L2 = createLevel(L1, [[0, 8], [1, 9], [2, 10], [3, 11], [4, 12], [5, 13], [6, 14], [7, 15]], 2, collar, male, female);
    const L3 = createLevel(L2, [[0, 4], [1, 5], [2, 6], [3, 7]], 3, collar, male, female);
    const L4 = createLevel(L3, [[0, 2], [1, 3]], 4, collar, male, female);
    const L5 = createLevel(L4, [[0, 1]], 5, collar, male, female);
    const code = buildMermaid([L0, L1, L2, L3, L4, L5]);
    try {
      const { svg } = await mermaid.render(`mmd-${Date.now()}`, code);
      setSvg(svg);
      setFinalCost(L5[0].cumulativeCost);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    generate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const labels = useMemo(() => ["HP", "Atk", "Def", "Sp.A", "Sp.D", "Spd"], []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border px-4 py-3 flex items-center justify-between">
        <Link to="/" className="font-bold text-lg">← DEER&apos;s SPACE</Link>
        <span className="text-sm text-muted-foreground">Calculadora de Breeding</span>
      </header>
      <main className="w-full px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Calculadora de IV e Breeding de Eevee</h1>
          <p className="text-muted-foreground mt-2">Otimização para 6 IVs Perfeitos com custos acumulados.</p>
        </div>
        <div className="container mx-auto flex flex-wrap lg:flex-nowrap gap-8 justify-center">
          <div className="bg-card border border-border p-6 rounded-2xl shadow-lg w-full max-w-sm">
            <h2 className="text-xl font-bold mb-4">Parâmetros de Custo</h2>

            <fieldset className="mb-4 border border-border p-3 rounded-lg">
              <legend className="px-2 text-muted-foreground">Dittos (por IV)</legend>
              {labels.map((l, i) => (
                <label key={l} className="block my-2 text-sm">
                  Ditto {l}:
                  <input type="number" value={dittoIV[i]} onChange={(e) => { const v = [...dittoIV]; v[i] = +e.target.value; setDittoIV(v); }}
                    className="w-full bg-background text-foreground p-2 rounded mt-1 border border-border" />
                </label>
              ))}
            </fieldset>

            <fieldset className="mb-4 border border-border p-3 rounded-lg">
              <legend className="px-2 text-muted-foreground">Eevees (por IV)</legend>
              {labels.map((l, i) => (
                <label key={l} className="block my-2 text-sm">
                  Eevee {l}:
                  <input type="number" value={eeveeIV[i]} onChange={(e) => { const v = [...eeveeIV]; v[i] = +e.target.value; setEeveeIV(v); }}
                    className="w-full bg-background text-foreground p-2 rounded mt-1 border border-border" />
                </label>
              ))}
            </fieldset>

            <fieldset className="mb-4 border border-border p-3 rounded-lg">
              <legend className="px-2 text-muted-foreground">Coleiras</legend>
              <label className="block my-2 text-sm">Coleira (cada):
                <input type="number" value={collar} onChange={(e) => setCollar(+e.target.value)} className="w-full bg-background p-2 rounded mt-1 border border-border" />
              </label>
            </fieldset>

            <fieldset className="border border-border p-3 rounded-lg">
              <legend className="px-2 text-muted-foreground">Gênero</legend>
              <label className="block my-2 text-sm">Custo Macho:
                <input type="number" value={male} onChange={(e) => setMale(+e.target.value)} className="w-full bg-background p-2 rounded mt-1 border border-border" />
              </label>
              <label className="block my-2 text-sm">Custo Fêmea:
                <input type="number" value={female} onChange={(e) => setFemale(+e.target.value)} className="w-full bg-background p-2 rounded mt-1 border border-border" />
              </label>
            </fieldset>

            <button onClick={generate} className="w-full bg-primary text-primary-foreground font-bold py-3 px-6 rounded-lg hover:opacity-90 transition mt-6">
              Gerar/Atualizar Diagrama
            </button>
            {finalCost !== null && (
              <div className="mt-4 p-4 bg-muted border border-border rounded-lg text-center">
                <div className="text-sm text-muted-foreground">Custo total estimado</div>
                <div className="text-2xl font-bold">{finalCost.toLocaleString("pt-BR")}</div>
              </div>
            )}
          </div>

          <div className="flex-1 min-w-0">
            <div ref={containerRef} className="bg-card border border-border p-6 rounded-2xl shadow-lg overflow-auto" dangerouslySetInnerHTML={{ __html: svg || "Gerando..." }} />
          </div>
        </div>
      </main>
      <style>{`
        .iv-bubble { display: inline-block; min-width: 36px; text-align: center; padding: 2px 6px; margin: 2px; border-radius: 9999px; color: #fff; font-weight: bold; font-size: 11px; border: 1px solid rgba(255,255,255,.2); }
        .iv1 { background:#FF6B6B; } .iv2 { background:#F08080; } .iv3 { background:#F9A825; }
        .iv4 { background:#6A7BFF; } .iv5 { background:#78C850; } .iv6 { background:#F85888; }
        .pokemon-card { text-align:center; font-size:13px; min-width:140px; color:#d1d5db; padding:6px; }
        .pokemon-card small { color:#9ca3af; }
      `}</style>
    </div>
  );
};

export default Breeding;

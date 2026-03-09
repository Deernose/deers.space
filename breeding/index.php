<?php include $_SERVER['DOCUMENT_ROOT'] . '/header.php'; ?>

<!-- SCRIPT DO TAILWIND CSS E MERMAID -->
<script src="https://cdn.tailwindcss.com"></script>
<script src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"></script>
<script>
    // Inicializa o Mermaid para renderizar os diagramas
    mermaid.initialize({ startOnLoad: false, htmlLabels: true, theme: 'dark' });
</script>

<!-- Estilos específicos para esta página -->
<style>
    /* Estilos para as bolhas de IVs */
    .iv-bubble {
      display: inline-block;
      min-width: 40px;
      text-align: center;
      padding: 3px 8px;
      margin: 2px;
      border-radius: 9999px;
      color: #fff;
      font-weight: bold;
      font-size: 12px;
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
    .iv1 { background-color: #FF6B6B; } /* HP */
    .iv2 { background-color: #F08080; } /* Atk */
    .iv3 { background-color: #F9A825; } /* Def */
    .iv4 { background-color: #6A7BFF; } /* Sp.A */
    .iv5 { background-color: #78C850; } /* Sp.D */
    .iv6 { background-color: #F85888; } /* Spd */

    /* Estilo para o cartão do Pokémon no diagrama */
    .pokemon-card {
      text-align: center;
      font-size: 14px;
      min-width: 150px;
      color: #d1d5db;
      padding: 8px;
    }
    .pokemon-card small {
        color: #9ca3af;
    }
</style>

<!-- Container principal que centraliza apenas a ferramenta -->
<main class="w-full px-4 py-8 text-gray-300">
    <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-white">Calculadora de IV e Breeding de Eevee</h1>
        <p class="text-gray-400 mt-2">Otimização para 6 IVs Perfeitos com custos acumulados.</p>
    </div>

    <div class="container mx-auto flex flex-wrap lg:flex-nowrap gap-8 justify-center">
        <!-- Seção do Formulário -->
        <div class="form-section bg-gray-800 border border-gray-700 p-6 rounded-2xl shadow-lg w-full max-w-sm">
            <h2 class="text-xl font-bold text-white mb-4">Parâmetros de Custo</h2>
            
            <fieldset class="mb-4 border border-gray-600 p-3 rounded-lg">
                <legend class="px-2 text-gray-400">Valores dos Dittos (por IV)</legend>
                <label class="block my-2">Ditto HP: <input type="number" id="dittoIV1" value="2000" class="w-full bg-gray-700 text-white p-2 rounded mt-1 border border-pink-400"></label>
                <label class="block my-2">Ditto Atk: <input type="number" id="dittoIV2" value="2500" class="w-full bg-gray-700 text-white p-2 rounded mt-1 border border-red-400"></label>
                <label class="block my-2">Ditto Def: <input type="number" id="dittoIV3" value="3000" class="w-full bg-gray-700 text-white p-2 rounded mt-1 border border-yellow-500"></label>
                <label class="block my-2">Ditto Sp.A: <input type="number" id="dittoIV4" value="3500" class="w-full bg-gray-700 text-white p-2 rounded mt-1 border border-blue-400"></label>
                <label class="block my-2">Ditto Sp.D: <input type="number" id="dittoIV5" value="4000" class="w-full bg-gray-700 text-white p-2 rounded mt-1 border border-green-400"></label>
                <label class="block my-2">Ditto Spd: <input type="number" id="dittoIV6" value="4500" class="w-full bg-gray-700 text-white p-2 rounded mt-1 border border-pink-500"></label>
            </fieldset>

            <fieldset class="mb-4 border border-gray-600 p-3 rounded-lg">
                <legend class="px-2 text-gray-400">Valores dos Eevees (por IV)</legend>
                <label class="block my-2">Eevee HP: <input type="number" id="eeveeIV1" value="1500" class="w-full bg-gray-700 text-white p-2 rounded mt-1 border border-pink-400"></label>
                <label class="block my-2">Eevee Atk: <input type="number" id="eeveeIV2" value="1600" class="w-full bg-gray-700 text-white p-2 rounded mt-1 border border-red-400"></label>
                <label class="block my-2">Eevee Def: <input type="number" id="eeveeIV3" value="1700" class="w-full bg-gray-700 text-white p-2 rounded mt-1 border border-yellow-500"></label>
                <label class="block my-2">Eevee Sp.A: <input type="number" id="eeveeIV4" value="1800" class="w-full bg-gray-700 text-white p-2 rounded mt-1 border border-blue-400"></label>
                <label class="block my-2">Eevee Sp.D: <input type="number" id="eeveeIV5" value="1900" class="w-full bg-gray-700 text-white p-2 rounded mt-1 border border-green-400"></label>
                <label class="block my-2">Eevee Spd: <input type="number" id="eeveeIV6" value="2000" class="w-full bg-gray-700 text-white p-2 rounded mt-1 border border-pink-500"></label>
            </fieldset>

            <fieldset class="mb-4 border border-gray-600 p-3 rounded-lg">
                <legend class="px-2 text-gray-400">Valores das Coleiras</legend>
                <label class="block my-2">Coleira (cada): <input type="number" id="collarCost" value="10000" class="w-full bg-gray-700 text-white p-2 rounded mt-1 border-gray-500"></label>
            </fieldset>

            <fieldset class="border border-gray-600 p-3 rounded-lg">
                <legend class="px-2 text-gray-400">Custo de Gênero</legend>
                <label class="block my-2">Custo Macho: <input type="number" id="costMale" value="500" class="w-full bg-gray-700 text-white p-2 rounded mt-1 border-gray-500"></label>
                <label class="block my-2">Custo Fêmea: <input type="number" id="costFemale" value="500" class="w-full bg-gray-700 text-white p-2 rounded mt-1 border-gray-500"></label>
            </fieldset>

            <button onclick="updateDiagram()" class="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg cursor-pointer hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-500/20 mt-6">Gerar/Atualizar Diagrama</button>
            <div id="finalCost" class="final-cost mt-4 p-4 bg-gray-700 border border-blue-900 rounded-lg text-center"></div>
        </div>

        <!-- Seção do Diagrama -->
        <div class="diagram-section flex-1 min-w-0">
            <div id="diagramContainer" class="mermaid bg-gray-800 border border-gray-700 p-6 rounded-2xl shadow-lg overflow-auto">
                Clique em "Gerar/Atualizar Diagrama" para montar a árvore.
            </div>
        </div>
    </div>
</main>

<script>
  const statMapping = { 1: "HP", 2: "Atk", 3: "Def", 4: "Sp.A", 5: "Sp.D", 6: "Spd" };

  function renderIVs(ivs) {
    return ivs.map(iv => `<span class="iv-bubble iv${iv}">${statMapping[iv]}</span>`).join("");
  }
  
  function breedNodes(father, mother, collarCost, costMale, costFemale) {
    const common = father.ivs.filter(iv => mother.ivs.includes(iv));
    const fatherUnique = father.ivs.filter(iv => !mother.ivs.includes(iv));
    const motherUnique = mother.ivs.filter(iv => !father.ivs.includes(iv));
    
    let childIVs = [...common];
    if (fatherUnique.length > 0) childIVs.push(fatherUnique[0]);
    if (motherUnique.length > 0) childIVs.push(motherUnique[0]);
    childIVs = Array.from(new Set(childIVs)).sort((a, b) => a - b);
    
    const eventCost = 
      (fatherUnique.length ? collarCost : 0) +
      (motherUnique.length ? collarCost : 0) +
      costMale + costFemale;
      
    const cumulativeCost = father.cumulativeCost + mother.cumulativeCost + eventCost;
    
    return { id: "", tipo: "eevee", ivs: childIVs, cost: eventCost, cumulativeCost: cumulativeCost, fatherId: father.id, motherId: mother.id };
  }
  
  function createLevel0(dittoCost, eeveeCost) {
    const createGroup = (count, tipo, iv, cost) => Array.from({ length: count }, (_, i) => ({
      id: `L0_${String.fromCharCode(65 + iv - 1)}_${i + 1}`, tipo, ivs: [iv], cost, cumulativeCost: cost
    }));
    
    const groups = [
      ...createGroup(16, "eevee", 1, eeveeCost[0]),
      ...createGroup(8, "ditto", 2, dittoCost[1]),
      ...createGroup(4, "ditto", 3, dittoCost[2]),
      ...createGroup(2, "ditto", 4, dittoCost[3]),
      ...createGroup(1, "ditto", 5, dittoCost[4]),
      ...createGroup(1, "ditto", 6, dittoCost[5])
    ];

    const L0 = [];
    const eevees = groups.filter(p => p.tipo === 'eevee');
    const dittos = groups.filter(p => p.tipo === 'ditto');
    for (let i = 0; i < 16; i++) {
        L0.push(eevees[i]);
        L0.push(dittos[i]);
    }
    return L0;
  }
  
  const createLevel = (parents, pairs, level, collarCost, costMale, costFemale) => {
      const children = [];
      for (let i = 0; i < pairs.length; i++) {
          const father = parents[pairs[i][0]];
          const mother = parents[pairs[i][1]];
          const child = breedNodes(father, mother, collarCost, costMale, costFemale);
          child.id = `L${level}_${i + 1}`;
          children.push(child);
      }
      return children;
  };

  function buildMermaid(levels) {
    const createLabel = p => `
        <div class="pokemon-card">
          <img src="${p.tipo === 'ditto' ? '/breeding/ditto.png' : '/breeding/eevee.png'}" style="width:50px;" alt="${p.tipo} icon"><br/>
          <b>${p.tipo.toUpperCase()}</b><br/>
          ${renderIVs(p.ivs)}<br/>
          <small>Custo Op.: ${p.cost.toLocaleString("pt-BR")}</small><br/>
          <small>Total: ${p.cumulativeCost.toLocaleString("pt-BR")}</small>
        </div>`;
    
    let mermaidCode = "flowchart LR\n";
    levels.flat().forEach(p => {
        mermaidCode += `${p.id}["${createLabel(p)}"]\n`;
        if (p.fatherId && p.motherId) {
            mermaidCode += `${p.fatherId} --> ${p.id}\n`;
            mermaidCode += `${p.motherId} --> ${p.id}\n`;
        }
    });
    return mermaidCode;
  }
  
  function updateDiagram() {
    const getVal = id => +document.getElementById(id).value;
    const dittoCost = [getVal("dittoIV1"), getVal("dittoIV2"), getVal("dittoIV3"), getVal("dittoIV4"), getVal("dittoIV5"), getVal("dittoIV6")];
    const eeveeCost = [getVal("eeveeIV1"), getVal("eeveeIV2"), getVal("eeveeIV3"), getVal("eeveeIV4"), getVal("eeveeIV5"), getVal("eeveeIV6")];
    const collarCost = getVal("collarCost");
    const costMale = getVal("costMale");
    const costFemale = getVal("costFemale");
    
    const L0 = createLevel0(dittoCost, eeveeCost);
    const L1 = createLevel(L0, Array.from({length: 16}, (_, i) => [2*i, 2*i+1]), 1, collarCost, costMale, costFemale);
    const L2 = createLevel(L1, [[0,8],[1,9],[2,10],[3,11],[4,12],[5,13],[6,14],[7,15]], 2, collarCost, costMale, costFemale);
    const L3 = createLevel(L2, [[0,4],[1,5],[2,6],[3,7]], 3, collarCost, costMale, costFemale);
    const L4 = createLevel(L3, [[0,2],[1,3]], 4, collarCost, costMale, costFemale);
    const L5 = createLevel(L4, [[0,1]], 5, collarCost, costMale, costFemale);
    
    const mermaidCode = buildMermaid([L0, L1, L2, L3, L4, L5]);
    const container = document.getElementById("diagramContainer");
    container.innerHTML = mermaidCode;
    mermaid.init(undefined, container);
    
    const totalCost = L5[0].cumulativeCost;
    document.getElementById("finalCost").innerHTML = `
      <strong class="text-white">Custo Total:</strong> ${totalCost.toLocaleString("pt-BR")}<br/>
      <strong class="text-white">IVs Finais:</strong> ${L5[0].ivs.map(iv => statMapping[iv]).join(", ")}
    `;
  }
</script>

<?php include $_SERVER['DOCUMENT_ROOT'] . '/footer.php'; ?>

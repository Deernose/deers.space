<!-- index.php -->
<?php include 'header.php'; ?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta name="description" content="Otimize seu Breeding de Eevees com nossa calculadora de IVs! Veja custos acumulados, árvores de breeding e estratégias para obter 6 IVs perfeitos." charset="UTF-8">

  <title>Calculadora de IV e Breeding de Eevee - Deers Space</title>
  <!-- Carrega Mermaid -->
  <script src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"></script>
  <script>
    mermaid.initialize({ startOnLoad: false, htmlLabels: true });
  </script>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
      background: #f0f0f0;
    }
    .container {
      display: flex;
      gap: 30px;
      align-items: flex-start;
      flex-wrap: wrap;
    }
    .form-section {
      max-width: 350px;
      padding: 15px;
      border: 1px solid #ccc;
      border-radius: 5px;
      background: white;
    }
    .form-section h2 {
      margin-top: 0;
      font-size: 20px;
    }
    .form-section label {
      display: block;
      margin: 8px 0;
      font-size: 14px;
    }
    .form-section input {
      width: 100%;
      padding: 6px;
      font-size: 14px;
      box-sizing: border-box;
      margin-bottom: 5px;
    }
    .diagram-section {
      flex: 1;
      min-width: 300px;
    }
    #diagramContainer {
      border: 1px solid #ddd;
      padding: 15px;
      background: white;
      max-width: 1200px;
      font-size: 14px;
      overflow-x: auto;
    }
    .final-cost {
      margin-top: 15px;
      padding: 12px;
      background: #eef;
      border: 1px solid #99c;
      border-radius: 4px;
      font-size: 16px;
    }
    button {
      width: 100%;
      padding: 10px;
      font-size: 16px;
      background: #4CAF50;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      margin-top: 15px;
    }
    /* Bolhas para exibir os IVs (usando os números 1 a 6) */
    .iv-bubble {
      display: inline-block;
      min-width: 30px;
      text-align: center;
      padding: 2px 6px;
      margin: 2px;
      border-radius: 12px;
      color: #fff;
      font-weight: bold;
      font-size: 14px;
    }
    .iv1 { background-color: #FFB6C1; }
    .iv2 { background-color: #FF6347; }
    .iv3 { background-color: #808080; }
    .iv4 { background-color: #32CD32; }
    .iv5 { background-color: #BA55D3; }
    .iv6 { background-color: #00BFFF; }
    .pokemon-card {
      text-align: center;
      font-size: 16px;
      min-width: 140px;
    }
  </style>
</head>
<body>

<h1>Calculadora de IV e Breeding de Eevee</h1>
<h2>Otimização para 6 IVs Perfeitos</h2>
<h3>Custos Acumulados e Estratégias</h3>
<h3>Breeding – 6 IVs Perfeitos (Árvore Otimizada e Custos Acumulados)</h1>

<div class="container">
  <div class="form-section">
    <h2>Parâmetros de Custo</h2>
    <fieldset>
      <legend>Valores dos Dittos (por IV)</legend>
      <!-- Ordem fixa: HP, Atk, Def, Sp.A, Sp.D, Spd -->
      <label>Ditto HP:
        <input type="number" id="dittoIV1" value="2000" style="border:2px solid #FFB6C1;" />
      </label>
      <label>Ditto Atk:
        <input type="number" id="dittoIV2" value="2500" style="border:2px solid #FF6347;" />
      </label>
      <label>Ditto Def:
        <input type="number" id="dittoIV3" value="3000" style="border:2px solid #808080;" />
      </label>
      <label>Ditto Sp.A:
        <input type="number" id="dittoIV4" value="3500" style="border:2px solid #32CD32;" />
      </label>
      <label>Ditto Sp.D:
        <input type="number" id="dittoIV5" value="4000" style="border:2px solid #BA55D3;" />
      </label>
      <label>Ditto Spd:
        <input type="number" id="dittoIV6" value="4500" style="border:2px solid #00BFFF;" />
      </label>
    </fieldset>

    <fieldset>
      <legend>Valores dos Eevees (por IV)</legend>
      <!-- Ordem fixa: HP, Atk, Def, Sp.A, Sp.D, Spd -->
      <label>Eevee HP:
        <input type="number" id="eeveeIV1" value="1500" style="border:2px solid #FFB6C1;" />
      </label>
      <label>Eevee Atk:
        <input type="number" id="eeveeIV2" value="1600" style="border:2px solid #FF6347;" />
      </label>
      <label>Eevee Def:
        <input type="number" id="eeveeIV3" value="1700" style="border:2px solid #808080;" />
      </label>
      <label>Eevee Sp.A:
        <input type="number" id="eeveeIV4" value="1800" style="border:2px solid #32CD32;" />
      </label>
      <label>Eevee Sp.D:
        <input type="number" id="eeveeIV5" value="1900" style="border:2px solid #BA55D3;" />
      </label>
      <label>Eevee Spd:
        <input type="number" id="eeveeIV6" value="2000" style="border:2px solid #00BFFF;" />
      </label>
    </fieldset>

    <fieldset>
      <legend>Valores das Coleiras (por IV)</legend>
      <label>Coleira IV1 (Power Weight):
        <input type="number" id="collarIV1" value="10000" />
      </label>
      <label>Coleira IV2 (Power Bracer):
        <input type="number" id="collarIV2" value="10000" />
      </label>
      <label>Coleira IV3 (Power Belt):
        <input type="number" id="collarIV3" value="10000" />
      </label>
      <label>Coleira IV4 (Power Lens):
        <input type="number" id="collarIV4" value="10000" />
      </label>
      <label>Coleira IV5 (Power Band):
        <input type="number" id="collarIV5" value="10000" />
      </label>
      <label>Coleira IV6 (Power Anklet):
        <input type="number" id="collarIV6" value="10000" />
      </label>
    </fieldset>

    <fieldset>
      <legend>Custo de Gênero</legend>
      <label>Custo Macho:
        <input type="number" id="costMale" value="500" />
      </label>
      <label>Custo Fêmea:
        <input type="number" id="costFemale" value="500" />
      </label>
    </fieldset>

    <button onclick="updateDiagram()">Gerar/Atualizar Diagrama</button>
    <div id="finalCost" class="final-cost"></div>
  </div>

  <div class="diagram-section">
    <div id="diagramContainer" class="mermaid">
      Clique em "Gerar/Atualizar Diagrama" para montar a árvore.
    </div>
  </div>
</div>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Calculadora de IV e Breeding de Eevee",
  "description": "Otimize seu Breeding de Eevees com nossa calculadora de IVs! Veja custos acumulados e estratégias.",
  "url": "https://www.deers.space/breeding/"
}
</script>
<script>
  // Mapeamento de IV (números para siglas)
  const statMapping = {
    1: "HP",
    2: "Atk",
    3: "Def",
    4: "Sp.A",
    5: "Sp.D",
    6: "Spd"
  };

  /*******************************************************
   * Função auxiliar para renderizar os IVs como bolhas
   *******************************************************/
  function renderIVs(ivs) {
    return ivs.map(iv => `<span class="iv-bubble iv${iv}">${statMapping[iv]}</span>`).join("");
  }
  
  /*******************************************************
   * Função breedNodes – calcula o cruzamento entre dois pais
   * Regras:
   * - O filho herda os IVs em comum.
   * - Cada pai passa APENAS 1 IV único (o primeiro, se existir).
   * - Custo incremental (evento) = custo da coleira para o IV único (se houver) +
   *   custo macho + custo fêmea.
   * - Custo acumulado = custo acumulado do pai + da mãe + custo do evento.
   *******************************************************/
  function breedNodes(father, mother, collarCost, costMale, costFemale) {
    const common = father.ivs.filter(iv => mother.ivs.includes(iv));
    const fatherUnique = father.ivs.filter(iv => !mother.ivs.includes(iv));
    const motherUnique = mother.ivs.filter(iv => !father.ivs.includes(iv));
    
    let childIVs = [...common];
    if (fatherUnique.length > 0) childIVs.push(fatherUnique[0]);
    if (motherUnique.length > 0) childIVs.push(motherUnique[0]);
    childIVs = Array.from(new Set(childIVs)).sort((a, b) => a - b);
    
    const eventCost = 
      (fatherUnique.length ? collarCost[fatherUnique[0]-1] : 0) +
      (motherUnique.length ? collarCost[motherUnique[0]-1] : 0) +
      costMale + costFemale;
      
    const cumulativeCost = father.cumulativeCost + mother.cumulativeCost + eventCost;
    
    return {
      id: "",
      tipo: "eevee", // sempre gera Eevee
      ivs: childIVs,
      cost: eventCost,          // custo deste cruzamento (incremental)
      cumulativeCost: cumulativeCost,  // custo total até aqui
      fatherId: father.id,
      motherId: mother.id
    };
  }
  
  /*******************************************************
   * Cria o Level 0 (base) – 32 Pokémon
   * Grupo A: 16 Eevees com IV "1" (HP) – custo = eeveeIV1 (usado 16 vezes)
   * Grupos B-F (16 Ditto):  
   *   - Grupo B: 8 com IV "2" (Atk) – custo = dittoIV2  
   *   - Grupo C: 4 com IV "3" (Def) – custo = dittoIV3  
   *   - Grupo D: 2 com IV "4" (Sp.A) – custo = dittoIV4  
   *   - Grupo E: 1 com IV "5" (Sp.D) – custo = dittoIV5  
   *   - Grupo F: 1 com IV "6" (Spd) – custo = dittoIV6  
   * Cada nó recebe também cumulativeCost = seu custo.
   *******************************************************/
  function createLevel0(dittoCost, eeveeCost) {
    let groupA = [];
    for (let i = 0; i < 16; i++) {
      groupA.push({
        id: "L0_A_" + (i+1),
        tipo: "eevee",
        ivs: [1],
        cost: eeveeCost[0],
        cumulativeCost: eeveeCost[0]
      });
    }
    let groupB = [];
    for (let i = 0; i < 8; i++) {
      groupB.push({
        id: "L0_B_" + (i+1),
        tipo: "ditto",
        ivs: [2],
        cost: dittoCost[1],
        cumulativeCost: dittoCost[1]
      });
    }
    let groupC = [];
    for (let i = 0; i < 4; i++) {
      groupC.push({
        id: "L0_C_" + (i+1),
        tipo: "ditto",
        ivs: [3],
        cost: dittoCost[2],
        cumulativeCost: dittoCost[2]
      });
    }
    let groupD = [];
    for (let i = 0; i < 2; i++) {
      groupD.push({
        id: "L0_D_" + (i+1),
        tipo: "ditto",
        ivs: [4],
        cost: dittoCost[3],
        cumulativeCost: dittoCost[3]
      });
    }
    let groupE = [{
      id: "L0_E_1",
      tipo: "ditto",
      ivs: [5],
      cost: dittoCost[4],
      cumulativeCost: dittoCost[4]
    }];
    let groupF = [{
      id: "L0_F_1",
      tipo: "ditto",
      ivs: [6],
      cost: dittoCost[5],
      cumulativeCost: dittoCost[5]
    }];
    
    let L0 = [];
    // Formar 16 pares: cada par é (um do groupA, seguido de um dos outros)
    for (let i = 0; i < 16; i++) {
      L0.push(groupA[i]);
      if (i < 8) {
        L0.push(groupB[i]);
      } else if (i < 12) {
        L0.push(groupC[i - 8]);
      } else if (i < 14) {
        L0.push(groupD[i - 12]);
      } else if (i === 14) {
        L0.push(groupE[0]);
      } else if (i === 15) {
        L0.push(groupF[0]);
      }
    }
    return L0;
  }
  
  /*******************************************************
   * Cria o Level 1: 16 cruzamentos – cada filho terá 2 IVs
   *******************************************************/
  function createLevel1(L0, collarCost, costMale, costFemale) {
    let L1 = [];
    for (let i = 0; i < 16; i++) {
      let father = L0[2*i];
      let mother = L0[2*i+1];
      let child = breedNodes(father, mother, collarCost, costMale, costFemale);
      child.id = "L1_" + (i+1);
      L1.push(child);
    }
    return L1;
  }
  
  /*******************************************************
   * Cria o Level 2: 8 cruzamentos – cada filho terá 3 IVs
   * Os emparelhamentos são definidos manualmente para garantir
   * a soma desejada dos IVs.
   *******************************************************/
  function createLevel2(L1, collarCost, costMale, costFemale) {
    let L2 = [];
    const pairs = [
      [0,8],[1,9],[2,10],[3,11],
      [4,12],[5,13],[6,14],[7,15]
    ];
    for (let i = 0; i < pairs.length; i++) {
      let father = L1[pairs[i][0]];
      let mother = L1[pairs[i][1]];
      let child = breedNodes(father, mother, collarCost, costMale, costFemale);
      child.id = "L2_" + (i+1);
      L2.push(child);
    }
    return L2;
  }
  
  /*******************************************************
   * Cria o Level 3: 4 cruzamentos – cada filho terá 4 IVs
   *******************************************************/
  function createLevel3(L2, collarCost, costMale, costFemale) {
    let L3 = [];
    const pairs = [
      [0,4],[1,5],[2,6],[3,7]
    ];
    for (let i = 0; i < pairs.length; i++) {
      let father = L2[pairs[i][0]];
      let mother = L2[pairs[i][1]];
      let child = breedNodes(father, mother, collarCost, costMale, costFemale);
      child.id = "L3_" + (i+1);
      L3.push(child);
    }
    return L3;
  }
  
  /*******************************************************
   * Cria o Level 4: 2 cruzamentos – cada filho terá 5 IVs
   *******************************************************/
  function createLevel4(L3, collarCost, costMale, costFemale) {
    let L4 = [];
    const pairs = [
      [0,2],[1,3]
    ];
    for (let i = 0; i < pairs.length; i++) {
      let father = L3[pairs[i][0]];
      let mother = L3[pairs[i][1]];
      let child = breedNodes(father, mother, collarCost, costMale, costFemale);
      child.id = "L4_" + (i+1);
      L4.push(child);
    }
    return L4;
  }
  
  /*******************************************************
   * Cria o Level 5: Único cruzamento – o Pokémon final terá 6 IVs
   *******************************************************/
  function createLevel5(L4, collarCost, costMale, costFemale) {
    let father = L4[0];
    let mother = L4[1];
    let child = breedNodes(father, mother, collarCost, costMale, costFemale);
    child.id = "L5_1";
    return [child];
  }
  
  /*******************************************************
   * Gera o diagrama Mermaid a partir dos níveis da árvore.
   * Cada nó exibirá:
   *  - A imagem (Eevee ou Ditto)
   *  - O(s) IV(s) (como siglas)
   *  - O custo da operação (incremental)
   *  - O custo acumulado até aquele nó
   *******************************************************/
  function buildMermaid(levels) {
    function createLabel(p) {
      return `
        <div class="pokemon-card">
          <img src="${p.tipo==='ditto'?'ditto.png':'eevee.png'}" style="width:50px;" alt="Eevee Breeding - Calculadora de IVs"><br/>
          <b>${p.tipo.toUpperCase()}</b><br/>
          IV: ${renderIVs(p.ivs)}<br/>
          <small>Custo op.: ${p.cost.toLocaleString("pt-BR")}</small><br/>
          <small>Total: ${p.cumulativeCost.toLocaleString("pt-BR")}</small>
        </div>`;
    }
    
    let mermaidCode = "flowchart LR\n";
    // Level 0
    levels[0].forEach(p => {
      mermaidCode += `${p.id}[${createLabel(p)}]\n`;
    });
    // Levels 1 a 5 e conexões
    for (let lvl = 1; lvl < levels.length; lvl++) {
      levels[lvl].forEach(child => {
        mermaidCode += `${child.id}[${createLabel(child)}]\n`;
        mermaidCode += `${child.fatherId} --> ${child.id}\n`;
        mermaidCode += `${child.motherId} --> ${child.id}\n`;
      });
    }
    return mermaidCode;
  }
  
  /*******************************************************
   * Função principal para atualizar o diagrama e o custo total.
   * O custo total exibido abaixo do botão será igual ao custo
   * acumulado do Pokémon final (Level 5).
   *******************************************************/
  function updateDiagram() {
    const dittoCost = [
      +document.getElementById("dittoIV1").value,
      +document.getElementById("dittoIV2").value,
      +document.getElementById("dittoIV3").value,
      +document.getElementById("dittoIV4").value,
      +document.getElementById("dittoIV5").value,
      +document.getElementById("dittoIV6").value
    ];
    const eeveeCost = [
      +document.getElementById("eeveeIV1").value,
      +document.getElementById("eeveeIV2").value,
      +document.getElementById("eeveeIV3").value,
      +document.getElementById("eeveeIV4").value,
      +document.getElementById("eeveeIV5").value,
      +document.getElementById("eeveeIV6").value
    ];
    const collarCost = [
      +document.getElementById("collarIV1").value,
      +document.getElementById("collarIV2").value,
      +document.getElementById("collarIV3").value,
      +document.getElementById("collarIV4").value,
      +document.getElementById("collarIV5").value,
      +document.getElementById("collarIV6").value
    ];
    const costMale = +document.getElementById("costMale").value;
    const costFemale = +document.getElementById("costFemale").value;
    
    // Cria os níveis da árvore
    const L0 = createLevel0(dittoCost, eeveeCost);
    const L1 = createLevel1(L0, collarCost, costMale, costFemale);
    const L2 = createLevel2(L1, collarCost, costMale, costFemale);
    const L3 = createLevel3(L2, collarCost, costMale, costFemale);
    const L4 = createLevel4(L3, collarCost, costMale, costFemale);
    const L5 = createLevel5(L4, collarCost, costMale, costFemale);
    
    // Constrói e renderiza o diagrama
    const allLevels = [L0, L1, L2, L3, L4, L5];
    const mermaidCode = buildMermaid(allLevels);
    const container = document.getElementById("diagramContainer");
    container.innerHTML = mermaidCode;
    mermaid.init(undefined, container);
    
    // O custo total é o custo acumulado do único Pokémon final (Level 5)
    const totalCost = L5[0].cumulativeCost;
    const finalChild = L5[0];
    document.getElementById("finalCost").innerHTML = `
      <strong>Custo Total:</strong> ${totalCost.toLocaleString("pt-BR")}<br/>
      <strong>IVs do Pokémon Final:</strong> ${finalChild.ivs.map(iv => statMapping[iv]).join(", ")}
    `;
  }
</script>

</body>
</html>

<?php include 'footer.php'; ?>
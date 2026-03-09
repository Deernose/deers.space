<?php include $_SERVER['DOCUMENT_ROOT'] . '/header.php'; ?>

<!-- SCRIPT DO TAILWIND CSS, PDF.JS E JSZIP -->
<script src="https://cdn.tailwindcss.com"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.0/jszip.min.js"></script>
<script>
    // Configura o worker do PDF.js
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js';
</script>

<!-- Estilos específicos para esta página -->
<style>
    /* Estilos para a barra de rolagem no tema escuro */
    .file-text::-webkit-scrollbar {
        width: 8px;
    }
    .file-text::-webkit-scrollbar-track {
        background: #2d3748; /* gray-800 */
    }
    .file-text::-webkit-scrollbar-thumb {
        background-color: #4a5568; /* gray-600 */
        border-radius: 4px;
    }
</style>

<!-- Container principal que centraliza apenas a ferramenta -->
<main class="w-full px-4 py-8 text-gray-300">
    <div class="max-w-7xl mx-auto">
        <!-- Cabeçalho da Ferramenta -->
        <header class="text-center mb-8">
            <h1 class="text-3xl font-bold text-white">Extrair Texto de Múltiplos PDFs</h1>
            <p class="text-gray-400 mt-2">Selecione um ou mais arquivos PDF para extrair o conteúdo de texto.</p>
        </header>

        <!-- Controles de Upload -->
        <div class="controls bg-gray-800 border border-gray-700 p-6 rounded-2xl shadow-lg mb-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <input type="file" id="fileInput" accept=".pdf" multiple class="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 cursor-pointer"/>
            <button id="btnExtract" class="w-full sm:w-auto bg-green-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-green-700 transition-all duration-300 shadow-lg shadow-green-500/20">
                Extrair Texto
            </button>
        </div>
        
        <!-- Botões de Ação (Copiar/Download) -->
        <div id="copyButtonsContainer" class="mb-6 text-center"></div>

        <!-- Container de Resultados -->
        <div id="resultsContainer" class="space-y-6"></div>
    </div>
</main>

<script>
    const fileInput = document.getElementById('fileInput');
    const btnExtract = document.getElementById('btnExtract');
    const resultsContainer = document.getElementById('resultsContainer');
    const copyButtonsContainer = document.getElementById('copyButtonsContainer');

    let pdfTexts = [];
    let pdfNames = [];

    btnExtract.addEventListener('click', async () => {
        const files = fileInput.files;
        if (!files || files.length === 0) {
            alert("Selecione pelo menos um PDF!");
            return;
        }

        resultsContainer.innerHTML = '';
        copyButtonsContainer.innerHTML = '';
        pdfTexts = [];
        pdfNames = [];

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            pdfNames.push(file.name);

            const fileResultDiv = document.createElement('div');
            fileResultDiv.className = 'file-result bg-gray-800 border border-gray-700 p-6 rounded-2xl shadow-lg';

            fileResultDiv.innerHTML = `
                <div class="file-title text-lg font-bold text-white mb-3">Arquivo ${i + 1}: ${file.name}</div>
                <div class="progress-text text-sm text-gray-400 mb-1">Aguardando processamento...</div>
                <div class="progress-container w-full bg-gray-700 rounded-full h-2.5 mb-4">
                    <div class="progress-bar bg-blue-600 h-2.5 rounded-full" style="width: 0%"></div>
                </div>
                <pre class="file-text bg-gray-900 p-4 rounded-lg text-gray-300 whitespace-pre-wrap overflow-y-auto max-h-96"></pre>
            `;
            resultsContainer.appendChild(fileResultDiv);

            const progressBar = fileResultDiv.querySelector('.progress-bar');
            const progressText = fileResultDiv.querySelector('.progress-text');
            const fileTextPre = fileResultDiv.querySelector('.file-text');

            try {
                const arrayBuffer = await file.arrayBuffer();
                const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
                let fullText = '';
                
                for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
                    const page = await pdf.getPage(pageNum);
                    const textContent = await page.getTextContent();
                    fullText += textContent.items.map(item => item.str).join(' ') + "\n\n";
                    
                    const progressPercent = (pageNum / pdf.numPages) * 100;
                    progressBar.style.width = `${progressPercent}%`;
                    progressText.textContent = `Processando página ${pageNum} de ${pdf.numPages} (${progressPercent.toFixed(1)}%)`;
                }

                fileTextPre.textContent = fullText;
                pdfTexts.push(fullText);
                progressText.textContent = 'Extração concluída!';

            } catch (err) {
                fileTextPre.textContent = 'Erro ao processar o PDF.';
                console.error("Erro no PDF:", err);
            }
        }
        
        generateActionButtons();
    });

    function generateActionButtons() {
        if (pdfTexts.length > 1) {
            const downloadAllBtn = document.createElement('button');
            downloadAllBtn.className = 'bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 transition-all duration-300 shadow-lg m-1';
            downloadAllBtn.textContent = 'Baixar Todos (.zip)';
            downloadAllBtn.onclick = () => {
                const zip = new JSZip();
                pdfTexts.forEach((text, i) => {
                    const fileName = pdfNames[i].replace(/\.pdf$/i, '.txt');
                    zip.file(fileName, text);
                });
                zip.generateAsync({ type: "blob" }).then(content => {
                    const a = document.createElement('a');
                    a.href = URL.createObjectURL(content);
                    a.download = "textos_extraidos.zip";
                    a.click();
                });
            };
            copyButtonsContainer.appendChild(downloadAllBtn);
        }

        pdfTexts.forEach((text, i) => {
            const btnGroup = document.createElement('div');
            btnGroup.className = 'inline-block m-1';

            const copyBtn = document.createElement('button');
            copyBtn.className = 'bg-red-600 text-white font-bold py-2 px-4 rounded-l-lg hover:bg-red-700 transition-all duration-300';
            copyBtn.textContent = `Copiar #${i + 1}`;
            copyBtn.onclick = () => {
                navigator.clipboard.writeText(text).then(() => alert(`Texto do arquivo ${i + 1} copiado!`));
            };

            const downloadBtn = document.createElement('button');
            downloadBtn.className = 'bg-green-600 text-white font-bold py-2 px-4 rounded-r-lg hover:bg-green-700 transition-all duration-300 border-l border-green-800';
            downloadBtn.textContent = `Baixar #${i + 1}`;
            downloadBtn.onclick = () => {
                const blob = new Blob([text], { type: 'text/plain' });
                const fileName = pdfNames[i].replace(/\.pdf$/i, '.txt');
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = fileName;
                a.click();
                URL.revokeObjectURL(url);
            };

            btnGroup.appendChild(copyBtn);
            btnGroup.appendChild(downloadBtn);
            copyButtonsContainer.appendChild(btnGroup);
        });
    }
</script>

<?php include $_SERVER['DOCUMENT_ROOT'] . '/footer.php'; ?>

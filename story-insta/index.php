<?php include $_SERVER['DOCUMENT_ROOT'] . '/header.php'; ?>

<!-- SCRIPT DO TAILWIND CSS - ESSENCIAL PARA O VISUAL DA FERRAMENTA -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- Estilos específicos para esta página -->
<style>
    /* Fundo quadriculado para indicar transparência (versão escura) */
    .canvas-bg {
        background-image:
            linear-gradient(45deg, #374151 25%, transparent 25%),
            linear-gradient(-45deg, #374151 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, #374151 75%),
            linear-gradient(-45deg, transparent 75%, #374151 75%);
        background-size: 20px 20px;
        background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
    }
</style>

<!-- Container principal que centraliza apenas a ferramenta, sem afetar o header/footer -->
<main class="flex items-center justify-center w-full px-4 py-8">

    <div class="bg-gray-800 border border-gray-700 p-6 md:p-8 rounded-2xl shadow-2xl w-full" style="max-width: 1200px;">
        
        <!-- Cabeçalho da Ferramenta -->
        <div class="text-center mb-8">
            <!-- Logo SVG DEERS.SPACE -->
            <svg class="mx-auto h-12 w-auto mb-4 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 14l-4-4h8l-4 4z" />
              <path d="M12 18v-4" />
              <path d="M12 4a8 8 0 0 1 8 8c0 4.418-3-8 8s-8-3.582-8-8 3.582-8 8-8z" />
              <path d="M18 8l-2.5 2.5" />
              <path d="M6 8l2.5 2.5" />
            </svg>
            <h1 class="text-3xl font-bold text-white">Ajustador de Imagem DEERS.SPACE</h1>
            <p class="text-gray-400 mt-2">Prepare suas imagens para Stories e Reels no formato 1080x2220px.</p>
        </div>

        <!-- Área de Upload -->
        <div class="flex justify-center mb-6">
            <label for="image-upload" class="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg cursor-pointer hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-500/20">
                Escolher Imagem
            </label>
            <input type="file" id="image-upload" class="hidden" accept="image/*">
        </div>

        <!-- Área de Pré-visualização e Resultado -->
        <div id="preview-area" class="hidden grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            
            <!-- Imagem Original -->
            <div>
                <h2 class="text-xl font-semibold text-gray-200 mb-3 text-center">Original</h2>
                <div class="bg-gray-900 rounded-lg overflow-hidden shadow-inner">
                    <img id="original-preview" src="#" alt="Pré-visualização da imagem original" class="w-full h-auto object-contain">
                </div>
            </div>
            
            <!-- Imagem Resultante -->
            <div>
                <h2 class="text-xl font-semibold text-gray-200 mb-3 text-center">Resultado (Proporção 1080x2220)</h2>
                <div class="canvas-bg border-2 border-dashed border-gray-600 rounded-lg shadow-inner">
                    <canvas id="result-canvas" class="w-full h-auto"></canvas>
                </div>
                <div class="mt-4 p-3 bg-gray-700 border border-blue-900 rounded-lg text-sm text-blue-300 text-center">
                    <p>A área de conteúdo visível (1080x1920) está centralizada. As faixas de 150px no topo e na base ficarão transparentes.</p>
                </div>
            </div>
        </div>

        <!-- Botão de Download -->
        <div class="mt-8 text-center">
            <a id="download-btn" href="#" class="hidden bg-green-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-green-700 transition-all duration-300 shadow-lg shadow-green-500/20 text-lg">
                Baixar Imagem Ajustada
            </a>
        </div>
    </div>

</main>

<script>
    // --- SELEÇÃO DOS ELEMENTOS DO DOM ---
    const imageUpload = document.getElementById('image-upload');
    const originalPreview = document.getElementById('original-preview');
    const resultCanvas = document.getElementById('result-canvas');
    const downloadBtn = document.getElementById('download-btn');
    const previewArea = document.getElementById('preview-area');
    const ctx = resultCanvas.getContext('2d');

    // --- CONSTANTES DE DIMENSÃO ---
    const CANVAS_WIDTH = 1080;
    const CANVAS_HEIGHT = 2220;
    const SAFE_AREA_WIDTH = 1080;
    const SAFE_AREA_HEIGHT = 1920;
    const TOP_OFFSET = 150;

    // --- EVENT LISTENER PARA O UPLOAD DA IMAGEM ---
    imageUpload.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (!file) {
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                originalPreview.src = e.target.result;
                
                resultCanvas.width = CANVAS_WIDTH;
                resultCanvas.height = CANVAS_HEIGHT;

                ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

                const scale = Math.min(SAFE_AREA_WIDTH / img.width, SAFE_AREA_HEIGHT / img.height);
                const newWidth = img.width * scale;
                const newHeight = img.height * scale;

                const x = (SAFE_AREA_WIDTH - newWidth) / 2;
                const y = ((SAFE_AREA_HEIGHT - newHeight) / 2) + TOP_OFFSET;

                ctx.drawImage(img, x, y, newWidth, newHeight);

                downloadBtn.href = resultCanvas.toDataURL('image/png');
                downloadBtn.download = 'instagram_ajustado.png';

                previewArea.classList.remove('hidden');
                downloadBtn.classList.remove('hidden');
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    });
</script>

<?php include $_SERVER['DOCUMENT_ROOT'] . '/footer.php'; ?>

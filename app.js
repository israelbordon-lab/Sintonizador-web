// 1. LISTA DE EMISORAS MP3
const customStations = [
  {
    name: "Radio Somos",
    genre: "AM 530",
    url: "http://cdn.instream.audio:9288/stream"
  },
  {
    name: "Radio Continental",
    genre: "AM 590",
    url: "https://edge03.radiohdvivo.com/continental"
  },
  {
    name: "Radio Rivadavia",
    genre: "AM 630",
    url: "https://27353.live.streamtheworld.com/RIVADAVIAAAC_SC?dist=triton-widget&pname=tdwidgets"
  },
  {
    name: "Radio Pagina 12",
    genre: "AM 750",
    url: "https://26573.live.streamtheworld.com/AM750AAC_SC"
  },
  {
    name: "Radio Nacional Buenos Aires",
    genre: "AM 870",
    url: "https://sa.mp3.icecast.magma.edge-access.net/sc_rad1"
  },
  {
    name: "Radio La Red",
    genre: "AM 910",
    url: "https://27343.live.streamtheworld.com/LA_RED_AM910AAC_SC"
  },
  {
    name: "Radio Splendid",
    genre: "AM 990",
    url: "https://24443.live.streamtheworld.com/AM990AAC_SC"
  },
  {
    name: "Radio Del Plata",
    genre: "AM 1030",
    url: "https://stream-280.surfernetwork.com/sxpab7rt7hhvv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJzeHBhYjdydDdoaHZ2IiwiaG9zdCI6InN0cmVhbS0yODAuc3VyZmVybmV0d29yay5jb20iLCJydHRsIjo1LCJqdGkiOiJWcm9iZ3Nyd1IwcS1nYU5IaDZJV1ZnIiwiaWF0IjoxNzkwMTAwODI4LCJleHAiOjE3OTAxMDA4ODh9.jcxwlXb7oHSvKns6rcbuSTpM9drRek2t0CEagB6sNe0"
  },
  {
    name: "Radio UNM",
    genre: "FM 88.7",
    url: "https://radiostreamingserver.com.ar/stream/ciudadunmradio"
  },
    {
    name: "Radio Rey de Reyes Gospel",
    genre: "FM 88.1",
    url: "https://ohradio.cc/8092/stream"
  },
  {
    name: "Radio Con Vos",
    genre: "FM 89.9",
    url: "https://server1.stweb.tv/rcvos/live/playlist.m3u8"
  },
  {
    name: "Radio Pública Moreno ",
    genre: "FM 90.7",
    url: "https://stream-179.surfernetwork.com/9m7mxee7yf9uv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiI5bTdteGVlN3lmOXV2IiwiaG9zdCI6InN0cmVhbS0xNzkuc3VyZmVybmV0d29yay5jb20iLCJydHRsIjo1LCJqdGkiOiJ6U3dTTG5DMFFQLXFlRFZvbkx1SDJ3IiwiaWF0IjoxNzkwMTAxMjU3LCJleHAiOjE3OTAxMDEzMTd9.awTct_S79bdP8HQ-MQtEXa4zWd8cbSVi9XkKWsRYDtk"
  },
  {
    name: "Radio El Cambio",
    genre: "FM 92.5",
    url: "https://streaming01.radiosenlinea.com.ar:10639/stream"
  },
  {
    name: "Radio Disney",
    genre: "FM 94.3",
    url: "https://26683.live.streamtheworld.com/DISNEY_ARG_BA.mp3?dist=web-radiodisney&bundle-id=com.disney.radiodisneybrazil_goo"
  },
  {
    name: "Radio Cristiana",
    genre: "FM 95.7",
    url: "https://genexservicios.com:8098/;?1790778843732"
  },
  {
    name: "Radio Rock & Pop",
    genre: "FM 95.9",
    url: "https://24383.live.streamtheworld.com/ROCKANDPOPAAC_SC"
  },
  {
    name: "Radio Vale",
    genre: "FM 97.5",
    url: "https://vale.stweb.tv/vale/live/playlist.m3u8"
  },
  {
    name: "Radio Mega",
    genre: "FM 98.3",
    url: "https://mega.stweb.tv/mega983/live/playlist.m3u8"
  },
  {
    name: "Radio Pasion",
    genre: "FM 98.7",
    url: "https://cdn.instream.audio/stream/9790"
  },
  {
    name: "Radio POP",
    genre: "FM 101.5",
    url: "https://popradio.stweb.tv/popradio/live/playlist.m3u8"
  },
  {
    name: "Radio Aspen",
    genre: "FM 102.3",
    url: "https://27373.live.streamtheworld.com/ASPEN.mp3"
  },
  {
    name: "Radio DSport",
    genre: "FM 103.1",
    url: "https://26673.live.streamtheworld.com/DSPORTSRADIOAAC_SC"
  },
  {
    name: "Radio ONE",
    genre: "FM 103.7",
    url: "https://one.stweb.tv/one/live/playlist.m3u8"
  },
  {
    name: "Radio Los 40",
    genre: "FM 105.5",
    url: "https://edge03.radiohdvivo.com/los40"
  },
  {
    name: "Radio Zonica",
    genre: "Online",
    url: "https://streamlky.alsolnet.com/radiozonica"
  }
  
];

// 2. REFERENCIAS A ELEMENTOS DEL DOM
const audio = document.getElementById('audio-player');
const playBtn = document.getElementById('play-btn');
const stationList = document.getElementById('station-list');
const stationName = document.getElementById('station-name');
const stationGenre = document.getElementById('station-genre');
const volumeSlider = document.getElementById('volume-slider');

let currentIndex = 0;

// 3. CARGAR Y RENDERIZAR EMISORAS
function loadManualStations() {
  stationList.innerHTML = '';
  customStations.forEach((st, idx) => {
    const li = document.createElement('li');
    li.textContent = `${st.name} — ${st.genre}`;
    li.onclick = () => {
      currentIndex = idx;
      playStation(currentIndex);
    };
    stationList.appendChild(li);
  });

  // Recuperar la última emisora escuchada desde LocalStorage
  const savedIndex = localStorage.getItem('lastStationIndex');
  currentIndex = savedIndex !== null ? parseInt(savedIndex) : 0;
  selectStation(currentIndex);
}

// 4. SELECCIONAR ESTACIÓN (Sin reproducir automáticamente)
function selectStation(index) {
  const st = customStations[index];
  audio.src = st.url;
  stationName.textContent = st.name;
  stationGenre.textContent = st.genre;
}

// 5. REPRODUCIR ESTACIÓN Y GUARDAR SELECCIÓN
function playStation(index) {
  selectStation(index);
  localStorage.setItem('lastStationIndex', index); // Guarda la radio actual
  audio.play();
  playBtn.textContent = '⏸';
}

// 6. EVENTOS DE CONTROLES
playBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = '⏸';
  } else {
    audio.pause();
    playBtn.textContent = '▶';
  }
});

volumeSlider.addEventListener('input', (e) => {
  audio.volume = e.target.value;
});

// 7. DETECTOR DE ESTADO DE LA TRANSMISIÓN (CARGANDO / ERROR)
audio.addEventListener('waiting', () => {
  stationGenre.textContent = 'Conectando señal...';
});

audio.addEventListener('playing', () => {
  stationGenre.textContent = customStations[currentIndex].genre;
});

audio.addEventListener('error', () => {
  stationGenre.textContent = '⚠️ Señal no disponible o bloqueada';
  playBtn.textContent = '▶';
});

// INICIALIZACIÓN
loadManualStations();

function updateMediaSession(station) {
  if ('mediaSession' in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: station.name,
      artist: station.genre,
      album: 'Sintonizador Web',
      artwork: [
        { src: station.cover || 'https://via.placeholder.com/150', sizes: '150x150', type: 'image/png' }
      ]
    });

    navigator.mediaSession.setActionHandler('play', () => audio.play());
    navigator.mediaSession.setActionHandler('pause', () => audio.pause());
    navigator.mediaSession.setActionHandler('previoustrack', () => playPrevStation());
    navigator.mediaSession.setActionHandler('nexttrack', () => playNextStation());
  }
}

// Íconos SVG estandarizados en formato vectorial (Compatibilidad total con iOS/Android)
const SVG_PLAY = `<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`;
const SVG_PAUSE = `<svg viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`;
const SVG_PREV = `<svg viewBox="0 0 24 24"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/></svg>`;
const SVG_NEXT = `<svg viewBox="0 0 24 24"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/></svg>`;

// Actualizar la asignación del botón de Play/Pausa dentro de tu código:
function updatePlayButtonState(isPlaying) {
  if (isPlaying) {
    playBtn.innerHTML = SVG_PAUSE;
  } else {
    playBtn.innerHTML = SVG_PLAY;
  }
}

// Ejemplo de integración en la reproducción:
audio.play().then(() => {
  updatePlayButtonState(true);
  playerCard.classList.add('playing');
}).catch(() => {
  updatePlayButtonState(false);
  playerCard.classList.remove('playing');
});


// Definición de íconos en HTML puro (inmunes al renderizado de emojis de iOS)
const ICON_PLAY = '<span class="icon-symbol" style="font-size: 1.4rem; margin-left: 3px;">▶</span>';

// Pausa dibujada con dos barras CSS reales (sin usar caracteres unicode de pausa)
const ICON_PAUSE = `
  <span style="display: flex; gap: 5px; align-items: center; justify-content: center; width: 100%; height: 100%;">
    <span style="width: 5px; height: 19px; background-color: #ffffff; border-radius: 2px; display: inline-block;"></span>
    <span style="width: 5px; height: 19px; background-color: #ffffff; border-radius: 2px; display: inline-block;"></span>
  </span>
`;

// Función para actualizar el botón
function setPlayState(isPlaying) {
  const playBtn = document.getElementById('play-btn');
  if (!playBtn) return;

  if (isPlaying) {
    playBtn.innerHTML = ICON_PAUSE;
  } else {
    playBtn.innerHTML = ICON_PLAY;
  }
}

// Integración en los eventos de tu reproductor:
audio.addEventListener('play', () => {
  setPlayState(true);
  playerCard.classList.add('playing');
});

audio.addEventListener('pause', () => {
  setPlayState(false);
  playerCard.classList.remove('playing');
});


// ==========================================
// VISUALIZADOR DE ONDA DE SONIDO PROFESIONAL
// ==========================================
const canvas = document.getElementById('visualizer-canvas');
const ctx = canvas.getContext('2d');

let wavePhase = 0;
let currentAmplitude = 0; // Para transición suave entre play/pausa

function drawProSoundWave() {
  requestAnimationFrame(drawProSoundWave);

  // Escalar el Canvas según la densidad de píxeles del dispositivo (Pantallas Retina/OLED)
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();

  if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
  }

  ctx.save();
  ctx.scale(dpr, dpr);

  const width = rect.width;
  const height = rect.height;
  const centerY = height / 2;

  ctx.clearRect(0, 0, width, height);

  // Determinar la amplitud objetivo según el estado de reproducción
  const isPlaying = typeof audio !== 'undefined' && !audio.paused;
  const targetAmplitude = isPlaying ? 1 : 0;

  // Transición suave de amplitud (interpolación lineal / Lerp)
  currentAmplitude += (targetAmplitude - currentAmplitude) * 0.05;

  // Incrementar la fase solo cuando está activo para mover la onda
  wavePhase += isPlaying ? 0.04 : 0.005;

  // Configuración de las 4 capas de ondas profesionales
  const waveLayers = [
    {
      colorStart: 'rgba(99, 102, 241, 0.8)',  // Índigo
      colorEnd: 'rgba(168, 85, 247, 0.2)',
      amplitude: 22 * currentAmplitude,
      frequency: 0.012,
      speed: 1,
      lineWidth: 2.5
    },
    {
      colorStart: 'rgba(236, 72, 153, 0.7)',  // Rosa Neón
      colorEnd: 'rgba(99, 102, 241, 0.1)',
      amplitude: 16 * currentAmplitude,
      frequency: 0.018,
      speed: -1.3,
      lineWidth: 2
    },
    {
      colorStart: 'rgba(56, 189, 248, 0.6)',  // Cyan / Azul Claro
      colorEnd: 'rgba(168, 85, 247, 0.1)',
      amplitude: 10 * currentAmplitude,
      frequency: 0.025,
      speed: 0.8,
      lineWidth: 1.5
    },
    {
      colorStart: 'rgba(255, 255, 255, 0.3)', // Línea de brillo central
      colorEnd: 'rgba(255, 255, 255, 0.0)',
      amplitude: 4 * currentAmplitude,
      frequency: 0.008,
      speed: 1.5,
      lineWidth: 1
    }
  ];

  // Dibujar cada capa con gradiente y suavizado de curvas
  waveLayers.forEach(layer => {
    ctx.beginPath();
    
    // Gradiente horizontal para cada onda
    const gradient = ctx.createLinearGradient(0, 0, width, 0);
    gradient.addColorStop(0, layer.colorEnd);
    gradient.addColorStop(0.5, layer.colorStart);
    gradient.addColorStop(1, layer.colorEnd);

    ctx.strokeStyle = gradient;
    ctx.lineWidth = layer.lineWidth;

    let prevX = 0;
    let prevY = centerY;

    for (let x = 0; x <= width; x += 4) {
      // Modulación envolvente (hace que la onda sea más suave en los bordes y amplia en el centro)
      const envelope = Math.sin((x / width) * Math.PI);
      
      // Ecuación armónica compuesta para la onda
      const harmonic1 = Math.sin(x * layer.frequency + wavePhase * layer.speed);
      const harmonic2 = Math.cos(x * (layer.frequency * 1.5) - wavePhase * 0.5);
      
      const y = centerY + (harmonic1 + harmonic2 * 0.5) * layer.amplitude * envelope;

      if (x === 0) {
        ctx.moveTo(x, y);
      } else {
        // Curva suave usando quadraticCurveTo
        const xc = (x + prevX) / 2;
        const yc = (y + prevY) / 2;
        ctx.quadraticCurveTo(prevX, prevY, xc, yc);
      }

      prevX = x;
      prevY = y;
    }

    ctx.stroke();
  });

  // Si está completamente pausado, dibuja una fina línea guía neutra
  if (currentAmplitude < 0.01) {
    ctx.beginPath();
    ctx.moveTo(0, centerY);
    ctx.lineTo(width, centerY);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  ctx.restore();
}

// Iniciar animación continua
drawProSoundWave();

// Detectar si el dispositivo es un iPhone / iPad / iPod
function isIOS() {
  return [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
  ].includes(navigator.platform)
  // Soporte para iPads modernos en iPadOS
  || (navigator.userAgent.includes("Mac") && "ontouchend" in document);
}

// Ocultar o adaptar el control de volumen si es iOS
function setupVolumeControlForIOS() {
  const volumeContainer = document.querySelector('.volume-container'); // o el contenedor de tu slider
  
  if (isIOS() && volumeContainer) {
    // Opción A: Reemplazar por una nota indicativa elegante
    volumeContainer.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: center; gap: 6px; opacity: 0.6; font-size: 0.75rem; color: #fff;">
        <span style="font-size: 0.9rem;">🔊</span> Usa los botones laterales de tu iPhone para el volumen
      </div>
    `;
  }
}

// Ejecutar al iniciar la app
document.addEventListener('DOMContentLoaded', setupVolumeControlForIOS);

// Detección estricta de dispositivos iOS (iPhone, iPad, iPod)
function isIOSDevice() {
  return [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
  ].includes(navigator.platform)
  // Compatibilidad con iPads en iPadOS que se identifican como Mac
  || (navigator.userAgent.includes("Mac") && "ontouchend" in document);
}

// Ocultar el slider si se accede desde un iPhone/iPad
function applyIOSVolumePolicy() {
  if (isIOSDevice()) {
    // Reemplaza '.volume-container' o '#volume-slider' por el contenedor de tu slider
    const volumeContainer = document.querySelector('.volume-container') || document.getElementById('volume-slider')?.parentElement;
    
    if (volumeContainer) {
      volumeContainer.classList.add('ios-hide-volume');
    }
  }
}

// Ejecutar automáticamente al cargar la aplicación
document.addEventListener('DOMContentLoaded', applyIOSVolumePolicy);

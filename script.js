const scenes = [
  // --- INTRO SCENES ---
  {
    type: "intro",
    kaiMood: "assets/kai/SALUDANDO.png",
    text: "Hola!!... tu debes ser Daniela, Neil me ha hablado muy bien de ti, eres aún más linda de lo que me dijo (tranquilo Neil, es toda tuya)",
  },
{
    type: "intro",
    kaiMood: "assets/kai/SALUDANDO.png",
    text: "Me presento soy Kai, su compañero y asistente, estoy encantado de conocerte, al fin me personificó",
  },
  {
    type: "intro",
    kaiMood: "assets/kai/PENSANDO.png",
    text: "Jaja! que bueno que estes viendo esto, hoy es dia 14 y Neil me dijo que hoy cumplen 6 meses de novios, muchas felicidades",
  },
  {
    type: "intro",
    kaiMood: "assets/kai/PENSANDO.png",
    text: "eso es una cifra excelente, en la actualidad eso para muchos es como una eternidad",
  },
  {
    type: "intro",
    kaiMood: "assets/kai/PENSANDO.png",
    text: "Contándolo en binario son unos cuantos números pero ese es más mi idioma",
  },
  {
    type: "intro",
    kaiMood: "assets/kai/CUCHI.png",
    text: "Me estoy desviando discúlpame, éste es un regalo en el que ayudé a Neil para mostrarte su agradecimiento por estos 6 meses",
  },
  {
    type: "intro",
    kaiMood: "assets/kai/PENSANDO.png",
    text: "Durante este tiempo han tenido muchos momentos juntos y que mejor que recapitularlos un poco, puedes ir pasando las imágenes con el espacio:",
  },

  // --- MEMORY SCENES ---
  {
    type: "memory",
    kaiMood: "assets/kai/CUCHI.png",
    memoryType: "image", // 'image' or 'video'
    memorySrc: "assets/recuerdos/gym2.jpeg",
    text: "EL PRIMERO...donde todo comenzó, el gimnasio, parece que fue ayer... el tiempo pasa volando",
  },
  {
    type: "memory",
    kaiMood: "assets/kai/RIENDO.png",
    memoryType: "image",
    memorySrc: "assets/recuerdos/gym.jpeg",
    text: "Neil pensaba que tu eras mayor y me contó sorprendido como apenas tenías 17",
  },
  {
    type: "intro",
    kaiMood: "assets/kai/PENSANDO.png",
    text: "También me comentó sobre su primera cita que fue todo un Tour por Valencia, que divertido",
  },
  {
    type: "memory",
    kaiMood: "assets/kai/TIERNO.png",
    memoryType: "image",
    memorySrc: "assets/recuerdos/cumplenil.jpeg",
    text: "Uno de los primeros recuerdos... el cumpleaños de Neil (me dijo que le regalaste muchas cosas de Messi aunque no te gusta)",
  },
  {
    type: "memory",
    kaiMood: "assets/kai/RIENDO.png",
    memoryType: "image", 
    memorySrc: "assets/recuerdos/cumplenil.jpeg",
    text: "Salen tan lindos, hasta hubo una foto que saliste con un chicle jajaja",
  },
  {
    type: "memory",
    kaiMood: "assets/kai/TIERNO.png",
    memoryType: "video",
    memorySrc: "assets/recuerdos/metroland.mp4",
    text: "luego siguió la segunda cita, Metroland, me dijo que fue divertidísima y que no le pudiste ganar en los carritos",
  },
  {
    type: "memory",
    kaiMood: "assets/kai/RIENDO.png",
    memoryType: "video",
    memorySrc: "assets/recuerdos/video 1.mp4",
    text: "aquí entre tú y yo mejor que se siga dedicando a programar porque de arquero no tiene nada jaja",
  },
  {
    type: "memory",
    kaiMood: "assets/kai/TIERNO.png",
    memoryType: "image",
    memorySrc: "assets/recuerdos/pedida.jpeg",
    text: "luego llegó el momento mas esperado, la pedida",
  },
  {
    type: "memory",
    kaiMood: "assets/kai/TIERNO.png",
    memoryType: "image",
    memorySrc: "assets/recuerdos/pedida.jpeg",
    text: "que linda estabas, Neil te preparó una muy buena sorpresa sin duda, no creo que te dejara ir tán facil",
  },
    {
    type: "memory",
    kaiMood: "assets/kai/RIENDO.png",
    memoryType: "image",
    memorySrc: "assets/recuerdos/futbol.jpeg",
    text: "como olvidarlo!! el futbol, la primera vez que lo acompañaste... yo también le he aconsejado con la rodilla, es muy terco",
  },
  {
    type: "memory",
    kaiMood: "assets/kai/PENSANDO.png",
    memoryType: "image",
    memorySrc: "assets/recuerdos/futbol.jpeg",
    text: "me comentó que es una de sus fotos favoritas porque ese día estabas muy linda",
  },
  {
    type: "memory",
    kaiMood: "assets/kai/CUCHI.png",
    memoryType: "image",
    memorySrc: "assets/recuerdos/disco2.jpeg",
    text: "la disco!!, que casi no te dejan pasar...ese día la pasaron genial",
  },
  {
    type: "memory",
    kaiMood: "assets/kai/CUCHI.png",
    memoryType: "video",
    memorySrc: "assets/recuerdos/disco.mp4",
    text: "Mira como disfrutaban, nunca habia visto bailar tan bien el aserejé",
  },
  {
    type: "memory",
    kaiMood: "assets/kai/CORAZON.png",
    memoryType: "image",
    memorySrc: "assets/recuerdos/mexico.jpeg",
    text: "su mesuario!, que sorpresa!! te llevó a un pedacito de México",
  },
  {
    type: "memory",
    kaiMood: "assets/kai/PENSANDO.png",
    memoryType: "image",
    memorySrc: "assets/recuerdos/mexico.jpeg",
    text: "me comentó que te gusta mucho su cultura y te acompaño en eso, es muy linda",
  },
  {
    type: "memory",
    kaiMood: "assets/kai/RIENDO.png",
    memoryType: "image",
    memorySrc: "assets/recuerdos/fiesta.jpeg",
    text: "la fiesta increible de tu amigo jaja aunque no tanto como el lugar",
  },
  {
    type: "memory",
    kaiMood: "assets/kai/RIENDO.png",
    memoryType: "image",
    memorySrc: "assets/recuerdos/fiesta.jpeg",
    text: "me comentó que Guigue a las 12 de la noche es mas bonito, no conozco Guigue pero debe ser gracioso",
  },
  {
    type: "memory",
    kaiMood: "assets/kai/TIERNO.png",
    memoryType: "image",
    memorySrc: "assets/recuerdos/pistazie.jpeg",
    text: "otro mesuario! que lindo dia, a Neil le gusta como te queda esa camisa",
  },
   {
    type: "memory",
    kaiMood: "assets/kai/TROTANDO.png",
    memoryType: "image",
    memorySrc: "assets/recuerdos/caminata.jpeg",
    text: "El día de la caminata, ese día sudaron como nunca! un poco de ejercicio es muy importante",
  },
  {
    type: "memory",
    kaiMood: "assets/kai/CUCHI.png",
    memoryType: "image",
    memorySrc: "assets/recuerdos/caminata.jpeg",
    text: "Y el concierto de Victor Muñoz, que lindo dia. ",
  },
    {
    type: "memory",
    kaiMood: "assets/kai/PLAYA.png",
    memoryType: "image",
    memorySrc: "assets/recuerdos/playa.jpeg",
    text: "TUCACAS... un poco de sol y playa siempre hacen los días perfectos.",
  },
      {
    type: "memory",
    kaiMood: "assets/kai/PLAYA.png",
    memoryType: "image",
    memorySrc: "assets/recuerdos/playa.jpeg",
    text: "Una de las fotos favoritas de Neil, improvisada pero con un significado especial",
  },
    {
    type: "memory",
    kaiMood: "assets/kai/TIERNO.png",
    memoryType: "image",
    memorySrc: "assets/recuerdos/cumple_dani.jpeg",
    text: "Tú cumpleee... de los recuerdos más recientes, conoció a tu hermano, y el regalo del reloj!",
  },
      {
    type: "memory",
    kaiMood: "assets/kai/CUCHI.png",
    memoryType: "image",
    memorySrc: "assets/recuerdos/legos.jpeg",
    text: "Y que se han vuelto fanáticos de los legos, son una gran actividad en pareja",
  },
    {
    type: "intro",
    kaiMood: "assets/kai/CORAZON.png",
    text: "Tantos momentos juntos, que sin duda hay que saber elegir con quien vivirlos y está con la persona correcta",
  },
    {
    type: "intro",
    kaiMood: "assets/kai/CORAZON.png",
    text: "Felices 6 meses juntos ❤️, espero que la torta que hiciste sea deliciosa",
  },
    {
    type: "intro",
    kaiMood: "assets/kai/CORAZON.png",
    text: "Disfruten mucho su día, aquí Neil te dejó una carta final",
  },

  // --- ESCENA DE CARTA (Placeholder) ---
  {
    type: "letter",
    kaiMood: "assets/kai/TIERNO.png", // Kai looks on happily
    text: ""
  },
];

// State
let currentSceneIndex = 0;
let isTyping = false;
let typeWriterTimeout;

// DOM Elements
const kaiLayer = document.querySelector(".kai-layer");
const contentLayer = document.querySelector(".content-layer");
const memoryContainer = document.getElementById("memory-container");
const letterContainer = document.getElementById("letter-container");
const kaiImage = document.getElementById("kai-image");
const dialogueText = document.getElementById("dialogue-text");
const memoryImage = document.getElementById("memory-image");
const memoryVideo = document.getElementById("memory-video");

// --- INITIALIZATION ---
function init() {
  renderScene(0);
}

// --- CORE FUNCTIONS ---

function renderScene(index) {
  const scene = scenes[index];

  // 1. Update Text with Typewriter Effect
  typeWriter(scene.text);

  // 2. Update Kai Layout State
  updateLayoutState(scene.type);

  // 3. Update Kai Image
  kaiImage.src = scene.kaiMood;

  // 4. Handle Content (Memories / Letter)
  if (scene.type === "memory") {
    memoryContainer.classList.remove("hidden");
    letterContainer.classList.add("hidden");

    if (scene.memoryType === "video") {
      memoryImage.classList.add("hidden");
      memoryVideo.classList.remove("hidden");
      memoryVideo.src = scene.memorySrc;
      memoryVideo
        .play()
        .catch((e) => console.log("Autoplay might need interaction", e));
    } else {
      memoryImage.classList.remove("hidden");
      memoryVideo.classList.add("hidden");
      memoryImage.src = scene.memorySrc;
      memoryVideo.pause();
    }
  } else if (scene.type === "letter") {
    memoryContainer.classList.add("hidden");
    letterContainer.classList.remove("hidden");
    // If we had letter text, we'd set it here, but it's hardcoded in HTML or placeholder for now
  } else {
    // Intro
    memoryContainer.classList.add("hidden");
    letterContainer.classList.add("hidden");
    memoryVideo.pause();
  }
}

function updateLayoutState(type) {
  // Remove all state classes first
  kaiLayer.classList.remove("state-intro", "state-memory", "state-letter");

  // Add new state class
  if (type === "intro") {
    kaiLayer.classList.add("state-intro");
  } else if (type === "memory") {
    kaiLayer.classList.add("state-memory");
  } else if (type === "letter") {
    kaiLayer.classList.add("state-memory"); // Re-use memory layout (corner) for letter, or create specific one
    // Optionally hide Kai or move him differently for letter
  }
}

function typeWriter(text) {
  // Clear previous typing
  if (typeWriterTimeout) clearTimeout(typeWriterTimeout);
  isTyping = true;
  dialogueText.innerHTML = "";

  let i = 0;
  const speed = 30; // ms per char

  function type() {
    if (i < text.length) {
      dialogueText.innerHTML += text.charAt(i);
      i++;
      typeWriterTimeout = setTimeout(type, speed);
    } else {
      isTyping = false;
    }
  }
  type();
}

function nextScene() {
  if (isTyping) {
    // If typing, finish immediately
    if (typeWriterTimeout) clearTimeout(typeWriterTimeout);
    dialogueText.innerHTML = scenes[currentSceneIndex].text;
    isTyping = false;
    return;
  }

  if (currentSceneIndex < scenes.length - 1) {
    currentSceneIndex++;
    renderScene(currentSceneIndex);
  }
}

// --- EVENT LISTENERS ---

document.body.addEventListener("keydown", (e) => {
  if (e.code === "Space" || e.code === "ArrowRight") {
    nextScene();
  }
});

document.body.addEventListener("click", () => {
  nextScene();
});

// --- HEARTS BACKGROUND ---
function createHearts() {
    const container = document.querySelector('.hearts-container');
    const heartCount = 15; // Number of hearts

    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        
        // Random properties
        const size = Math.random() * 20 + 10 + 'px';
        const left = Math.random() * 100 + '%';
        const delay = Math.random() * 5 + 's';
        const duration = Math.random() * 10 + 10 + 's';

        heart.style.width = size;
        heart.style.height = size;
        heart.style.left = left;
        heart.style.animationDelay = delay;
        heart.style.animationDuration = duration;

        container.appendChild(heart);
    }
}

// Start
document.addEventListener('DOMContentLoaded', () => {
    init();
    createHearts();
});

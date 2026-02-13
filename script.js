const scenes = [
  // --- INTRO SCENES ---
  {
    type: "intro",
    kaiMood: "assets/kai/SALUDANDO.png",
    text: "Hola Daniela, nos vemos de nuevo. Neil te hizo este regalito para este día tan especial",
  },
  {
    type: "intro",
    kaiMood: "assets/kai/CORAZON.png",
    text: "No solo cumplen mes, sino también es 14 de Febrero: ¡DÍA DE LOS ENAMORADOS! ❤️",
  },
  {
    type: "intro",
    kaiMood: "assets/kai/PENSANDO.png",
    text: "Espeeeera... pero aún no sé si realmente eres Daniela 🤔",
  },
  {
    type: "intro",
    kaiMood: "assets/kai/PENSANDO.png",
    text: "Responde estas preguntas para estar seguro...",
  },

  // --- QUIZ SCENES ---
  {
    type: "quiz",
    question: "¿Dónde fue nuestra primera cita?",
    options: ["Cine", "Mykonos y Tour por Valencia", "Metroland", "Parque"],
    correct: 1, 
    kaiMood: "assets/kai/PENSANDO.png"
  },
  {
    type: "quiz",
    question: "¿Qué me regalaste en mi cumpleaños que recuerdas con cariño?",
    options: ["Perfume", "Zapatos", "Cadenita y Cosas de Messi", "Reloj"],
    correct: 2,
    kaiMood: "assets/kai/TIERNO.png"
  },
  {
    type: "quiz",
    question: "¿Dónde nos conocimos?",
    options: ["Universidad", "Instagram", "Fiesta", "En el Gimnasio"],
    correct: 3,
    kaiMood: "assets/kai/RIENDO.png"
  },
    {
    type: "quiz",
    question: "Completa la frase: ¿No me dejarias ni...?",
    options: ["Por un carro", "por Josh Hutcherson", "porque te paguen", "por nada del mundo"],
    correct: 2,
    kaiMood: "assets/kai/RIENDO.png"
  },
  {
    type: "quiz",
    question: "¿Que me regalabas siempre en el gym?",
    options: ["Un chicle", "Agua", "Trululú", "Un gato"],
    correct: 2,
    kaiMood: "assets/kai/RIENDO.png"
  },
    {
    type: "quiz",
    question: "¿Cual fue la primera canción que bailamos?",
    options: ["La melodía - Joey Montana", "Eres Perfecta - Oscarcito", "Ven Conmigo - Daddy Yankee ft. Prince Royce", "Me marcharé - Los Cadillacs ft. Wisin"],
    correct: 3,
    kaiMood: "assets/kai/RIENDO.png"
  },

  // --- CONFIRMATION ---
  {
    type: "intro",
    kaiMood: "assets/kai/CUCHI.png",
    text: "¡DANI Genial! Si eres tú. jeje disculpa es que a veces hay que asegurarse...Ahora sí, veamos lo que Neil preparó para ti.",
  },

    {
    type: "intro",
    kaiMood: "assets/kai/CORAZON.png",
    text: "Primero que nada, Felices 8 meses juntos 💗,por favor esta vez guardenme algo de torta jeje.",
  },
  {
    type: "intro",
    kaiMood: "assets/kai/CORAZON.png",
    text: "Pero antes de despedirme, Neil tiene una pregunta muy importante para ti...",
  },

  // --- PROPOSAL SCENE ---
  {
    type: "proposal",
    kaiMood: "assets/kai/TIERNO.png",
    text: "Mira..."
  }
];

// State
let currentSceneIndex = 0;
let isTyping = false;
let typeWriterTimeout;
let isWaiting = true; 
let isQuizActive = false;
let isProposalActive = false;

// DOM Elements
const kaiLayer = document.querySelector(".kai-layer");
const contentLayer = document.querySelector(".content-layer");
const memoryContainer = document.getElementById("memory-container");
const letterContainer = document.getElementById("letter-container");
const quizContainer = document.getElementById("quiz-container");
const proposalContainer = document.getElementById("proposal-container");
const kaiImage = document.getElementById("kai-image");
const dialogueText = document.getElementById("dialogue-text");
const memoryImage = document.getElementById("memory-image");
const memoryVideo = document.getElementById("memory-video");
const waitingScreen = document.getElementById("waiting-screen");
const startBtn = document.getElementById("start-btn");

// Quiz Elements
const quizQuestion = document.getElementById("quiz-question");
const quizOptions = document.getElementById("quiz-options");

// Proposal Elements
const btnSi = document.getElementById("btn-si");
const btnNo = document.getElementById("btn-no");

// Available photos for background
const backgroundPhotos = [
    "assets/recuerdos/gym2.jpeg",
    "assets/recuerdos/cumplenil.jpeg",
    "assets/recuerdos/pedida.jpeg",
    "assets/recuerdos/futbol.jpeg",
    "assets/recuerdos/mexico.jpeg",
    "assets/recuerdos/playa.jpeg"
];

// --- INITIALIZATION ---
function init() {
  waitingScreen.classList.remove("hidden");
  kaiLayer.classList.add("hidden"); 
  contentLayer.classList.add("hidden");
  if(quizContainer) quizContainer.classList.add("hidden");
  if(proposalContainer) proposalContainer.classList.add("hidden");
  
  createHearts();
}

startBtn.addEventListener("click", () => {
    startExperience();
});

function startExperience() {
    isWaiting = false;
    waitingScreen.classList.add("hidden");
    
    // Show main layers
    kaiLayer.classList.remove("hidden");
    contentLayer.classList.remove("hidden");
    
    renderScene(0);
}

// --- CORE FUNCTIONS ---

function renderScene(index) {
  const scene = scenes[index];

  // Common: Update Kai
  kaiImage.src = scene.kaiMood;
  updateLayoutState(scene.type);
  
  // Hide all containers by default
  memoryContainer.classList.add("hidden");
  letterContainer.classList.add("hidden");
  if(quizContainer) quizContainer.classList.add("hidden");
  if(proposalContainer) proposalContainer.classList.add("hidden");
  isQuizActive = false;
  isProposalActive = false;

  // Typewriter for text (except quiz might handle it differently)
  if (scene.type !== 'proposal') { // Proposal has text but might be different
      typeWriter(scene.text || ""); 
  }

  // Handle Scene Types
  if (scene.type === "intro") {
      // Just Kai and Text
      memoryVideo.pause();

  } else if (scene.type === "memory") {
    memoryContainer.classList.remove("hidden");

    if (scene.memoryType === "video") {
      memoryImage.classList.add("hidden");
      memoryVideo.classList.remove("hidden");
      memoryVideo.src = scene.memorySrc;
      memoryVideo.play().catch((e) => console.log("Autoplay", e));
    } else {
      memoryImage.classList.remove("hidden");
      memoryVideo.classList.add("hidden");
      memoryImage.src = scene.memorySrc;
      memoryVideo.pause();
    }
  } else if (scene.type === "letter") {
    letterContainer.classList.remove("hidden");
    memoryVideo.pause();

  } else if (scene.type === "quiz") {
      isQuizActive = true;
      if(quizContainer) quizContainer.classList.remove("hidden");
      renderQuiz(scene);
      typeWriter(""); // Clear bubble or put "..."
      memoryVideo.pause();

  } else if (scene.type === "proposal") {
      isProposalActive = true;
      if(proposalContainer) proposalContainer.classList.remove("hidden");
      typeWriter(scene.text);
      memoryVideo.pause();
  }
}

function renderQuiz(scene) {
    if(!quizQuestion || !quizOptions) return;
    
    quizQuestion.innerText = scene.question;
    quizOptions.innerHTML = "";
    
    scene.options.forEach((opt, idx) => {
        const btn = document.createElement("button");
        btn.innerText = opt;
        btn.classList.add("quiz-option");
        btn.onclick = () => {
            if(idx === scene.correct) {
                // Correct
                btn.classList.add("correct");
                // Play sound?
                setTimeout(() => {
                    isQuizActive = false;
                    nextScene();
                }, 1000);
            } else {
                // Wrong
                btn.classList.add("wrong");
                setTimeout(() => btn.classList.remove("wrong"), 500);
            }
        };
        quizOptions.appendChild(btn);
    });
}

function updateLayoutState(type) {
  kaiLayer.classList.remove("state-intro", "state-memory", "state-letter");

  if (type === "intro" || type === "quiz" || type === "proposal") {
    kaiLayer.classList.add("state-intro");
  } else if (type === "memory" || type === "letter") {
    kaiLayer.classList.add("state-memory");
  }
}

function typeWriter(text) {
  if (typeWriterTimeout) clearTimeout(typeWriterTimeout);
  isTyping = true;
  dialogueText.innerHTML = "";

  if(!text) {
      isTyping = false;
      return;
  }

  let i = 0;
  const speed = 30; 

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
  if (isWaiting || isQuizActive || isProposalActive) return; 

  if (isTyping) {
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
  if ((e.code === "Space" || e.code === "ArrowRight")) {
    nextScene();
  }
});

document.body.addEventListener("click", (e) => {
  if (e.target.closest(".quiz-option") || e.target.closest("button")) return; 
  nextScene();
});

// Proposal Logic
if(btnNo) {
    const moveBtn = () => {
        // Get viewport dimensions
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        
        // Get button dimensions (or estimate if not rendered yet)
        const btnWidth = btnNo.offsetWidth || 100;
        const btnHeight = btnNo.offsetHeight || 50;
        
        // Calculate max positions with safety margin
        const maxX = viewportWidth - btnWidth - 50;
        const maxY = viewportHeight - btnHeight - 50;
        
        // Ensure min position is at least 20px
        const randomX = Math.max(20, Math.random() * maxX);
        const randomY = Math.max(20, Math.random() * maxY);
        
        btnNo.style.position = "absolute";
        btnNo.style.zIndex = "1000"; // Ensure it's on top
        btnNo.style.left = randomX + "px";
        btnNo.style.top = randomY + "px";
    };

    btnNo.addEventListener("mouseover", moveBtn);
    btnNo.addEventListener("click", moveBtn);
}

if(btnSi) {
    btnSi.addEventListener("click", () => {
        // Optional: Change Kai mood to something super happy
        kaiImage.src = "assets/kai/CORAZON.png";
        typeWriter("¡Dijo que SII!... (y sin obligarla) ❤️❤️❤️ Nos vemos a las 7pm mañana, ponte hermosa (más de lo que eres). Será una sorpresa el lugar, pero vistete un poco elegante para la ocasión, SEGURO te gustará.");
        
        // Hide entire proposal card including invitation and buttons
        const card = proposalContainer.querySelector(".proposal-card");
        if(card) card.style.display = "none";
        
        // Fireworks or confetti could go here
    });
}

// --- HEARTS & PHOTOS BACKGROUND ---
function createHearts() {
    const container = document.querySelector('.hearts-container');
    if(!container) return;
    const count = 20; 

    for (let i = 0; i < count; i++) {
        const isPhoto = Math.random() > 0.7;
        
        let item;
        if (isPhoto) {
            item = document.createElement('img');
            item.src = backgroundPhotos[Math.floor(Math.random() * backgroundPhotos.length)];
            item.classList.add('floating-photo');
        } else {
            item = document.createElement('div');
            item.classList.add('heart');
        }
        
        const left = Math.random() * 100 + '%';
        const delay = Math.random() * 5 + 's';
        const duration = Math.random() * 10 + 10 + 's';
        
        if (isPhoto) {
             const rotation = (Math.random() * 30 - 15) + 'deg';
             const endRotation = (Math.random() * 360) + 'deg';
             item.style.setProperty('--rotation', rotation);
             item.style.setProperty('--end-rotation', endRotation);
             item.style.width = (Math.random() * 40 + 60) + 'px'; 
        } else {
            const size = Math.random() * 20 + 10 + 'px';
            item.style.width = size;
            item.style.height = size;
        }

        item.style.left = left;
        item.style.animationDelay = delay;
        item.style.animationDuration = duration;

        container.appendChild(item);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    init();
});

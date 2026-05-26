const loader = document.getElementById("loader");

window.addEventListener("load", () => {
  setTimeout(() => {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 1000);
  }, 1800);
});

const cursorLight = document.querySelector(".cursor-light");

document.addEventListener("mousemove", e => {
  cursorLight.style.left = e.clientX + "px";
  cursorLight.style.top = e.clientY + "px";
});

const stars = document.getElementById("stars");

for (let i = 0; i < 120; i++) {
  const star = document.createElement("span");
  star.className = "star";
  star.style.left = Math.random() * 100 + "%";
  star.style.animationDuration = 4 + Math.random() * 8 + "s";
  star.style.animationDelay = Math.random() * 7 + "s";
  stars.appendChild(star);
}

const hearts = document.getElementById("hearts");

for (let i = 0; i < 24; i++) {
  const heart = document.createElement("span");
  heart.className = "heart";
  heart.textContent = "❤";
  heart.style.left = Math.random() * 100 + "%";
  heart.style.animationDuration = 8 + Math.random() * 10 + "s";
  heart.style.animationDelay = Math.random() * 8 + "s";
  heart.style.fontSize = 12 + Math.random() * 18 + "px";
  hearts.appendChild(heart);
}

const typingText = document.getElementById("typingText");

const message =
  "Bugün yanında değilim belki... ama bu sayfanın her ışığında, her yıldızında ve her kelimesinde sana olan sevgim var.";

let typeIndex = 0;

function typeWriter() {
  if (typeIndex < message.length) {
    typingText.innerHTML += message.charAt(typeIndex);
    typeIndex++;
    setTimeout(typeWriter, 45);
  }
}

setTimeout(typeWriter, 2400);

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 90) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

document.getElementById("daysTogether").textContent = "428";

/* const startDate = new Date("2025-03-31");

function updateLoveCounter() {
  const now = new Date();
  const diff = now - startDate;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  document.getElementById("daysTogether").textContent = days;
}

updateLoveCounter(); */

function createConfetti() {
  const colors = ["#ffd27d", "#ff5f9e", "#ffffff", "#ff8fbd", "#c69cff"];

  for (let i = 0; i < 110; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDelay = Math.random() * 0.8 + "s";
    piece.style.animationDuration = 2.2 + Math.random() * 1.5 + "s";
    document.body.appendChild(piece);

    setTimeout(() => {
      piece.remove();
    }, 4300);
  }
}

function blowCandle() {
  document.getElementById("cakeBox").classList.add("blown");
  document.getElementById("wishText").classList.add("show");
  createConfetti();
}

function showFinal() {
  document.getElementById("finalMessage").classList.add("show");
  createConfetti();
}

let playing = false;
window.addEventListener("click", () => {

  if (!playing) {

    music.play();

    playing = true;

    musicBtn.innerHTML = "Ⅱ";

  }

}, { once: true });

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

function toggleMusic() {
  if (!playing) {
    music.play()
      .then(() => {
        playing = true;
        musicBtn.innerHTML = "Ⅱ";
      })
      .catch(() => {
        alert("Müzik için klasöre music.mp3 dosyası eklemelisin.");
      });
  } else {
    music.pause();
    playing = false;
    musicBtn.innerHTML = "♪";
  }
}
window.addEventListener("click", () => {

  if (!playing) {

    music.play();

    playing = true;

    musicBtn.innerHTML = "Ⅱ";

  }

}, { once: true });

const cards = document.querySelectorAll(".cinema-card img");

const fullscreen =
document.getElementById("fullscreenImage");

const fullscreenImg =
document.getElementById("fullscreenImg");

cards.forEach(img=>{

  img.addEventListener("click",()=>{

    fullscreen.classList.add("show");

    fullscreenImg.src = img.src;

  });

});

fullscreen.addEventListener("click",()=>{

  fullscreen.classList.remove("show");

});
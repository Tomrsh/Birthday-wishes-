function showSurprise() {
  document.getElementById("surprise").style.display = "block";
  document.getElementById("bg-music").play();
  startConfetti();
}

/* 🎊 Confetti Effect */
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];

class ConfettiParticle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.r = Math.random() * 5 + 1;
    this.color = `hsl(${Math.random() * 360}, 100%, 70%)`;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.y > canvas.height) this.y = 0;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

function startConfetti() {
  for (let i = 0; i < 100; i++) {
    confetti.push(new ConfettiParticle());
  }
  animateConfetti();
}

function animateConfetti() {
  requestAnimationFrame(animateConfetti);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach((c) => {
    c.update();
    c.draw();
  });
      }

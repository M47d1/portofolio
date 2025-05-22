const canvas = document.getElementById('cyber-bg');
const ctx = canvas.getContext('2d');

let fontSize = 16;
let columns;
let drops;

function initializeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  columns = Math.floor(canvas.width / fontSize);
  drops = new Array(columns).fill(1);
}

function draw() {
  // Buat efek trail dengan semi transparan
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#0f0'; // Warna hijau matrix
  ctx.font = fontSize + 'px monospace';

  for (let i = 0; i < columns; i++) {
    const char = Math.random() > 0.5 ? '1' : '0';
    const x = i * fontSize;
    const y = drops[i] * fontSize;

    ctx.fillText(char, x, y);

    if (y > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

function loop() {
  draw();
  requestAnimationFrame(loop);
}

initializeCanvas();
loop();

// Supaya canvas tetap fullscreen saat window di-resize
window.addEventListener('resize', () => {
  initializeCanvas();
});

const tools = [
  {
    name: "books",
    desc: "a quieter way to track what you read and what it left you with.",
    tag: "reading",
    href: "#",
    soon: false,
  },
];

function renderTools() {
  const grid = document.getElementById("tools-grid");
  grid.innerHTML = tools
    .map((t) => {
      const wrapper = t.href ? "a" : "div";
      const attrs = t.href ? ` href="${t.href}"` : "";
      const cls = `tool-card${t.soon ? " soon" : ""}`;
      const footer = t.soon
        ? `<span class="soon-badge">soon</span>`
        : `<span class="tool-link">tool →</span>`;
      return `
      <${wrapper} class="${cls}"${attrs}>
        <p class="tool-card-name">${t.name}</p>
        <p class="tool-card-desc">${t.desc}</p>
        <div class="tool-card-footer">
          <span class="tool-tag">${t.tag}</span>
          ${footer}
        </div>
      </${wrapper}>`;
    })
    .join("");
}

const canvas = document.getElementById("network-canvas");
const ctx = canvas.getContext("2d");
let nodes = [];
let W, H;

function resize() {
  W = canvas.width = canvas.offsetWidth;
  H = canvas.height = canvas.offsetHeight;
}

function initNodes() {
  nodes = [];
  const count = Math.floor((W * H) / 22000);
  for (let i = 0; i < Math.min(count, 55); i++) {
    nodes.push({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.8 + 0.6,
    });
  }
}

function draw() {
  ctx.clearRect(0, 0, W, H);
  const maxDist = 160;

  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x;
      const dy = nodes[i].y - nodes[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < maxDist) {
        const alpha = (1 - dist / maxDist) * 0.18;
        ctx.beginPath();
        ctx.moveTo(nodes[i].x, nodes[i].y);
        ctx.lineTo(nodes[j].x, nodes[j].y);
        ctx.strokeStyle = `rgba(43,111,255,${alpha})`;
        ctx.lineWidth = 0.7;
        ctx.stroke();
      }
    }
  }

  for (const n of nodes) {
    ctx.beginPath();
    ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(75,139,255,0.5)`;
    ctx.fill();
  }
}

function update() {
  for (const n of nodes) {
    n.x += n.vx;
    n.y += n.vy;
    if (n.x < 0 || n.x > W) n.vx *= -1;
    if (n.y < 0 || n.y > H) n.vy *= -1;
  }
}

function loop() {
  update();
  draw();
  requestAnimationFrame(loop);
}

renderTools();

window.addEventListener("resize", () => {
  resize();
  initNodes();
});
resize();
initNodes();
loop();

document.addEventListener("click", (e) => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const target = document.querySelector(a.getAttribute("href"));
  if (target) {
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
  }
});

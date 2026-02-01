function showLove() {
  const text = document.getElementById("hiddenText");
  text.style.display = "block";
}

document.body.addEventListener("click", function () {
  const music = document.getElementById("bgMusic");
  if (music) music.play();
}, { once: true });

function sayYes() {
  document.getElementById("answer").innerText =
    "Yayyy 😍 I knew it! You’re my Valentine forever ❤️";
}

function sayNo() {
  const btn = document.getElementById("noBtn");
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  btn.style.transform = `translate(${x}px, ${y}px)`;
}

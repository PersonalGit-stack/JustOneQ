const playArea = document.getElementById("play-area");
const noBtn = document.getElementById("no-btn");
const yesBtn = document.getElementById("yes-btn");
const buttons = document.getElementById("buttons");
const title = document.getElementById("card-title");
const gif = document.getElementById("result-gif");
const placeholder = document.getElementById("placeholder-img");

function moveNoButton() {
  noBtn.style.position = "absolute";
  const areaRect = playArea.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  const maxX = areaRect.width - btnRect.width - 40;
  const maxY = areaRect.height - btnRect.height - 40;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
}

noBtn.addEventListener("mouseenter", moveNoButton);

/* Mobile */
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveNoButton();
});

yesBtn.addEventListener("click", () => {
  buttons.classList.add("d-none");
  placeholder.classList.add("d-none");

  title.textContent = "Wow🥹 Thank you🥰";
  gif.classList.remove("d-none");
});

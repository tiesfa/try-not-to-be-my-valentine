const noButton = document.getElementById("rejectionButton");
const yesButton = document.getElementById("yesButton");
const popup = document.getElementById("no-popup");

yesButton.addEventListener("mouseenter", () => {
  const x = Math.random() * (window.innerWidth - yesButton.offsetWidth);
  const y = Math.random() * (window.innerHeight - yesButton.offsetHeight);

  yesButton.style.position = "absolute";
  yesButton.style.left = `${x}px`;
  yesButton.style.top = `${y}px`;
  // In web development, yesButton.style.position/left/top is how you access and change the 
  // CSS properties of an element directly through JavaScript.
});

noButton.addEventListener("mouseenter", () => {
  noButton.classList.add("animate-shake");
});

noButton.addEventListener("mouseleave", () => {
  noButton.classList.remove("animate-shake");
});

noButton.addEventListener("click", () => {
  noButton.classList.remove("animate-shake");
  popup.style.display = "flex";
});

function closePopup() {
  popup.style.display = "none";
}

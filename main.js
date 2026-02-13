const noButton = document.getElementById('rejectionButton');
const popup = document.getElementById('no-popup');

noButton.addEventListener('mouseenter', () => {
  noButton.classList.add('animate-shake');
});

noButton.addEventListener('mouseleave', () => {
  noButton.classList.remove('animate-shake');
});

noButton.addEventListener('click', () => {
  noButton.classList.remove('animate-shake');
  popup.classList.remove('hidden');
});

function closePopup() {
  popup.classList.add('hidden');
}
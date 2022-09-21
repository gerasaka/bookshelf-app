const openModal = document.getElementById('open-modal');
const closeModal = document.getElementById('close-modal');

openModal.addEventListener('click', () => {
  document.getElementById('form-wrapper').style.display = 'block';
});

closeModal.addEventListener('click', () => {
  document.getElementById('form-wrapper').style.display = 'none';
});

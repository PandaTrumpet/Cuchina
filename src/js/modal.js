const closeModal = document.querySelector('.close_container');
const modalHeader = document.querySelector('.modal_header');

closeModal.addEventListener('click', () => {
  modalHeader.classList.add('visually-hidden'); // Добавляем класс для скрытия плавно
});

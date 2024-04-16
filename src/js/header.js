const openModal = document.querySelector('.burger_container');
const modalHeader = document.querySelector('.modal_header');

openModal.addEventListener('click', () => {
  modalHeader.classList.remove('visually-hidden'); // Добавляем класс для скрытия плавно
});

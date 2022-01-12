// Задать кнопке открытия модального окна аттрибут data-modal-open="more"
// Задать backdrop модального окна аттрибуты data-modal="more", class="is-hidden"
// Задать кнопке закрытия модального окна аттрибут data-modal-close="more"
// Модальное окно закрывается по клику на кнопку закрытия, по клику в бэкдроп, по нажатию клавиши "Esc"
const refs = {
  modal: document.querySelector('[data-modal="more"]'),
  openBtn: document.querySelector('[data-modal-open="more"]'),
  closeBtn: document.querySelector('[data-modal-close="more"]'),
};

refs.openBtn.addEventListener('click', onModalOpenBtnClick);

function onModalOpenBtnClick() {
  openModal();
  refs.closeBtn.addEventListener('click', closeModal);
  refs.modal.addEventListener('click', onBackdropClick);
  document.addEventListener('keydown', onEscDown);
}
function openModal() {
  refs.modal.classList.remove('is-hidden');
  document.body.classList.add('modal-open');
}
function closeModal() {
  refs.modal.classList.add('is-hidden');
  document.body.classList.remove('modal-open');
  refs.closeBtn.removeEventListener('click', closeModal);
  refs.modal.removeEventListener('click', onBackdropClick);
  document.removeEventListener('keydown', onEscDown);
}
function onBackdropClick(e) {
  if (e.target !== refs.modal) return;
  closeModal();
}
function onEscDown(e) {
  if (e.code !== 'Escape') return;
  closeModal();
}

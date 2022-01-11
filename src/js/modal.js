// Задать кнопке открытия модального окна аттрибут data-modal-open
// Задать backdrop модального окна аттрибуты data-modal, class="is-hidden"
// Задать кнопке закрытия модального окна аттрибут data-modal-close
// Модальное окно закрывается по клику на кнопку закрытия, пок клику в бэкдроп, по нажатию клавиши "Esc"
const refs = {
  modal: document.querySelector('[data-modal]'),
  openBtn: document.querySelector('[data-modal-open]'),
  closeBtn: document.querySelector('[data-modal-close]'),
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
}
function onBackdropClick(e) {
  if (e.target !== refs.modal) return;
  closeModal();
  refs.modal.removeEventListener('click', onBackdropClick);
}
function onEscDown(e) {
  if (e.code !== 'Escape') return;
  closeModal();
  document.removeEventListener('keydown', onEscDown);
}

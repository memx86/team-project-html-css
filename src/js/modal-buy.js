// Задать кнопке открытия модального окна аттрибут data-modal-open="buy"
// Задать кнопке открытия модального окна в мобильном меню аттрибут data-modal-open="buy-mobile-menu"
// Задать backdrop модального окна аттрибуты data-modal="buy", class="is-hidden"
// Задать кнопке закрытия модального окна аттрибут data-modal-close="buy"
// Модальное окно закрывается по клику на кнопку закрытия, по клику в бэкдроп, по нажатию клавиши "Esc"
const refs = {
  modal: document.querySelector('[data-modal="buy"]'),
  openBtn: document.querySelector('[data-modal-open="buy"]'),
  openBtnMobileMenu: document.querySelector('[data-modal-open="buy-mobile-menu"]'),
  closeBtn: document.querySelector('[data-modal-close="buy"]'),
};

refs.openBtn.addEventListener('click', onModalOpenBtnClick);
refs.openBtnMobileMenu.addEventListener('click', onModalOpenBtnClick);

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

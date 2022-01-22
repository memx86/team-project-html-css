// Задать кнопке открытия модального окна аттрибут data-modal-open="franchise"
// Задать backdrop модального окна аттрибуты data-modal="franchise", class="is-hidden"
// Задать кнопке закрытия модального окна аттрибут data-modal-close="franchise"
// Модальное окно закрывается по клику на кнопку закрытия, по клику в бэкдроп, по нажатию клавиши "Esc"
import Modal from './modal';
const refs = {
  modal: document.querySelector('[data-modal="franchise"]'),
  openBtn: document.querySelector('[data-modal-open="franchise"]'),
  closeBtn: document.querySelector('[data-modal-close="franchise"]'),
};

const modalFranchise = new Modal(refs);

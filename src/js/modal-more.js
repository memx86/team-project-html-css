// Задать кнопке открытия модального окна аттрибут data-modal-open="more"
// Задать backdrop модального окна аттрибуты data-modal="more", class="is-hidden"
// Задать кнопке закрытия модального окна аттрибут data-modal-close="more"
// Модальное окно закрывается по клику на кнопку закрытия, по клику в бэкдроп, по нажатию клавиши "Esc"
import Modal from './Modal';
const refs = {
  modal: document.querySelector('[data-modal="more"]'),
  openBtn: document.querySelector('[data-modal-open="more"]'),
  closeBtn: document.querySelector('[data-modal-close="more"]'),
};
const modalMore = new Modal(refs);

// Задать кнопке открытия модального окна аттрибут data-modal-open="coffee"
// Задать backdrop модального окна аттрибуты data-modal="coffee", class="is-hidden"
// Задать кнопке закрытия модального окна аттрибут data-modal-close="coffee"
// Модальное окно закрывается по клику на кнопку закрытия, по клику в бэкдроп, по нажатию клавиши "Esc"
import createModal from './modal';
const refs = {
  modal: document.querySelector('[data-modal="coffee"]'),
  openBtn: document.querySelector('[data-modal-open="coffee"]'),
  closeBtn: document.querySelector('[data-modal-close="coffee"]'),
};
createModal(refs);

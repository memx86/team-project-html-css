// Задать кнопке открытия модального окна аттрибут data-modal-open="milkshakes"
// Задать backdrop модального окна аттрибуты data-modal="milkshakes", class="is-hidden"
// Задать кнопке закрытия модального окна аттрибут data-modal-close="milkshakes"
// Модальное окно закрывается по клику на кнопку закрытия, по клику в бэкдроп, по нажатию клавиши "Esc"
import Modal from './modal';
const refs = {
  modal: document.querySelector('[data-modal="milkshakes"]'),
  openBtn: document.querySelector('[data-modal-open="milkshakes"]'),
  closeBtn: document.querySelector('[data-modal-close="milkshakes"]'),
};
const modalMilkShakes = new Modal(refs);

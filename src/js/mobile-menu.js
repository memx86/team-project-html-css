// Задать кнопке-бургеру аттрибут data-menu-button
// Задать мобильному меню аттрибут data-menu, класс is-hidden
// Задать якорным ссылкам аттрибут data-mobile-link

const refs = {
  modal: document.querySelector('[data-menu]'),
  menuBtn: document.querySelector('[data-menu-button]'),
};

refs.menuBtn.addEventListener('click', onMenuBtnClick);

function onMenuBtnClick(e) {
  menuBtnToggle();
  if (e.currentTarget.classList.contains('is-open')) {
    openModal();
    refs.modal.addEventListener('click', onMobileMenuLinkClick);
    refs.modal.addEventListener('click', onBackdropClick);
    document.addEventListener('keydown', onEscDown);
    return;
  }
  closeModal();
}
function openModal() {
  refs.modal.classList.remove('is-hidden');
  document.body.classList.add('modal-open');
}
function closeModal() {
  refs.modal.classList.add('is-hidden');
  document.body.classList.remove('modal-open');
  refs.modal.removeEventListener('click', onMobileMenuLinkClick);
  refs.modal.removeEventListener('click', onBackdropClick);
  document.removeEventListener('keydown', onEscDown);
}
function onBackdropClick(e) {
  if (e.target !== refs.modal) return;
  closeModal();
  menuBtnToggle();
}
function onEscDown(e) {
  if (e.code !== 'Escape') return;
  closeModal();
  menuBtnToggle();
}
function onMobileMenuLinkClick(e) {
  if (!e.target.hasAttribute('data-mobile-link')) {
    return;
  }
  closeModal();
  menuBtnToggle();
}
function menuBtnToggle() {
  const expanded = refs.menuBtn.getAttribute('aria-expanded') === 'true' || false;
  refs.menuBtn.classList.toggle('is-open');
  refs.menuBtn.setAttribute('aria-expanded', !expanded);
}

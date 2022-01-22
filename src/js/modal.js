// Expects object with following refs
//  {
//  modal: modal window ref,
//  openBtn: open modal window btn ref,
//  closeBtn: close modal window btn ref,
//  openBtnSecond: optional modal window btn ref, //optional
// }

export default class Modal {
  constructor(refs) {
    this.refs = refs;
    this.refs.openBtn.addEventListener('click', this.onModalOpenBtnClick);
    this.refs.openBtnSecond?.addEventListener('click', this.onModalOpenBtnClick);
  }
  onModalOpenBtnClick = () => {
    this.openModal();
    this.refs.closeBtn.addEventListener('click', this.closeModal);
    this.refs.modal.addEventListener('click', this.onBackdropClick);
    document.addEventListener('keydown', this.onEscDown);
  };
  openModal = () => {
    this.refs.modal.classList.remove('is-hidden');
    document.body.classList.add('modal-open');
  };
  closeModal = () => {
    this.refs.modal.classList.add('is-hidden');
    document.body.classList.remove('modal-open');
    this.refs.closeBtn.removeEventListener('click', this.closeModal);
    this.refs.modal.removeEventListener('click', this.onBackdropClick);
    document.removeEventListener('keydown', this.onEscDown);
  };
  onBackdropClick = e => {
    if (e.target !== this.refs.modal) return;
    this.closeModal();
  };
  onEscDown = e => {
    if (e.code !== 'Escape') return;
    this.closeModal();
  };
}

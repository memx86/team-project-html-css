(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-prod-open]'),
    closeModalBtn: document.querySelector('[data-prod-close]'),
    modal: document.querySelector('[data-prod]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
(() => {
	const refs = {
		openModalBtn: document.querySelector('[data-modal-open]'),
		closeModalBtn: document.querySelector('[data-modal-close]'),
		modal: document.querySelector('[data-modal]')
	};

	refs.openModalBtn.addEventListener('click', toggleModal);
	refs.closeModalBtn.addEventListener('click', toggleModal);
	refs.modal.addEventListener('click', onBackdropClick);

	function toggleModal() {
		const isHidden = refs.modal.classList.toggle('is-hidden');

		if (!isHidden) {
			document.body.classList.add('modal-open');
		} else {
			document.body.classList.remove('modal-open');
		}
	}

	function onBackdropClick(e) {
		if (e.target === e.currentTarget) {
			toggleModal();
		}
	}
})();

(() => {
  const modal = document.getElementById('eventModal');
  if (!modal) return;
  const dialog = modal.querySelector('.event-modal__dialog');
  const events = [...modal.querySelectorAll('.event-list .event')];

  function closeModal() {
    const current = events.find(e => !e.hidden);
    current?.querySelector('[data-action="stop"]')?.click();
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('event-modal-open');
  }

  function openModal(id) {
    events.forEach(e => { e.hidden = e.id !== id; });
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('event-modal-open');
    if (dialog) dialog.scrollTop = 0;
  }

  document.querySelectorAll('a[href*="bien-nien-30-nam.html#event-"]').forEach(link => {
    const id = link.getAttribute('href').split('#')[1];
    if (!document.getElementById(id)) return;
    link.addEventListener('click', e => {
      e.preventDefault();
      openModal(id);
    });
  });

  modal.querySelectorAll('[data-close-event-modal]').forEach(el => el.addEventListener('click', closeModal));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });
})();

document.getElementById('open-calendly')?.addEventListener('click', () => {
  const el = document.querySelector('#calendly-embed');
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
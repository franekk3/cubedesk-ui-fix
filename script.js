document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('contextmenu', (e) => {
    if (e.target.closest('.select-none')) {
      e.preventDefault();
    }
  });

});

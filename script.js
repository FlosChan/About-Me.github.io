function tampilkanPesan() {
  alert('Halo, ini pesan dari JavaScript!');
}

window.addEventListener('load', function() {
  setTimeout(function() {
    document.body.classList.add('loaded');
  }, 1000); // waktu
});
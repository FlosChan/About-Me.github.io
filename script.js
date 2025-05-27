function tampilkanPesan() {
  alert('Halo, ini pesan dari JavaScript!');
}

window.addEventListener('load', function() {
  setTimeout(function() {
    document.body.classList.add('loaded');
  }, 1000); // waktu
});

// Animasi mengetik quote
document.addEventListener("DOMContentLoaded", function() {
  const text = '"Jika aku gagal, mungkin aku akan <br>menyesal, tapi aku akan lebih menyesal <br>ketika aku tidak <span class="important">MENCOBANYA.</span>"';
  const container = document.getElementById('quote-text');
  let i = 0;
  function type() {
    if (i < text.length) {
      if (text[i] === '<') {
        const close = text.indexOf('>', i);
        container.innerHTML += text.slice(i, close + 1);
        i = close + 1;
      } else {
        container.innerHTML += text[i];
        i++;
      }
      setTimeout(type, 32);
    }
  }setTimeout(type, 5400); // Mulai mengetik setelah 1 detik
});
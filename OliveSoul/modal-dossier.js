(function () {
  var TALLY_IDS = {
    es: 'xXZGW5',
    en: 'gD4B6D',
    it: 'LZ08rp',
    fr: '2Er2W9',
  };

  var s = document.createElement('script');
  s.src = 'https://tally.so/widgets/embed.js';
  s.async = true;
  document.head.appendChild(s);

  window.openDossierModal = function () {
    var lang = (document.documentElement.lang || 'es').toLowerCase().slice(0, 2);
    var id = TALLY_IDS[lang] || TALLY_IDS['es'];

    if (typeof Tally !== 'undefined') {
      Tally.openPopup(id, { width: 600, autoClose: 3000 });
    } else {
      // Espera até 3 segundos pelo Tally antes de abrir nova aba
      var attempts = 0;
      var interval = setInterval(function () {
        attempts++;
        if (typeof Tally !== 'undefined') {
          clearInterval(interval);
          Tally.openPopup(id, { width: 600, autoClose: 3000 });
        } else if (attempts >= 6) {
          clearInterval(interval);
          window.open('https://tally.so/r/' + id, '_blank');
        }
      }, 500);
    }
  };
})();
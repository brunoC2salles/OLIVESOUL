(function () {
  var FORMSPREE_URL = 'https://formspree.io/f/FORMSPREE_ID_PLACEHOLDER';

  var GDPR_TEXT = {
    es: 'Acepto el tratamiento de mis datos personales de acuerdo con el RGPD y la normativa española de protección de datos.',
    en: 'I consent to the processing of my personal data in accordance with GDPR and Spanish data protection regulations.',
    it: 'Acconsento al trattamento dei miei dati personali in conformità con il GDPR e la normativa spagnola.',
    fr: "J'accepte le traitement de mes données personnelles conformément au RGPD et à la réglementation espagnole.",
  };

  var LABELS = {
    es: { name: 'Nombre', email: 'Email', phone: 'Teléfono', nationality: 'Nacionalidad', submit: 'Solicitar Dossier', confirm: 'Gracias. Le enviaremos el dossier en breve.', title: 'Solicitar Dossier' },
    en: { name: 'Name', email: 'Email', phone: 'Phone', nationality: 'Nationality', submit: 'Request Dossier', confirm: 'Thank you. We will send you the dossier shortly.', title: 'Request Dossier' },
    it: { name: 'Nome', email: 'Email', phone: 'Telefono', nationality: 'Nazionalità', submit: 'Richiedere Dossier', confirm: 'Grazie. Le invieremo il dossier a breve.', title: 'Richiedere Dossier' },
    fr: { name: 'Nom', email: 'Email', phone: 'Téléphone', nationality: 'Nationalité', submit: 'Demander le Dossier', confirm: 'Merci. Nous vous enverrons le dossier sous peu.', title: 'Demander le Dossier' },
  };

  var NATIONALITIES = [
    ['ES', 'España'], ['FR', 'France'], ['IT', 'Italia'], ['POR', 'Portugal'],
    ['USA', 'USA'], ['GER', 'Deutschland'], ['HOL', 'Nederland'], ['UK', 'United Kingdom'],
    ['SWE', 'Sverige'], ['SUI', 'Schweiz'], ['NOR', 'Norge'], ['FIN', 'Suomi'],
    ['DIN', 'Danmark'], ['LUX', 'Luxembourg'], ['BEL', 'Belgique'], ['BRA', 'Brasil'],
    ['OTHER', '—'],
  ];

  function getLang() {
    var lang = (document.documentElement.lang || 'es').toLowerCase().slice(0, 2);
    return LABELS[lang] ? lang : 'es';
  }

  function injectStyles() {
    var style = document.createElement('style');
    style.textContent = [
      '#modal-dossier{display:none;position:fixed;inset:0;z-index:9000;background:rgba(10,10,10,0.92);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);align-items:center;justify-content:center;padding:1rem;}',
      '#modal-dossier.is-open{display:flex;}',
      '#modal-dossier-inner{position:relative;max-width:520px;width:100%;border:1px solid rgba(245,240,232,0.2);padding:3rem;background:#0f0f0f;font-family:"Cormorant Garamond",Georgia,serif;opacity:0;transform:translateY(20px);transition:opacity 0.4s ease,transform 0.4s ease;}',
      '#modal-dossier.is-open #modal-dossier-inner{opacity:1;transform:translateY(0);}',
      '#modal-dossier h2{font-size:1.5rem;font-weight:400;letter-spacing:0.15em;text-transform:uppercase;color:#f5f0e8;margin:0 0 2rem;}',
      '#modal-dossier-close{position:absolute;top:1rem;right:1.25rem;background:none;border:none;color:rgba(245,240,232,0.6);font-size:1.5rem;cursor:pointer;line-height:1;padding:0;}',
      '#modal-dossier-close:hover{color:#f5f0e8;}',
      '#modal-dossier input,#modal-dossier select{display:block;background:transparent;border:none;border-bottom:1px solid rgba(245,240,232,0.2);color:#f5f0e8;font-family:"Cormorant Garamond",Georgia,serif;font-size:1rem;padding:0.6rem 0;width:100%;margin-bottom:1.5rem;outline:none;appearance:none;-webkit-appearance:none;border-radius:0;}',
      '#modal-dossier select option{background:#0f0f0f;color:#f5f0e8;}',
      '#modal-dossier input::placeholder{color:rgba(245,240,232,0.6);}',
      '#modal-dossier input:focus,#modal-dossier select:focus{border-bottom-color:rgba(245,240,232,0.6);}',
      '#modal-dossier-gdpr{display:flex;align-items:flex-start;gap:0.75rem;margin-bottom:2rem;}',
      '#modal-dossier-gdpr input[type=checkbox]{flex-shrink:0;width:14px;height:14px;margin-top:3px;accent-color:#6B7B3A;cursor:pointer;}',
      '#modal-dossier-gdpr label{font-size:0.72rem;line-height:1.5;color:rgba(245,240,232,0.6);cursor:pointer;}',
      '#modal-dossier button[type=submit]{border:1px solid #6B7B3A;background:transparent;color:#f5f0e8;padding:0.8rem 2.5rem;letter-spacing:0.15em;text-transform:uppercase;font-size:0.75rem;font-family:"Cormorant Garamond",Georgia,serif;cursor:pointer;transition:background 0.2s,color 0.2s;}',
      '#modal-dossier button[type=submit]:hover{background:#6B7B3A;}',
      '#modal-dossier-confirm{display:none;text-align:center;padding:2rem 0;}',
      '#modal-dossier-confirm p{color:#f5f0e8;font-size:1.1rem;font-weight:400;letter-spacing:0.05em;line-height:1.7;}',
    ].join('');
    document.head.appendChild(style);
  }

  function buildModal() {
    var lang = getLang();
    var L = LABELS[lang];
    var gdpr = GDPR_TEXT[lang];

    var overlay = document.createElement('div');
    overlay.id = 'modal-dossier';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');

    var natOptions = NATIONALITIES.map(function (n) {
      return '<option value="' + n[0] + '">' + n[1] + '</option>';
    }).join('');

    overlay.innerHTML = [
      '<div id="modal-dossier-inner">',
      '  <button id="modal-dossier-close" aria-label="Cerrar">&times;</button>',
      '  <h2>' + L.title + '</h2>',
      '  <form id="modal-dossier-form" novalidate>',
      '    <input type="text" name="nombre" placeholder="' + L.name + '" required autocomplete="name">',
      '    <input type="email" name="email" placeholder="' + L.email + '" required autocomplete="email">',
      '    <input type="tel" name="telefono" placeholder="' + L.phone + '" required autocomplete="tel">',
      '    <select name="nacionalidad" required>',
      '      <option value="" disabled selected>' + L.nationality + '</option>',
      natOptions,
      '    </select>',
      '    <div id="modal-dossier-gdpr">',
      '      <input type="checkbox" id="gdpr-check" name="gdpr" required>',
      '      <label for="gdpr-check">' + gdpr + '</label>',
      '    </div>',
      '    <button type="submit">' + L.submit + '</button>',
      '  </form>',
      '  <div id="modal-dossier-confirm"><p>' + L.confirm + '</p></div>',
      '</div>',
    ].join('');

    document.body.appendChild(overlay);

    // Close button
    overlay.querySelector('#modal-dossier-close').addEventListener('click', closeModal);

    // Click outside inner → close
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeModal();
    });

    // Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeModal();
    });

    // Form submit
    overlay.querySelector('#modal-dossier-form').addEventListener('submit', function (e) {
      e.preventDefault();
      var form = e.target;
      var data = new FormData(form);

      fetch(FORMSPREE_URL, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
        .then(function (res) {
          if (res.ok) {
            form.style.display = 'none';
            overlay.querySelector('#modal-dossier-confirm').style.display = 'block';
          } else {
            return res.json().then(function (json) {
              throw new Error(json.error || 'Error');
            });
          }
        })
        .catch(function () {
          // Silent fail — keep form open
        });
    });
  }

  function openModal() {
    var overlay = document.getElementById('modal-dossier');
    if (!overlay) return;
    // Reset form state each open
    var form = overlay.querySelector('#modal-dossier-form');
    var confirm = overlay.querySelector('#modal-dossier-confirm');
    if (form) form.style.display = '';
    if (confirm) confirm.style.display = 'none';
    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    var overlay = document.getElementById('modal-dossier');
    if (!overlay) return;
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  function init() {
    injectStyles();
    buildModal();
    window.openDossierModal = openModal;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

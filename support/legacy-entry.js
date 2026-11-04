'use strict';

const routeLegacyEntry = () => {
  const destination = window.location.hash === '#privacy'
    ? 'support/privacy.html'
    : 'support/contact.html#support';
  window.location.replace(new URL(destination, window.location.href).href);
};
window.addEventListener('hashchange', routeLegacyEntry);
routeLegacyEntry();

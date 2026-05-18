// Boston Pipe Pros site helpers
(function () {
  var PHONE_DISPLAY = '617-313-7767';
  var PHONE_TEL = 'tel:+16173137767';

  function updatePhoneNumbers() {
    var phoneLinks = document.querySelectorAll('a[href^="tel:"]');

    phoneLinks.forEach(function (link) {
      link.setAttribute('href', PHONE_TEL);

      var text = (link.textContent || '').trim();

      if (
        text === '617-313-PROS' ||
        text === '617-297-9000' ||
        text === 'Call 617-313-PROS' ||
        text === 'Call 617-297-9000'
      ) {
        link.textContent =
          text.indexOf('Call ') === 0
            ? 'Call ' + PHONE_DISPLAY
            : PHONE_DISPLAY;
      }
    });
  }

  function addPolicyLinks() {
    var quickLinks = document.querySelector(
      '.site-footer .footer-grid > div:last-child ul.plain'
    );

    if (!quickLinks) return;

    if (!quickLinks.querySelector('a[href="/privacy"]')) {
      var li = document.createElement('li');
      var link = document.createElement('a');

      link.href = '/privacy';
      link.textContent = 'Privacy Policy';

      li.appendChild(link);
      quickLinks.appendChild(li);
    }

    if (!quickLinks.querySelector('a[href="/terms"]')) {
      var li2 = document.createElement('li');
      var link2 = document.createElement('a');

      link2.href = '/terms';
      link2.textContent = 'Terms & Conditions';

      li2.appendChild(link2);
      quickLinks.appendChild(li2);
    }
  }

  updatePhoneNumbers();
  addPolicyLinks();
})();

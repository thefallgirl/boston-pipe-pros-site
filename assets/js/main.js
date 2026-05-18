function addPrivacyPolicyLink() {
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

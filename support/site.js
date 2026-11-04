'use strict';

document.documentElement.classList.add('js');

const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('#nav-links');
if (menuToggle && menu) {
  const closeMenu = () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    menu.classList.remove('is-open');
  };
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    menu.classList.toggle('is-open', !expanded);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      menuToggle.focus();
    }
  });
  menu.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });
  window.matchMedia('(min-width: 761px)').addEventListener('change', closeMenu);
}

const form = document.querySelector('#contact-form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const topic = String(data.get('topic') || 'General Inquiry');
    const recipients = {
      'App & Technical Support': 'support@yuanfanzhituo.com',
      'Account & Data Deletion': 'support@yuanfanzhituo.com',
      'Business & Services': 'contact@yuanfanzhituo.com',
      'Key Accounts': 'dongdong@yuanfanzhituo.com',
      'General Inquiry': 'bussion@yuanfanzhituo.com',
    };
    const recipient = recipients[topic] || recipients['General Inquiry'];
    const body = `Name: ${data.get('name')}\nReply email: ${data.get('email')}\nTopic: ${topic}\n\n${data.get('message')}`;
    const subject = topic === 'Account & Data Deletion' ? '[ZhituClaw] Account deletion / data request' : `[ZhituClaw] ${topic}`;
    const status = document.querySelector('#form-status');
    status.hidden = false;
    status.textContent = `Your email app will be asked to open a draft. If nothing opens, email ${recipient} directly. Your inquiry has not been sent by this website.`;
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}

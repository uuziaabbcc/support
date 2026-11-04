# ZhituClaw English support website

A standalone, responsive website inspired by https://yuanfanzhituo.com/.
All browser assets are local; no package install or build is required.

## Preview

From the repository root:

```sh
python3 -m http.server 4175 --directory backend/public
```

Open http://localhost:4175/support/.

## Deployment

The existing backend serves `backend/public` as static files. Deploy with the
normal backend release, or copy the contents of `support/` to any static host.
The HTML uses relative links so the site can run at a domain root or subdirectory.
No backend/API or account login is required to browse the site.

App Store URL paths (prepend your deployed HTTPS domain):

- Marketing: `/support/index.html`
- Support: `/support/contact.html`
- Privacy: `/support/privacy.html`
- Terms: `/support/terms.html`

`../privacy-and-support.html` preserves the existing mobile app links:
`#privacy` opens the privacy page; `#support` opens the contact page.
It also provides manual links if JavaScript is disabled.

The contact form opens an encoded `mailto:` draft in the visitor's email app;
it does not send email, create a support ticket, or store form data. Contact
addresses are reused exactly from the reference website as requested, including
`bussion@yuanfanzhituo.com`.

The privacy text reflects the existing app support document and connected
AI/Gateway functionality. Keep it aligned with actual service practices and
App Store privacy disclosures when the product or deployment changes.

Photography: Unsplash photos used by the reference website, stored locally:
`photo-1497366754035-f200968a6e72` (workspace),
`photo-1552664730-d307ca884978` (team), and
`photo-1516321318423-f06f85e504b3` (technology).

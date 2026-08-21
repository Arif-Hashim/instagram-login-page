# Loop — Login Page (UI/UX Practice Concept)

A static, non-functional React + Vite recreation of a familiar social-app login layout,
built as a UI/UX practice piece. It uses its own name ("Loop") and an original logo mark —
it is **not** Instagram's actual branding, logo, or code, and it doesn't perform any real
authentication.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## What's inside

- `src/App.jsx` — the split-screen layout: showcase panel + login form
- `src/App.css` — all layout/visual styling
- `src/assets/hero-stories.webp` — the phone-stories collage image you provided
- The form has local React state and a disabled submit button until both fields are
  filled, but `handleSubmit` intentionally does nothing — no network calls, no storage.

## Notes

- The small banner at the top ("UI/UX practice concept…") is there on purpose — keep it
  if you publish this in a portfolio, so it's clear this is a design study, not a real
  login screen.
- Swap `heroStories` and copy in `App.jsx` for your own project's content whenever you're
  ready to make it fully your own.

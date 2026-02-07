# Specification

## Summary
**Goal:** Refine the existing romantic apology website into an exact 5-page flow with consistent styling, correct navigation/buttons, and a final hugging GIF derived only from the uploaded image.

**Planned changes:**
- Implement a 5-page interactive flow in the exact order (Page 1 → 2 → 3 → 4 → 5) with smooth animated transitions between pages.
- Apply a consistent theme across all pages: background `#20201F`, accent `#EE6E4D`, serif romantic font for all text, and soft-rounded accent-filled buttons with dark text.
- Page 1: show centered text exactly `I'm really sorry chlow! 🤌🏻` and a bottom-centered “Next” button fixed to the viewport.
- Page 2: show centered text exactly `I want to hold u every time 🫠` and a bottom-centered “Next” button fixed to the viewport.
- Page 3: show a single short, romantic apology message (no images) and a bottom-centered “Next” button fixed to the viewport.
- Page 4: show centered text exactly `Are you willing to forgive me, bab? ❤️` with two buttons labeled exactly `Yes 🌹` and `No 🥀`; only `Yes 🌹` navigates to Page 5; make `No 🥀` evade hover/touch while staying visible.
- Page 5: show centered text exactly `Awwwwweehh! Lvb u bab 💋` and display exactly one centered couple-hugging GIF (no “Next” button).
- Enforce that no external/stock images are used; generate and store the Page 5 hugging GIF as a static asset under `frontend/public/assets/generated`, derived solely from `8cea9dbe688448677b472a8d5e73118d-10.jpg`.

**User-visible outcome:** Users see a smooth, romantic 5-step apology flow with fixed bottom “Next” buttons on Pages 1–3, a playful “No 🥀” on Page 4, and a final Page 5 reveal featuring a single hugging GIF created from the uploaded drawing.

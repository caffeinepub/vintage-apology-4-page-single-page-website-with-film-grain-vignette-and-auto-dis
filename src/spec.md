# Specification

## Summary
**Goal:** Implement a minimal 5-page interactive romantic flow with smooth transitions, required uploaded images on Pages 2–3, and a playful moving “No 🥀” button on Page 4.

**Planned changes:**
- Update navigation to exactly 5 pages with animated transitions: Page 1–4 show a visible bottom-centered “Next” button (Page 4 does not advance via Next); Page 5 has no Next button.
- Implement exact page content/layout:
  - Page 1: centered text “I'm really sorry chlow! 🤌🏻”, no image, visible Next button (no auto-advance).
  - Page 2: centered text “I want to hold u every time 🫠”, show at least one required uploaded image below text, visible Next button bottom-center.
  - Page 3: show a short heartfelt apology message (soft romantic tone), show at least one required uploaded image below message, visible Next button bottom-center.
  - Page 4: centered text “Are you willing to forgive me, bab? ❤️” with buttons “Yes 🌹” and “No 🥀”; only “Yes 🌹” advances to Page 5.
  - Page 5: centered text “Awwwwweehh! Lvb u bab 💋” and centered hugging-couple GIF.
- Ensure Pages 2 and 3 use only the specified uploaded image files (no stock/placeholder images).
- Add playful interaction on Page 4 where “No 🥀” shifts position on hover/touch to be hard to click; “Yes 🌹” remains reliably clickable.
- Apply consistent minimal romantic styling across pages: dark background #20201F, accent #EE6E4D, site-wide clean serif font, rounded buttons, and smooth transition styling.

**User-visible outcome:** Users can click through a 5-step romantic apology experience with smooth transitions, see the provided uploaded images on Pages 2–3, experience a playful dodging “No 🥀” button on Page 4, and land on a final page with a centered hugging-couple GIF.

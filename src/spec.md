# Specification

## Summary
**Goal:** Refine the single-page interactive apology site into a smooth, dark-themed 4-section flow with the specified text, uploaded imagery, an evasive “No 🥀” button, and an in-place “Yes 🌹” finale with heart animations.

**Planned changes:**
- Restructure the experience into exactly 4 distinct sections that transition smoothly in order (Page 1 → Page 2 → Page 3 → Page 4), with “Next” buttons on Pages 1–3.
- Apply a consistent clean dark theme (black/deep grey) and elegant typography (Playfair Display and/or Poppins) across all sections with responsive mobile layout.
- Page 1: show centered text exactly “I'm really sorry chlow! 🤌🏻” and place a “Next” button at the bottom of the viewport.
- Page 2: show text exactly “I want to hold u everytime 🫠” and display a grayscale image area using the provided uploaded image by default; add a clear code comment indicating where to replace the image URL; include “Next”.
- Page 3: show a long “Apology Love Message” paragraph placeholder and an image area using the provided uploaded image by default; add a clear code comment indicating where to replace the image URL; include “Next”.
- Page 4: show text exactly “Are u willing to forgive me bab ❤️” with buttons labeled exactly “Yes 🌹” and “No 🥀”; implement smooth evasive movement for the “No 🥀” button that stays within the visible container.
- On “Yes 🌹” click (within Page 4), reveal the final message exactly “Awwwwweehh! Lvb u bab 💋” and render lightweight heart animations that don’t block readability.
- Store and reference only the user-uploaded images as static frontend assets for default imagery; do not add stock/external images.

**User-visible outcome:** Users can tap through a dark-themed 4-step apology flow, view the uploaded images on Pages 2–3, and on the final screen see a playful evasive “No 🥀” button; tapping “Yes 🌹” shows the final message with heart animations in the same section.

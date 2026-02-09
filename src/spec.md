# Specification

## Summary
**Goal:** Add a standalone, single-file dark-themed apology webpage with a 5-step “Next” flow and an evasive “No” button mini-game.

**Planned changes:**
- Create `frontend/public/apology.html` as a fully standalone page (no React bundle dependency) with all CSS in a `<style>` tag and all JS in a `<script>` tag.
- Implement a responsive 5-page flow navigated by a “Next” button (Page 1 → Page 5).
- Apply the requested dark design system: background `#0a0a0a`, white text with rose-pink accents, minimalist/classy styling, and Google Fonts (`Poppins` for body, `Dancing Script` for romantic headers).
- Add the exact page copy and structure:
  - Page 1: “I'm really sorry chlow! 🤌🏻” (centered, bold)
  - Page 2: “I want to hold u everytime 🫠”
  - Page 3: Apology note inside a soft-border glassmorphism box
  - Page 4: “Are u willing to forgive me bab? ❤️” with Yes/No buttons
  - Page 5: “Awwwwweehh! Lvb u bab 💋” plus an image below
- Implement Page 4 behavior: “Yes” button stays static with a glow; “No” button evades pointer/touch by jumping to random positions while staying fully within the visible viewport, and never successfully triggers a “No” action.
- On Page 5, render the final image using exactly `<img src='our-pic.jpg' />`, include an HTML comment telling the user to rename their photo to `our-pic.jpg`, and style the image with a soft pink glow.

**User-visible outcome:** Users can open `frontend/public/apology.html` to step through a 5-part apology experience on mobile/desktop, playfully unable to click “No,” and end on a final message with their photo displayed.

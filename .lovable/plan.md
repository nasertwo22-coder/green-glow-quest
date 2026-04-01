

# Quiz Funnel Landing Page

## Overview
A dark, premium mobile-first quiz funnel with 3 questions leading to a results/download page. Pure black background with neon green accents, no nav/footer.

## Screens

### All Quiz Screens (1-3)
- App logo: rounded-square icon with dark purple/charcoal gradient, green dollar-sign, faint green glow beneath
- Progress bar: dark gray track, neon green fill (33%/66%/100%)
- "Answer question X of 3:" text in green below bar

### Screen 1 — "Do you scroll on your phone?"
- 3 buttons: "Yes, daily" / "Sometimes" / "Rarely"

### Screen 2 — "How do you plan to use your reward?"
- 2 buttons: "Keep it" / "Give it to a friend"

### Screen 3 — "How many hours a day do you scroll?"
- 4 buttons: "Less than 1 hour" / "1–3 hours" / "3–5 hours" / "5+ hours"

### Screen 4 — Results Page
- Green checkmark + "You're In!" heading
- Subtext about pre-qualification
- Big neon green "DOWNLOAD NOW" CTA button → links to `https://linkthem.net/aff_c?offer_id=3932&aff_id=16339`
- "YOUR EARNING JOURNEY" card with 3 numbered steps
- Red-bordered alert box with lock icon, "Activation Required", red "IMPORTANT" badge
- Trust text at bottom

## Design
- Background: #000000 with subtle dark green radial glow
- Accent: #00E676 neon green
- Cards/buttons: dark charcoal (#1A1A2E), subtle border, 16px rounded corners
- Hover/tap: green border glow on buttons
- Smooth fade/slide transitions between screens
- Max-width ~400px, centered, mobile-first
- No scroll on quiz screens; results page scrollable

## Implementation
- Single `Index.tsx` page with React state to track current screen (0-3)
- CSS transitions via Tailwind + custom animations
- All in one page component, no routing needed


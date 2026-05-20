# Design System Specification: Industrial Editorial

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Architectural Monolith."** 

Roofing is about structural integrity, protection, and precision. To move beyond the "local contractor" template, this system adopts a high-end editorial aesthetic that mirrors the physical act of construction. We emphasize reliability through heavy-weight typography and "industrial" cleanliness through expansive white space. We break the grid with intentional asymmetry—overlapping images and offset text blocks—to mimic the layered nature of roofing materials. This isn't just a website; it’s a digital blueprint of craftsmanship.

## 2. Colors & Surface Philosophy
The palette utilizes deep, slate-toned neutrals paired with a high-energy safety yellow (`on_primary_container`) to signal action and precision.

### The "No-Line" Rule
**Strict Mandate:** Prohibit 1px solid borders for sectioning. Structural boundaries must be defined solely through background color shifts. For example, a `surface_container_low` section sitting on a `surface` background provides all the separation required. This creates a more sophisticated, "molded" look rather than a "boxed-in" feel.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Use the surface tiers to create depth without shadows:
*   **Base Layer:** `surface` (#f7fafc) for the main canvas.
*   **Secondary Content:** `surface_container_low` (#f1f4f6) for subtle section differentiation.
*   **Interactive Containers:** `surface_container_highest` (#e0e3e5) for elements that require immediate user focus.

### The "Glass & Gradient" Rule
To avoid a flat, "cheap" industrial look, use Glassmorphism for floating navigation and overlays. Use `surface` at 80% opacity with a 12px `backdrop-blur`. 
*   **Signature Texture:** For primary Hero CTAs, use a subtle linear gradient from `primary` (#e8ca18) to `primary_container` (#3e1100) at a 135-degree angle. This adds a "metallic" weight that flat hex codes lack.

## 3. Typography: The Authority Scale
We use a pairing of **Manrope** (Display/Headline) for a technical, geometric feel and **Work Sans** (Title/Body) for human-centric readability.

*   **Display-LG (Manrope, 3.5rem):** Reserved for hero headlines. Use tight letter-spacing (-0.02em) to evoke the heaviness of slate and steel.
*   **Headline-MD (Manrope, 1.75rem):** Used for service categories. Always high-contrast (`on_surface`).
*   **Body-LG (Work Sans, 1rem):** The workhorse for project descriptions. Increased line-height (1.6) is mandatory to ensure the "Industrial" look remains "Clean."
*   **Label-MD (Work Sans, 0.75rem):** Used for technical specs and measurements. Always uppercase with +0.1em letter spacing to mimic architectural annotations.

## 4. Elevation & Depth
In this system, depth is earned through tone, not just light.

*   **The Layering Principle:** Stack `surface_container_lowest` (#ffffff) cards on `surface_container_low` (#f1f4f6) backgrounds. This creates a "lift" that feels like a physical material sample resting on a desk.
*   **Ambient Shadows:** When a float is necessary (e.g., a "Get a Quote" modal), use a high-diffusion shadow: `0px 20px 40px rgba(24, 28, 30, 0.06)`. The tint is derived from `on_surface`, ensuring it feels like a natural occlusion of light.
*   **The "Ghost Border" Fallback:** If accessibility requires a stroke (e.g., in high-contrast modes), use `outline_variant` (#c6c6cc) at 20% opacity. Never use 100% opaque lines.

## 5. Components

### Buttons: The Kinetic Accent
*   **Primary:** Background `on_primary_container` (Safety Yellow), text `on_primary`. Use `rounded-md` (0.375rem). The hover state should transition to `primary_container` with a slight "compression" effect (scale: 0.98).
*   **Secondary:** Background `transparent`, "Ghost Border" (20% `outline`), text `on_surface`.
*   **Tertiary:** Text only, `title-sm` weight, with a `2px` underline using the safety yellow accent.

### Input Fields: Industrial Precision
*   **State:** Use `surface_container_highest` for the input track.
*   **Interaction:** On focus, the bottom border animates from 0% to 100% width using the `on_primary_container` accent.
*   **Error:** Use `error` (#ba1a1a) for the helper text and a 20% opacity `error_container` fill for the input background.

### Cards & Lists (Project Portfolio)
*   **Rule:** Forbid divider lines. Use `spacing-8` (2rem) of vertical white space to separate items.
*   **Structure:** Image (top), followed by a `label-md` category, then `headline-sm` title. Overlap the title slightly onto the image container (1rem negative margin) to break the "template" feel.

### Specialized Component: The "Reliability Gauge"
A custom progress or "Step" indicator for roofing phases (Inspection -> Quote -> Install). Use heavy `24` (6rem) spacing between steps, connected not by lines, but by the transition of `surface_container` colors.

## 6. Do’s and Don’ts

### Do:
*   **Do** use asymmetrical layouts where text blocks are offset from image edges.
*   **Do** use the `primary` (Dark Charcoal) for large typography on `surface` backgrounds to establish authority.
*   **Do** use the `8` (2rem) and `12` (3rem) spacing tokens generously to allow the design to "breathe."

### Don’t:
*   **Don’t** use standard "drop shadows." If it doesn't look like natural light, don't use it.
*   **Don’t** use icons with rounded, bubbly corners. Use sharp, technical, or "wireframe" style iconography to maintain the industrial vibe.
*   **Don’t** use center-alignment for long-form text. Editorial authority is best conveyed through strong left-alignment.
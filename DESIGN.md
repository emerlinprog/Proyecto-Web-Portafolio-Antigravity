# Antigravity Design System: Impeccable Standards

This document outlines the design architecture and "spells" used in the Antigravity Portfolio, following the **Impeccable** framework for high-fidelity AI-driven design.

## ── Vision: Industrial Dark / Departure Mode
We move away from standard "editorial" layouts toward a rigorous, utility-focused aesthetic.
- **Terminal-Native**: actual code surfaces and syntax-highlighted UI elements.
- **Industrial-Signage**: dimensional typography and ISO wayfinding standards.
- **Swiss-Grid-Rigorous**: visible, disciplined grid systems as a design voice.

## ── Color Architecture: Tinted Neutrals (OKLCH)
We reject pure #000 grays. All neutrals are tinted to provide depth and intent.
- **Accent Protocol**: `oklch(89% 0.21 115)` (Electric Lime/Neon)
- **Background Dark**: `oklch(10% 0.008 115)` (Tinted Deep Neutral)
- **Surface**: `oklch(15% 0.01 115)`
- **Deep Surface**: `oklch(12% 0.005 115)` (Used for deep layering and glass effects)

## ── Motion System: Premium Easing Spells
Animations follow physical laws of momentum and staggered reveals.
- **Ease Premium (Out)**: `cubic-bezier(0.16, 1, 0.3, 1)` (The primary entry/reveal spell)
- **Ease Out Quint**: `cubic-bezier(0.22, 1, 0.36, 1)` (For snappy, utility-focused motion)
- **Ease In-Out Premium**: `cubic-bezier(0.65, 0, 0.35, 1)` (For continuous loops and ambient motion)

### ── Standard Durations
- **Fast**: `0.15s` (Interactions)
- **Base**: `0.3s` (UI Transitions)
- **Slow**: `0.6s` (Page reveals / Orchestrated sequences)

## ── Spatial Logic: Modular Scale (1.25)
Spacing and typography are derived from a consistent mathematical ratio.
- **Base**: `1rem` (16px)
- **Scale**: `1.25`
- **Resulting Tokens**: `0.512rem`, `0.64rem`, `0.8rem`, `1rem`, `1.25rem`, `1.563rem`, `1.953rem`, `2.441rem`, `3.815rem`.

## ── Design "Spells" & Anti-Patterns
- **Spell: Polish**: Always use OKLCH for gradients to avoid the "gray dead zone" in the middle of a transition.
- **Spell: Audit**: Check for "Executive Density"—ensure information is dense but readable through clear hierarchy.
- **Anti-Pattern**: Avoid generic shadows. Use layered OKLCH glows (`--glow-md`) for dimensional intent.

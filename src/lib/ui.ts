/**
 * Shared interaction class strings. Goal: every interactive element in the
 * app feels the same when you hover / press / focus it.
 *
 * Why: a quick press-down "scale" + color shift gives users a clear tactile
 * cue that something happened, even on a fast click. The `motion-reduce:*`
 * variants respect the OS "reduce motion" preference.
 *
 * Focus ring uses NO offset on purpose — the app mixes dark (ink) and light
 * (white) backgrounds, and an offset color hard-codes one of them.
 */

const base =
    "cursor-pointer select-none transition-all duration-150 ease-out " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 " +
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 disabled:hover:translate-y-0 " +
    "motion-reduce:transition-none motion-reduce:active:scale-100 motion-reduce:hover:translate-y-0";

/** Subtle press feedback for icon / outline / ghost buttons. */
export const pressable = `${base} active:scale-90`;

/** Press feedback + hover lift for solid/filled primary buttons. */
export const pressablePrimary = `${base} hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:scale-95 active:shadow-sm`;

/** Text-only buttons (e.g. "Clear cart") that shouldn't scale but should ack. */
export const pressableText = `${base} active:opacity-60`;

/**
 * Plain text links (Navbar items, "Continue shopping").
 * Scales/translates would look weird on inline text, so we lean on color +
 * opacity to acknowledge the press.
 */
export const pressableLink = `${base} hover:text-accent active:opacity-60`;

/**
 * Whole-card links (e.g. `ProductItem`). The card should feel like it lifts
 * off the page on hover and gets pushed back in on click.
 */
export const pressableCard = `${base} hover:-translate-y-1 hover:shadow-lg active:translate-y-0 active:scale-[0.99] active:shadow-md`;

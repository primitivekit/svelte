/**
 * @primitivekit/svelte
 * Version: 0.0.2
 * 
 * Primitive Svelte components with zero hardcoded values.
 * Fully customizable via CSS variables.
 */

export { default as Button } from './components/Button/Button.svelte';
export type { ButtonVariant, ButtonSize } from './components/Button/types';

export { default as Input } from './components/Input/Input.svelte';
export type { InputType, InputSize } from './components/Input/types';

export const version = '0.0.2';

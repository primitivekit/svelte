<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import './Tag.css';

  export type TagVariant = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
  export type TagSize = 'small' | 'medium' | 'large';

  export let variant: TagVariant = 'default';
  export let size: TagSize = 'medium';
  export let closable: boolean = false;
  let className: string = '';
  export { className as class };

  const dispatch = createEventDispatcher();

  $: tagClasses = [
    'tag',
    `tag--${variant}`,
    `tag--${size}`,
    className
  ].filter(Boolean).join(' ');

  function handleClose() {
    dispatch('close');
  }
</script>

<span class={tagClasses}>
  {#if $$slots.icon}
    <span class="tag__icon"><slot name="icon" /></span>
  {/if}
  <span class="tag__content"><slot /></span>
  {#if closable}
    <button
      type="button"
      class="tag__close"
      on:click={handleClose}
      aria-label="Close tag">
      <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </button>
  {/if}
</span>

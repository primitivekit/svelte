<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import './Avatar.css';

  export type AvatarSize = 'small' | 'medium' | 'large' | number;
  export type AvatarShape = 'circle' | 'square';

  export let src: string | undefined = undefined;
  export let alt: string = 'Avatar';
  export let size: AvatarSize = 'medium';
  export let shape: AvatarShape = 'circle';
  let className: string = '';
  export { className as class };

  const dispatch = createEventDispatcher();

  let imgError = false;

  $: avatarClasses = [
    'avatar',
    `avatar--${shape}`,
    typeof size === 'string' ? `avatar--${size}` : '',
    className
  ].filter(Boolean).join(' ');

  $: avatarStyles = typeof size === 'number' ? `--avatar-size: ${size}px` : '';

  function handleError() {
    imgError = true;
  }

  function handleClick() {
    dispatch('click');
  }
</script>

<div 
  class={avatarClasses}
  style={avatarStyles}
  on:click={handleClick}
  role="button"
  tabindex="0">
  {#if src && !imgError}
    <img
      {src}
      {alt}
      class="avatar__image"
      on:error={handleError} />
  {:else if $$slots.icon}
    <span class="avatar__icon"><slot name="icon" /></span>
  {:else}
    <span class="avatar__text">
      <slot>{alt.charAt(0).toUpperCase()}</slot>
    </span>
  {/if}
</div>

<script lang="ts">
  import './Divider.css';

  export type DividerOrientation = 'horizontal' | 'vertical';
  export type DividerVariant = 'solid' | 'dashed' | 'dotted';

  export let orientation: DividerOrientation = 'horizontal';
  export let variant: DividerVariant = 'solid';
  export let label: string | undefined = undefined;
  let className: string = '';
  export { className as class };

  $: dividerClasses = [
    'divider',
    `divider--${orientation}`,
    `divider--${variant}`,
    label ? 'divider--with-label' : '',
    className
  ].filter(Boolean).join(' ');
</script>

{#if label && orientation === 'horizontal'}
  <div class={dividerClasses} role="separator">
    <hr class="divider__line" />
    <span class="divider__label">{label}</span>
    <hr class="divider__line" />
  </div>
{:else}
  <hr class={dividerClasses} role="separator" aria-orientation={orientation} />
{/if}

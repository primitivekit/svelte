<script lang="ts">
  import './Space.css';

  export type SpaceSize = 'small' | 'medium' | 'large' | number;
  export type SpaceDirection = 'horizontal' | 'vertical';
  export type SpaceAlign = 'start' | 'end' | 'center' | 'baseline';

  export let size: SpaceSize = 'medium';
  export let direction: SpaceDirection = 'horizontal';
  export let align: SpaceAlign | undefined = undefined;
  export let wrap: boolean = false;
  let className: string = '';
  export { className as class };

  $: spaceClasses = [
    'space',
    `space--${direction}`,
    typeof size === 'string' ? `space--${size}` : '',
    align ? `space--align-${align}` : '',
    wrap ? 'space--wrap' : '',
    className
  ].filter(Boolean).join(' ');

  $: spaceStyles = typeof size === 'number' ? `--space-gap: ${size}px` : '';
</script>

<div class={spaceClasses} style={spaceStyles}>
  <slot />
</div>

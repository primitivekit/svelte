<script lang="ts">
  import './Card.css';

  export type CardVariant = 'elevated' | 'outlined' | 'filled';

  export let variant: CardVariant = 'elevated';
  export let hoverable: boolean = false;
  export let clickable: boolean = false;
  let className: string = '';
  export { className as class };

  $: cardClasses = [
    'card',
    `card--${variant}`,
    hoverable ? 'card--hoverable' : '',
    clickable ? 'card--clickable' : '',
    className
  ].filter(Boolean).join(' ');
</script>

<div 
  class={cardClasses}
  role={clickable ? 'button' : undefined}
  tabindex={clickable ? 0 : undefined}
  on:click>
  <slot />
</div>

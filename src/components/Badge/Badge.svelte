<script lang="ts">
  import './Badge.css';

  export type BadgeVariant = 'solid' | 'subtle' | 'outline';
  export type BadgeColorScheme = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
  export type BadgeSize = 'small' | 'medium' | 'large';

  export let variant: BadgeVariant = 'solid';
  export let colorScheme: BadgeColorScheme = 'primary';
  export let size: BadgeSize = 'medium';
  let className: string = '';
  export { className as class };

  $: badgeClasses = [
    'badge',
    `badge--${variant}`,
    `badge--${colorScheme}`,
    `badge--${size}`,
    className
  ].filter(Boolean).join(' ');
</script>

<span class={badgeClasses}><slot /></span>

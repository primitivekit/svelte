<script lang="ts">
  import type { InputType, InputSize } from './types';

  export let label: string | undefined = undefined;
  export let type: InputType = 'text';
  export let size: InputSize = 'medium';
  export let placeholder: string | undefined = undefined;
  export let disabled: boolean = false;
  export let required: boolean = false;
  export let error: string | undefined = undefined;
  export let helperText: string | undefined = undefined;
  export let value: string = '';

  $: inputClasses = `pk-input pk-input--${size}${error ? ' pk-input--error' : ''}`;
</script>

<div class="pk-input-wrapper">
  {#if label}
    <label class="pk-input__label">
      {label}
      {#if required}<span class="pk-input__required">*</span>{/if}
    </label>
  {/if}
  <input
    class={inputClasses}
    {type}
    {placeholder}
    {disabled}
    {required}
    bind:value
    on:input
    on:blur
  />
  {#if error}
    <span class="pk-input__error">{error}</span>
  {:else if helperText}
    <span class="pk-input__helper">{helperText}</span>
  {/if}
</div>

<style>
  .pk-input-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
  }
  .pk-input__label {
    font-size: 0.875rem;
    font-weight: 500;
    color: #374151;
  }
  .pk-input__required {
    color: #dc2626;
  }
  .pk-input {
    width: 100%;
    padding: 0.5rem 0.75rem;
    font-size: 1rem;
    color: #1f2937;
    background-color: #ffffff;
    border: 1px solid #d1d5db;
    border-radius: 0.375rem;
    outline: none;
  }
  .pk-input:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
  .pk-input--error {
    border-color: #dc2626;
  }
  .pk-input__error {
    font-size: 0.875rem;
    color: #dc2626;
  }
  .pk-input__helper {
    font-size: 0.875rem;
    color: #6b7280;
  }
</style>

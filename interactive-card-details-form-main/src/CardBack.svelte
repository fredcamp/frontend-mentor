<script lang="ts">
  import cardBack from './assets/bg-card-back.png'

  export let expCvc: string
  let className: string
  export { className as class }

  function parser(text: string): string {
    text = text?.trim().length === 0 ? '0' : text || '0'
    return text.padStart(3, '0')
  }
</script>

<div class={className} {...$$restProps}>
  <img src={cardBack} alt="card back" class="max-h-44 shrink-0" />
  <span
    class="absolute top-1/2 right-9 -translate-y-[60%] text-sm tracking-widest text-white"
    >{parser(expCvc)}</span
  >
</div>

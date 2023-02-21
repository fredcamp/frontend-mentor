<script lang="ts">
  import cardFront from './assets/bg-card-front.png'
  import logo from './assets/card-logo.svg'

  export let cardName: string
  export let cardNumber: string
  export let expMonth: string
  export let expYear: string
  let className: string
  export { className as class }

  function cardParser(card: string): string {
    if (card?.trim().length > 1) {
      card = card.replace(/ /g, '')
    }

    card = card?.trim().length === 0 ? '0' : card || '0'
    card = card.padStart(16, '0')

    const cardArr = card.split('')
    card = ''

    for (let i = 0; i < cardArr.length; i++) {
      if (i % 4 === 0) card += ' '
      card += cardArr[i]
    }

    return card
  }

  function nameParser(name: string): string {
    name = name?.trim().length === 0 ? 'fred campo' : name || 'fred campo'
    return name
  }

  function expParser(text: string): string {
    text = text?.trim().length === 0 ? '0' : text || '0'
    return text.padStart(2, '0')
  }
</script>

<section class={className} {...$$restProps}>
  <div class="lg:relative lg:bottom-32 lg:left-20">
    <img src={cardFront} alt="card front" class="max-h-44 shrink-0" />
    <article class="absolute inset-0 px-5 py-6 text-xs text-white">
      <img src={logo} alt="card logo" class="h-8 shrink-0" />
      <div class="mt-11 space-y-5">
        <p class="col-span-2 text-[1.4rem] tracking-wider">
          {cardParser(cardNumber)}
        </p>
        <div class="flex items-center justify-between">
          <p class="uppercase tracking-widest">{nameParser(cardName)}</p>
          <p class="tracking-widest">
            {expParser(expMonth)} / {expParser(expYear)}
          </p>
        </div>
      </div>
    </article>
  </div>
</section>

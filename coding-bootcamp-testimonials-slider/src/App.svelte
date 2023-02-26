<script lang="ts">
  import favicon from './assets/favicon-32x32.png'
  import { setContext } from 'svelte'
  import Testimonial from './Testimonial.svelte'
  import tanyaImg from './assets/image-tanya.jpg'
  import johnImg from './assets/image-john.jpg'
  import bobImg from './assets/image-bob.jpg'

  const testimonials = [
    {
      id: crypto.randomUUID(),
      image: tanyaImg,
      name: 'Tanya Sinclair',
      position: 'UX Engineer',
      message:
        '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”',
    },
    {
      id: crypto.randomUUID(),
      image: johnImg,
      name: 'John Tarkpor',
      position: 'Junior Front-end Developer',
      message:
        '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”',
    },
    {
      id: crypto.randomUUID(),
      image: bobImg,
      name: 'Bob Smith',
      position: 'Web Developer',
      message:
        '“ My advice to future bootcampers is that if you love analyzing data and problem solving, then you are in the right track. Since it takes determination to reach your dream to become a web developer ”',
    },
  ]

  let current = 0
  $: show = testimonials[current]
  let loading = false

  setContext('updateCurrent', updateCurrent)

  function onKeydown(e): void {
    const valid = ['ArrowLeft', 'ArrowRight']
    if (!valid.includes(e.key)) return

    switch (e.key) {
      case 'ArrowLeft':
        updateCurrent('decrement')
        break
      case 'ArrowRight':
        updateCurrent('increment')
        break
    }
  }

  function updateCurrent(type: 'increment' | 'decrement'): void {
    if (loading) return
    const value = type === 'increment' ? current + 1 : current - 1

    if (value < 0) {
      current = testimonials.length - 1
    } else if (value > testimonials.length - 1) {
      current = 0
    } else {
      current = value
    }
    console.log('working')
    loading = false
  }

  function onScroll(e): void {
    if (loading) return
    const event = e.deltaY > 0 ? 'scrolldown' : 'scrollup'

    switch (event) {
      case 'scrolldown':
        updateCurrent('decrement')
        break
      case 'scrollup':
        updateCurrent('increment')
        break
    }
  }
</script>

<svelte:head>
  <link rel="shortcut icon" href={favicon} type="image/x-icon" />
</svelte:head>

<svelte:window on:keydown={onKeydown} on:wheel={onScroll} />

<section class="grid min-h-screen place-items-center">
  <div
    on:introstart={() => (loading = true)}
    on:introend={() => (loading = false)}
  >
    <Testimonial {...show} />
  </div>
</section>

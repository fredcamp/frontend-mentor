<script>
  import Form from './components/Form.svelte'
</script>

<main
  class="bg-pattern-mobile bg-red min-h-screen bg-repeat lg:flex lg:items-center lg:justify-center"
>
  <div
    class="pb-16 pt-28 lg:mx-auto lg:grid lg:max-w-screen-lg lg:grid-cols-2 lg:px-4 lg:py-0"
  >
    <section
      class="flex flex-col items-center justify-center space-y-8 px-8 text-white"
    >
      <h1
        class="max-w-sm text-center text-4xl font-bold lg:max-w-none lg:text-left"
      >
        Learn to code by watching others
      </h1>
      <p
        class="max-w-md text-center text-xl lg:text-left lg:text-sm lg:leading-6"
      >
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable.
      </p>
    </section>
    <section class="mt-24 px-8 lg:mt-0 lg:px-0">
      <article
        class="bg-blue shadow-under rounded-lg py-5 text-center text-white lg:py-4"
      >
        <p class="mx-auto max-w-[15rem] text-lg md:max-w-none lg:text-sm">
          <strong>Try it free 7 days</strong> then $20/mo. thereafter
        </p>
      </article>
      <Form />
    </section>
  </div>
</main>

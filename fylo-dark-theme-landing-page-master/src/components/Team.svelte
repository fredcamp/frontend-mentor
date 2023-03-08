<script lang="ts">
  import illustration from '../images/illustration-stay-productive.png'
  import illustrationLight from '../images/illustration-stay-productive-light.svg'
  import ArrowIcon from '../svg/icon-arrow.svelte'
  import Anchor from './Anchor.svelte'

  import theme from '../utils/theme'
</script>

<section class="mx-auto mt-48 max-w-screen-xl px-6" id="team">
  <div class="grid place-items-center gap-20 lg:grid-cols-2">
    <div class="mx-auto max-w-sm lg:max-w-full">
      <img
        src={$theme === 'dark' ? illustration : illustrationLight}
        alt="illustration of three human cartoons being productive on their works"
      />
    </div>
    <div class="space-y-6">
      <h3 class="text-3xl font-bold lg:max-w-sm">
        Stay productive, wherever you are
      </h3>
      <p class="text-lg xl:text-base">
        Never let location be an issue when accessing your files. Fylo has you
        covered for all of your file storage needs.
      </p>
      <p class="text-lg xl:text-base">
        Securely share files and folders with friends, family and colleagues for
        live collaboration. No email attachments required.
      </p>
      <Anchor
        class="dark:text-cyan text-light-bright-blue after:bg-light-moderate-cyan hover:text-light-moderate-cyan relative inline-flex items-center gap-2 text-lg transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[1px] after:origin-right after:scale-x-0 after:transition-transform after:duration-300 after:hover:origin-left hover:after:scale-x-100 dark:after:bg-white dark:hover:text-white xl:text-base"
      >
        <span>See how Fylo works</span>
        <ArrowIcon />
      </Anchor>
    </div>
  </div>
</section>

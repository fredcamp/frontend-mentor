<script lang="ts">
  import { fade } from 'svelte/transition'
  import Card from './Card.svelte'
  import type { Job } from '../types/Job.type'

  export let data: Job[] = []
</script>

<section class="mt-14">
  <ul class="space-y-16 xl:space-y-10">
    {#each data as job (job.id)}
      <li out:fade>
        <Card {...job} />
      </li>
    {/each}
  </ul>
</section>

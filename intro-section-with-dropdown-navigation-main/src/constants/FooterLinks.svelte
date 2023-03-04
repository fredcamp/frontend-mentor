<script lang="ts" context="module">
  import DataBizIcon from '../icons/client-databiz.svelte'
  import AudioPhileIcon from '../icons/client-audiophile.svelte'
  import MeetIcon from '../icons/client-meet.svelte'
  import MakerIcon from '../icons/client-maker.svelte'

  export function createFooterLinks() {
    return [
      {
        name: 'Databiz',
        Icon: DataBizIcon,
      },
      {
        name: 'Audio Phile',
        Icon: AudioPhileIcon,
      },
      {
        name: 'Meet',
        Icon: MeetIcon,
      },
      {
        name: 'Maker',
        Icon: MakerIcon,
      },
    ]
  }
</script>

<script lang="ts">
  import { Chart, type ChartItem } from 'chart.js/auto'
  import { onMount } from 'svelte'
  import { amountParser } from './parser'

  export let data: { day: string; amount: number }[]

  let ctx: ChartItem
  let chartCanvas: HTMLCanvasElement
  let myChart: Chart

  onMount(() => {
    displayChart()

    return () => {
      myChart.destroy()
    }
  })

  function displayChart(): void {
    ctx = chartCanvas.getContext('2d')
    myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.map((item) => item.day),
        datasets: [
          {
            data: data.map((item) => item.amount),
            backgroundColor: [
              'hsl(10, 79%, 65%)',
              'hsl(10, 79%, 65%)',
              'hsl(186, 34%, 60%)',
              'hsl(10, 79%, 65%)',
              'hsl(10, 79%, 65%)',
              'hsl(10, 79%, 65%)',
              'hsl(10, 79%, 65%)',
            ],
            hoverBackgroundColor: [
              'hsla(10, 79%, 65%,0.7)',
              'hsla(10, 79%, 65%,0.7)',
              'hsla(186, 34%, 60%,0.7)',
              'hsla(10, 79%, 65%,0.7)',
              'hsla(10, 79%, 65%,0.7)',
              'hsla(10, 79%, 65%,0.7)',
              'hsla(10, 79%, 65%,0.7)',
            ],
            borderRadius: 4,
            borderSkipped: false,
          },
        ],
      },
      options: {
        scales: {
          y: {
            grid: {
              display: false,
            },
            border: {
              display: false,
            },
            ticks: {
              display: false,
            },
            beginAtZero: true,
          },
          x: {
            grid: {
              display: false,
            },
            ticks: {
              color: 'hsl(28, 10%, 53%)',
              font: {
                family: 'DM Sans',
              },
            },
            border: {
              display: false,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            displayColors: false,
            caretSize: 0,
            bodyColor: 'hsl(33, 100%, 98%)',
            backgroundColor: 'hsl(25, 47%, 15%)',
            xAlign: 'center',
            yAlign: 'bottom',
            padding: 8,
            bodyFont: {
              family: 'DM Sans',
            },
            callbacks: {
              title: function () {
                return ''
              },
              label: function (context) {
                let label = ''

                if (context.parsed.y !== null) {
                  label += amountParser(context.parsed.y)
                }
                return label
              },
            },
          },
        },
      },
    })
  }
</script>

<canvas class="cursor-pointer" bind:this={chartCanvas} />

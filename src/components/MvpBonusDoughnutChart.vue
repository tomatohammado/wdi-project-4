<template>
  <doughnut-chart :data="datacollection" :options="dataoptions"></doughnut-chart>
</template>

<script>
import DoughnutChart from './DoughnutChart.js'

export default {
  components: {
    DoughnutChart
  },
  data () {
    return {
      datacollection: {
        datasets: [{
          data: [
            152,
            47,
          ],
          backgroundColor: [
            '#FFB600',
            '#FF8650'
          ]
        }],
        labels: [
          'MVP: 152:06:24',
          'Bonus: 47:23:03'
        ]
      },
      dataoptions: {
        tooltips: {
          enabled: true
        }
      }
    }
  }
}
</script>

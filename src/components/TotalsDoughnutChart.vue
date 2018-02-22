<template>
  <doughnut-chart :data="datacollection"></doughnut-chart>
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
            651972,
            167019,
            195113,
            419512,
            102140,
            547584,
            170583,
          ]
        }],
        labels: [
          'Class: 181:06:12',
          'Homework: 46:23:39',
          'Labs: 54:11:53',
          'Projects: 116:31:52',
          'Outcomes: 28:22:20',
          'MVP: 152:06:24',
          'Bonus: 47:23:03'
        ]
      }
    }
  }
}
</script>


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
            181,
            46,
            54,
            116,
            28,
          ],
          backgroundColor: [
            '#FF2143',
            '#969FC2',
            '#FC9C96',
            '#FF8650',
            '#B7A99C'
          ]
        }],
        labels: [
          // 'Class: 181:06:12',
          // 'Homework: 46:23:39',
          // 'Labs: 54:11:53',
          // 'Projects: 116:31:52',
          // 'Outcomes: 28:22:20'
          'Class',
          'Homework',
          'Labs',
          'Projects',
          'Outcomes'
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


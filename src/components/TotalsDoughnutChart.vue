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
          // data: [
          //   651972,
          //   167019,
          //   195113,
          //   419512,
          //   102140,
          //   547584,
          //   170583,
          // ],
          data: [
            181,
            46,
            54,
            116,
            28,
          ],
          backgroundColor: [
            '#FC9C96',
            '#FF2143',
            '#969FC2',
            '#B7A99C',
            '#7ED5C0',
          ]
        }],
        labels: [
          'Class: 181:06:12',
          'Homework: 46:23:39',
          'Labs: 54:11:53',
          'Projects: 116:31:52',
          'Outcomes: 28:22:20',
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


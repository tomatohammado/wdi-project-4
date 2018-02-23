<template>
  <bar-chart :data="datacollection" :options="dataoptions"></bar-chart>
</template>

<script>
import BarChart from './BarChart.js'

export default {
  components: {
    BarChart
  },
  data () {
    return {
      datacollection: {
        labels: [
          'Class',
          'Homework',
          'Labs'
        ],
        datasets: [
          {
            label: 'MVP',
            backgroundColor: [
              '#FFB600',
              '#FFB600',
              '#FFB600'
            ],
            data: [
              22,
              27,
              40
            ]
          },
          {
            label: 'Bonus',
            backgroundColor: [
              // MVP and Bonus colors
              '#7ED5C0',
              '#7ED5C0',
              '#7ED5C0'
            ],
            data: [
              22,
              1.5,
              8
            ]
          }
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

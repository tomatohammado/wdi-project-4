<template>
  <div class="charts">
    <h1>WDI20 - <em>A Data Visualization</em></h1>
    <div class="container">
      <div class="container-chart">
        <h2>Total Time Spent (In Hours)</h2>
        <totals-doughnut-cart></totals-doughnut-cart>
      </div>
      <div class="container-chart">
        <h2>Total Time: MVP vs Bonus Requirements</h2>
        <mvp-bonus-doughnut-cart></mvp-bonus-doughnut-cart>
      </div>
      <div class="container-chart">
        <h2>MVP/Bonus Time, by Task</h2>
        <mvp-bonus-bar-chart></mvp-bonus-bar-chart>
      </div>
    </div>
  </div>
</template>

<script>
import WdiDay from '@/components/WdiDay.vue'
import TotalsDoughnutCart from '@/components/TotalsDoughnutChart.vue'
import MvpBonusDoughnutCart from '@/components/MvpBonusDoughnutChart.vue'
import MvpBonusBarChart from '@/components/MvpBonusBarChart.vue'

export default {
  name: 'charts',
  components: {
    TotalsDoughnutCart,
    MvpBonusDoughnutCart,
    MvpBonusBarChart
  }
}
</script>

<style lang="scss">
  .container {
    max-width: 800px;
    margin: 0 auto;
  }

  .container-chart {
    margin-bottom: 16px;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
</style>



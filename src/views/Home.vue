<template>
  <div class="home">
    <img src="../assets/logo.png">
    <wdi-day></wdi-day>
    <div class="container">
      <totals-doughnut-cart></totals-doughnut-cart>
    </div>
  </div>
</template>

<script>
import WdiDay from '@/components/WdiDay.vue'
import TotalsDoughnutCart from '@/components/TotalsDoughnutChart.vue'

export default {
  name: 'home',
  components: {
    WdiDay,
    TotalsDoughnutCart
  }
}
</script>

<style lang="scss">
  .container {
    max-width: 800px;
    margin: 0 auto;
  }
</style>



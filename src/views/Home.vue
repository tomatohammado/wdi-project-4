<template>
  <div class="home">
    <img src="../assets/logo.png">
    <wdi-day></wdi-day>
    <totals-doughnut-cart></totals-doughnut-cart>
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

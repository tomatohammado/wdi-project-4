<template>
  <div class="home">
    <img src="../assets/logo.png">
    <wdi-day></wdi-day>
  </div>
</template>

<script>
import WdiDay from '@/components/WdiDay.vue'

export default {
  name: 'home',
  components: {
    WdiDay
  }
}
</script>

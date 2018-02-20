<template>
  <header>
    <span class="profile-picture"></span>
    <span class="header-name">Hammad Malik</span>
    <span class="about-trigger">WDI-20</span>
  </header>
</template>

<script>
export default {
  name: 'MainHeader'
}
</script>

<style lang="scss" scoped>
  header {
    width: 100vw;
    height: 56px;
    display: flex;
    justify-content: flex-start;
  }

  .profile-picture {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #F00;
    margin: 0 12px;
  }

  .about-trigger {
    margin-left: auto;
  }
</style>


<template>
  <div id="app">
    <header>
      <span class="profile-picture"></span>
      <span class="header-name">Hammad Malik</span>
      <span class="about-trigger">WDI-20</span>
    </header>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>


<style lang="scss">
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

header {
  width: 100vw;
  height: 56px;
  padding: 8px;
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

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

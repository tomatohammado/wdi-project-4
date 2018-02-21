<template>
  <div id="app">
    <header>
      <span class="profile-picture"></span>
      <span class="header-name">Hammad Malik</span>
      <span class="about-trigger">WDI-20</span>
    </header>
    <main>
      <aside>
      </aside>

      <section>
        <article>
        </article>
      </section>

    </main>
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
  align-items: center;
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

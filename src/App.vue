<template>
  <div id="app" class="split">
    <nav class="primary-color split-padding">
      <h1 id="nav-header">Yet<br>Another<br>Podcast<br>
      <hr class="headerSplit" align='left'>
      </h1>
      <section id="nav-links">
        <router-link class="nav-link" to="/">Episodes</router-link>
      </section>
    </nav>
    <router-view class="split-padding"/>
  </div>
</template>

<style lang="sass">
@import "./Styles/All"
</style>
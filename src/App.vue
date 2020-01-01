<template>
  <div id="app" class="split">
    <nav class="primary-color split-padding">
      <h1>Yet<br>Another<br>Podcast<br>
      <hr class="headerSplit" align='left'>
      </h1>
      <router-link class="nav-link" to="/">Episodes</router-link>
    </nav>
    <router-view class="split-padding"/>
  </div>
</template>

<style lang="sass">
@import url("https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900&display=swap")

$primary-background-color: #3F8AFC
$primary-foreground-color: #FFFFFF

html, body
  margin: 0
  font-family: 'Lato'
#app, body, html
  width: 100%
  height: 100% 
.split
  display: grid
  grid-template-columns: 1fr 1fr
.primary-color
  color: $primary-foreground-color
  background-color: $primary-background-color
.split-padding
  padding: 5%
nav h1
  font-weight: 300
  font-size: 8em
  line-height: 1em
  margin: 0
.headerSplit
  background-color: $primary-foreground-color
  width: 80%
  height: 10px
  margin: 1% 0% 4% 0
.nav-link
  font-weight: 100
  color: $primary-foreground-color
  text-decoration: none
  font-size: 3em
</style>
<template>
  <div id="app">
    <Header/>
    <Content/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Content from './components/Content.vue'


export default {
  name: 'App',
  components: {
    Header,
    Content
  }
}
</script>

<style lang="stylus">
@import 'css/main'

#app
  font-family $font-primary
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  width 100vw
  min-height 100vh
  display flex
  @media tablet
    flex-direction column-reverse
</style>

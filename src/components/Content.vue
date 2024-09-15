<template>
    <main>
        <Header/>
        <router-view />
        <Footer/>
    </main>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';


export default {
  name: 'Home',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="stylus" scoped>
@import '../css/variables'
main
    font-size 16px
    line-height 24px
    display flex
    max-width 100%
    flex-direction column
    align-items center

</style>
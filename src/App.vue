<template>
  <div id="app">
    <div class="loader-wrapper" v-if="!isLoaded">
      <fingerprint-spinner
        :animation-duration="1500"
        :size="64"
        color="#FF96AD"
      />
    </div>
    <Content/>
  </div>
</template>

<script>
import Content from './components/Content.vue'
import { FingerprintSpinner } from 'epic-spinners'


export default {
  name: 'App',
  data: () => {
    return {
      isLoaded: false,
    }
  },
  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState == 'complete') {
        this.isLoaded = true;
      }
    }
   
  },
  components: {
    Content,
    FingerprintSpinner
  }
}
</script>

<style lang="stylus">
@import 'css/main'

.loader-wrapper
  display flex
  width 100vw
  background white
  z-index 999
  height 100%
  position fixed
  top 0
  left 0
  justify-content center
  align-items center
#app
  font-family $font-primary
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  width 100vw
  min-height 100vh
  display flex
  overflow-x hidden
  background-color: #ffffff;
  opacity: 0.8;
  background-image: radial-gradient(#212121 0.7000000000000001px, #ffffff 0.7000000000000001px);
  background-size: 14px 14px;
  @media tablet
    flex-direction column-reverse
    justify-content flex-end
</style>

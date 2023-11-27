<template>
    <div class="embed">
      <vue-pdf-embed :source="source1" />
    </div>
  </template>
  
  <script>
  
  import VuePdfEmbed from 'vue-pdf-embed/dist/vue2-pdf-embed'
  
  export default {
    components: {
      VuePdfEmbed,
    },
    data() {
      return {
        source1: '/CV.pdf',
      }
    },
  }
  </script>

<style lang="stylus">
@import '../css/variables'
.vue-pdf-embed > div {
    margin-bottom: 8px;
    box-shadow: 0 2px 8px 4px rgba(0, 0, 0, 0.1);
    width: (100vw - 5vh - 100px);
    height: auto;
    @media tablet {
        width: (100vw - 2vh);
        height: auto;
    }
}
</style>
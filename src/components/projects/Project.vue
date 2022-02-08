<template>
  <article>
    <figure>
      <img :src="require(`@/assets/projects/${path}.png`)" alt="" />
    </figure>
    <div v-if="tags" class="tags">
      <span v-if="tags.includes('Design')" class="tag design">
          Design
      </span>
      <span v-if="tags.includes('Frontend')" class="tag frontend">
          Frontend
      </span>
      <span v-if="tags.includes('Backend')" class="tag backend">
          Backend
      </span>
    </div>
    <div class="title_year">
        <h3>{{ title }}</h3>
        <p class="year">{{ year }}</p>
    </div>
    <p class="description">{{ description }}</p>
    <div class="bottom">
      <button>Visiter le projet</button>
      <!-- <div class="team">

            </div> -->
    </div>
  </article>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      default: () => [],
    },
    path: {
      type: String,
      default: "",
    },
    year: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '../../css/variables'
article
    display flex
    flex-direction column
    padding 30px
    width 360px
    box-shadow 0px 0px 15px rgba(0, 0, 0, 0.1)
    border-radius 30px
    @media tablet
        width auto
        margin-bottom 30px

figure
    width 100%
    height 100%
    margin-bottom 20px
    img
        width 100%
        height 100%
.title_year
    display flex
    width 100%
    justify-content: space-between
    h3
        margin-bottom 20px
        font-weight bold
        font-size 24px
    .year
        margin-bottom 20px
        font-size 16px
        color $grey-color

.description
    margin-bottom 20px
    font-size 20px
.tags
    margin-bottom 20px
    display flex
button
    background-color $blue-color
    font-family 'Source Sans Pro', sans-serif
    font-weight 600
    font-size 16px
    outline none
    border none
    color white
    padding 16px 32px
    border-radius 8px
.tag
    padding 8px
    margin-right 12px
    border-radius 8px
    font-family Source Sans Pro, sans-serif
    font-weight bold

.design
    background-color $design-bg-color
    color $design-color

.frontend
    background-color $frontend-bg-color
    color $frontend-color
.backend
    background-color $backend-bg-color
    color $backend-color
</style>

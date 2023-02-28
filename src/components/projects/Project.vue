<template>
  <article>
    <div class="title_year">
        <h3>{{ title }}</h3>
        <p class="year">{{ year }}</p>
    </div>
    <p class="description">{{ description }}</p>
    <div v-if="tags" class="tags">
      <span v-if="tags.includes('Design')" class="tag design">
          Design
      </span>
      <span v-if="tags.includes('Front-end')" class="tag frontend">
          Front-end
      </span>
      <span v-if="tags.includes('Back-end')" class="tag backend">
          Back-end
      </span>
      <span v-if="tags.includes('Management')" class="tag management">
          Management
      </span>
    </div>
    <!-- <button>Visiter le projet</button> -->
  </article>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      default: () => [],
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
    padding 24px
    justify-content space-around
    // width 360px
    // box-shadow 0px 0px 8px rgba(0, 0, 0, 0.1)
    border: 1px solid rgba(0, 0, 0, 0.15)
    border-radius 16px
    gap 16px
    @media tablet
        width 80%
        max-width 500px
        margin-bottom 30px
.title_year
    display flex
    width 100%
    text-align center
    justify-content space-between
    align-items center
    h3
        font-weight bold
        font-size 24px
        line-height 36px
        max-width 250px
        text-align left
    .year
        font-size 16px
        color $grey-color

.description
    font-size 20px
    line-height 30px
    max-width 360px
.tags
    display flex
button
    justify-self flex-start
    font-family 'Nunito', sans-serif
    font-weight 600
    font-size 14px
    outline none
    background: white;
    color: $blue-color;
    border 1px solid  $blue-color
    padding 12px 24px
    border-radius 8px
    cursor pointer
    transition all 0.4s ease-in-out
    &:hover {
      box-shadow: inset -41em 0 0 0 $blue-color, inset 41em 0 0 0 $blue-color;
      color: white;
    }

.tag
    padding 4px 8px
    margin-right 8px
    border-radius 8px
    font-family 'Nunito', sans-serif
    font-weight bold
    font-size 13px
    

.design
    background-color $design-bg-color
    color $design-color

.frontend
    background-color $frontend-bg-color
    color $frontend-color
.backend
    background-color $backend-bg-color
    color $backend-color
.management
    background-color $management-bg-color
    color $management-color
</style>

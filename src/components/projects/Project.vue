<template>
  <a :href="link" target="_blank">
    <article :style="{ backgroundColor: backgroundColor }">
      <div class="article-left-content">
        <h3 class="article-title">{{ title }}</h3>
        <p class="article-description">{{ description }}</p>
        <div v-if="tags.length" class="tags">
          <span v-for="tag in tags" :key="tag" :style="{ color: backgroundColor}" class="tag">
            {{ tag }}
          </span>
        </div>
      </div>
      <img :src="require(`@/assets/projects/${path}.png`)" :alt="imageAlt" />
    </article>
  </a>
</template>

<script>

export default {
  props: {
    tags: {
      type: Array,
      default: () => [],
    },
    link: {
      type: String,
      default: "",
    },
    path: {
      type: String,
      default: "",
    },
    imageAlt: {
      type: String,
      default: "Article image",
    },
    description: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    backgroundColor: {
      type: String,
      default: "#ffffff",
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '../../css/variables'

a
  text-decoration none

article
    display flex
    padding 24px 24px 0 24px
    justify-content space-between
    border-radius 16px
    color: white
    margin-bottom 24px
    overflow: clip
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    img
      width: 703px;
      height: 291px;
    @media tablet
      width 100%
      max-width 100%
      border-radius 40px 40px 12px 12px
      height: auto
      margin-bottom 30px
      flex-direction column-reverse
      padding 0
      img
        width: 100%
        height: auto
    @media mobile
        width 100%
        max-width 500px
        height: auto
        border-radius 24px
        margin-bottom 30px
        flex-direction column-reverse
        padding 0
        img
          width: auto
          height: 100%

.article-left-content
  display: flex
  flex-direction: column
  justify-content: space-around
  @media tablet
    padding 20px
    gap 24px
  @media mobile
    gap 20px

.article-title
  font-size 44px
  font-weight 400
  @media tablet
    font-size 32px

.article-description
  font-size 20px
  line-height 120%
  font-family $font-secondary
  font-weight 400
  max-width: 80%
  @media mobile
    max-width 100%
    font-size 16px
    line-height 20px

.tags
    display flex
    gap 8px
    @media tablet
      flex-wrap: wrap
      gap 4px

.tag
    padding 4px 8px
    border-radius 4px
    font-family $font-secondary
    font-weight light
    font-size 14px
    background: white
    @media mobile
      font-size 11px
      padding 2px 8px
      font-weight 400


</style>

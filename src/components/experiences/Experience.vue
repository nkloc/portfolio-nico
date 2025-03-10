<template>
  <article>
    <div class="article-left">
      <img :src="require(`@/assets/experiences/${path}.png`)" :alt="imageAlt" />
      <div class="job">
        <p class="title">{{ jobTitle }}</p>
        <p class="company">{{ company }}</p>
      </div>
    </div>
    <p class="article-right">{{ dateRange }}</p>
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
    imageAlt: {
      type: String,
      default: "Article image",
    },
    company: {
      type: String,
      default: "",
    },
    jobTitle: {
      type: String,
      default: "",
    },
    dateRange: {
      type: String,
      default: "",
    }
  },
};
</script>

<style lang="stylus" scoped>
@import '../../css/variables'
article
  display: flex
  flex-direction: row
  align-items center
  padding 0 32px
  border: 1px solid #848484
  border-radius 80px
  height: 120px
  width: calc(50% - 74px)
  background: white
  font-family $font-secondary
  justify-content: space-between
  @media tablet
    width calc(100% - 32px)
    padding 0 16px
    font-size 16px
    height: 80px
  @media mobile
    font-size 13px
  .article-left
    display: flex
    align-items: center
  .article-right
    color #848484
    text-align: center
    font-weight 400
  .job
    text-align left
    display flex
    flex-direction column
    margin-left 16px
    .title
      font-weight 700
    .company
      font-weight 300
      margin-top 4px
      @media mobile
        margin-top 0px
  img
    width: 80px
    height: 80px
    @media tablet
      width: 50px
      height: 50px
</style>

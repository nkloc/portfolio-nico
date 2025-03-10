
<template>
    <footer>
        <nav>
            <ul>
                <li class="copyright ul-left">Made with <> by Me</li>
                <div class="ul-right">
                    <a class="button" :href="cvUrl" download="Nicolas_CV.pdf"><li>Mon CV</li></a>
                    <a class="button" :href="portfolioUrl" download="Nicolas_Portfolio.pdf"><li>Mon Portfolio</li></a>
                </div>
            </ul>
        </nav>
    </footer>
</template>

<script>

export default {
  data() {
    return {
      cvUrl: '/cv.pdf',
      portfolioUrl: '/portfolio.pdf' 
    };
  }
}
</script>

<style lang="stylus" scoped>
@import '../css/variables'

footer
    width: calc(100vw - 96px)
    padding 24px 48px
    border-top: 2px solid black
    display: flex
    justify-content: center
    align-items: center
    margin-top: 48px
    background: white
    @media tablet
        width calc(100vw - 48px)
        padding 12px 24px
        margin-bottom 0

nav
    width 100%
    ul 
        display flex
        width 100%
        justify-content: space-between
        align-items center
        .copyright
            font-size 24px
            font-weight bold
            @media tablet
                font-size 16px
        .ul-left
            display flex
            justify-content: center
            align-items: center
        .ul-right
            display flex
</style>
<template>
    <header>
        <router-link to="/"><img src="@/assets/logo.svg" alt="Logo KLOC Nicolas"></router-link>
        <div>
            <a href="https://www.linkedin.com/in/n-kloc/" target="_blank"><img src="@/assets/linkedin.svg" alt="Linkedin KLOC Nicolas"></a>
            <a href="https://github.com/nkloc" target="_blank"><img src="@/assets/github.svg" alt="Github KLOC Nicolas"></a>
            <a href="https://www.malt.fr/profile/nicolaskloc" target="_blank"><img src="@/assets/malt.svg" alt="Malt KLOC Nicolas"></a>
        </div>
        <h2 class="copyright desktop-only">KLOC Nicolas <br> © 2022</h2>
    </header>
</template>

<style lang="stylus" scoped>
@import '../css/variables'
.copyright
    text-align center
    font-weight medium
    font-size 12px
    line-height 18px
header
    position fixed
    width 100px
    border-right 1px solid #EAEAEA
    height 90vh
    display flex
    flex-direction column
    align-items center
    justify-content space-between
    padding 5vh 0
    @media tablet
        position static
        width 90vw
        height 80px
        border-right none
        border-top 1px solid #EAEAEA
        flex-direction row
        padding 0 5vw
        
    img
        width 25px
        cursor pointer
        @media tablet
            width 20px
    div
        display flex
        flex-direction column
        align-items center
        @media tablet
            flex-direction row
            order 3
        img
            color $gris-color
            width 20px
            height auto
            margin-top 20px
            @media tablet
                margin-top 0
                padding-left 25px
                width 25px
</style>
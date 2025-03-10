<template>
    <header>
        <nav>
            <ul>
                <li class="ul-left"><img src="@/assets/logo.svg" alt="Logo KLOC Nicolas"></li>
                <div class="ul-right">
                    <a class="button" href="https://fr.linkedin.com/in/n-kloc" target="_blank"><li>Mon Linkedin</li></a>
                    <a class="button" href="https://www.malt.fr/profile/nicolaskloc" target="_blank"><li>Mon Malt</li></a>
                </div>
            </ul>
        </nav>
    </header>
</template>

<style lang="stylus" scoped>
@import '../css/variables'

header
    width: calc(100vw - 96px)
    padding 24px 48px
    border-bottom: 2px solid black
    display: flex
    justify-content: center
    align-items: center
    margin-bottom: 48px
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
        .ul-left
            display flex
            justify-content: center
            align-items: center
            margin-left 0
        .ul-right
            display flex
</style>
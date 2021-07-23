<template>
    <main>
        <nav>
            <ul>
                <li><router-link to="/" :class="{active: this.$route.name === 'Home'}">Accueil</router-link></li>
                <li><router-link to="/projets" :class="{active: this.$route.name === 'Projets'}">Mes projets</router-link></li>
                <li><router-link to="/about" :class="{active: this.$route.name === 'About'}">À propos de moi</router-link></li>
                <li><router-link to="/contact" :class="{active: this.$route.name === 'Contact'}">Me contacter</router-link></li>
            </ul>
        </nav>
        <router-view />
    </main>
</template>

<style lang="stylus" scoped>
@import '../css/variables'
main
    font-size 16px
    line-height 24px
    padding 5vh
    width calc(100vw - 100px)
    height 90vh
    display flex
    flex-direction column
    nav
        margin-bottom 30px
        @media tablet
            width 100%
        ul
            list-style none
            display flex
            @media tablet
                width 100%
                justify-content space-around
            li
                margin-right 30px
                @media tablet
                    margin-right 15px
                    font-size 12px
                cursor pointer
                a
                    color $black-color
                    text-decoration none

.active
    &:after
        content ''
        position relative
        display block
        top 5px
        width 100%
        height 1px
        background-color #212121


</style>
<template>
    <main>
        <nav>
            <ul>
                <li><router-link to="/">Accueil</router-link></li>
                <li><router-link to="/projets">Mes projets</router-link></li>
                <li><router-link to="/about">À propos de moi</router-link></li>
                <li><router-link to="/contact">Me contacter</router-link></li>
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
        ul
            list-style none
            display flex
            li
                margin-right 30px
                cursor pointer
                a
                    color $black-color
                    text-decoration none

</style>
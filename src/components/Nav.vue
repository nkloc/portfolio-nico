<template>
    <main>
        <nav>
            <ul>
                <li><router-link to="/" :class="{'link-properties': true, 'active': this.$route.name === 'Home'}">Accueil</router-link></li>
                <li><router-link to="/projets" :class="{'link-properties': true, 'active': this.$route.name === 'Projets'}">Mes projets</router-link></li>
                <li><router-link to="/about" :class="{'link-properties': true, 'active': this.$route.name === 'About'}">À propos de moi</router-link></li>
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
    margin-left 100px
    width calc(100vw - 100px)
    height 90vh
    display flex
    flex-direction column
    @media tablet
        margin-left 0
        padding 0
        width auto
        padding 2vh
        height auto
        min-height calc(96vh - 80px)
    nav
        margin-bottom 30px
        @media tablet
            width 100%
        ul
            list-style none
            display flex
            @media tablet
                width 100%
                justify-content space-between
            li
                margin-right 30px
                font-weight 500
                @media tablet
                    font-size 14px
                @media mobile
                    margin-right 15px
                    font-size 3vw
                cursor pointer
                a
                    position relative
                    color $black-color
                    text-decoration none

.link-properties:after {
    content: '';
    position: absolute;
    left: 0;
    display: inline-block;
    height: 1em;
    width: 100%;
    border-bottom: 1px $pink-color solid;
    margin-top: 10px;
    opacity: 0;
    -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
    transition: opacity 0.35s, transform 0.35s;
    -webkit-transform: scale(0,1);
    transform: scale(0,1);
}
.link-properties:hover:after, .active:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
}


</style>
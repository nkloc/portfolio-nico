<template>
    <div class="contacts">
        <div class="contact">
            <p class="contact-title blue-content">Email</p>
            <a href="mailto:nicolaskloc@gmail.com" target="_blank">nicolaskloc@gmail.com</a>
        </div>
        <div class="contact">
            <p class="contact-title blue-content">Numéro</p>
            <a href="" target="_blank">07 71 78 87 52</a>
        </div>
    </div>
</template>

<style lang="stylus" scoped>
@import '../css/variables'

.contacts
    display flex
    flex-direction column
    gap 32px

.contact
    display flex
    align-items: center
    border-left 2px solid black
    border-bottom 2px solid black
    width 40%
    font-size 28px
    a
        text-decoration: none
        color $black-color
    @media tablet
        border-bottom none
        width: auto
        font-size 24px

.contact-title
    margin-right 16px
    font-weight 700

</style>
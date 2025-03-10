<template>
  <div class="home">
    <div class="introduction">
      <h1>
        Hello ! Bienvenue sur mon portfolio :)<br> <br>
        Je m'appelle Nicolas et je suis un Product & Service Designer ayant travaillé au sein d'une agence, de startups (notamment Pappers) mais également en tant qu'intrapreneur pour Saint-Gobain et Effy.
      </h1>
      <div class="image-container">
        <img src="@/assets/profile-nicolas.png" alt="Avatar Nicolas KLOC">
      </div>
    </div>
    <section>
      <div class="transition separator">
        <h2>Mes expériences pros</h2>
        <p>001</p>
      </div>
      <Experiences/>
    </section>
    <section>
      <div class="transition separator">
        <h2>Mes projets</h2>
        <p>002</p>
      </div>
      <Projects/>
    </section>
    <section>
      <div class="transition separator">
        <h2>Me contacter</h2>
        <p>003</p>
      </div>
      <Contact/>
    </section>
  </div>
</template>

<style lang="stylus" scoped>
@import '../css/variables'

section 
  margin-bottom 40px

.home
  display flex
  flex-direction column
  justify-content: center
  max-width 1200px
  padding 0 50px
  @media tablet
    padding 50px 25px
    max-width calc(100vw - 50px)

.transition
  display flex
  justify-content: space-between
  font-size 32px
  border-bottom #212121 1px solid
  padding-bottom 16px
  max-width 100%
  h2, p
    font-weight 500
    color $black-color
  @media mobile
      font-size 24px
      padding-bottom: 8px
      width 100%
      max-width 500px

.introduction
  display flex
  justify-content: space-between;
  margin-bottom 48px
  @media tablet
    flex-direction column-reverse
    align-items: center
    gap 24px
  img
    width 250px
    height 250px
    @media tablet
      width 100px
      height 100px

.image-container
  display flex
  justify-content center
  align-items center

h1
  max-width calc(100% - 350px)
  font-family $font-primary
  font-size 40px
  line-height 60px
  color $black-color
  font-weight 400
  @media tablet
    max-width 100vw
    font-size 32px
    line-height 44px
    margin-top 0
    text-align: center
  @media mobile
    font-size 28px
    line-height: 40px
</style>

<script>
import Projects from '../components/projects/Projects.vue';
import Contact from '../components/Contact.vue';
import Experiences from '../components/experiences/Experiences.vue';


export default {
  name: 'Home',
  components: {
    Projects,
    Contact,
    Experiences
  }
}
</script>

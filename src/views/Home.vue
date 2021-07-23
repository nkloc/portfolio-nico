<template>
  <div class="home">
    <h1>
      Hello. <br> Je suis Nicolas. <br>Étudiant et freelance. <br>
      <span>Alternant chez Nomad Education</span>
    </h1>
    <div class="infos">
      <div class="info">
        <h4>Téléphone</h4>
        <p>07 71 78 87 52</p>
      </div>
      <div class="info">
        <h4>Localisation</h4>
        <p>Saint-Leu-La-Forêt</p>
      </div>
      <div class="info">
        <h4>Email</h4>
        <p>nicolaskloc@gmail.com</p>
      </div>
    </div>
    <div class="text">
      <p style="position: absolute; left: 42vw; top: 5vh;" class="spe">#Front-end</p>
      <p style="position: absolute; left: 73vw; top: 30vh;" class="spe">#Design</p>
      <p style="position: absolute; left: 55vw; top: 68vh;" class="spe">#Back-end</p>
      <p style="position: absolute; left: 47vw; top: -2vh">#Javascript</p>
      <p style="position: absolute; left: 55vw; top: 6vh">#Vue.js</p>
      <p style="position: absolute; left: 32vw; top: 13vh">#Intégration responsive</p>
      <p style="position: absolute; left: 79vw; top: 23vh">#Figma</p>
      <p style="position: absolute; left: 67vw; top: 36vh">#UX/UI</p>
      <p style="position: absolute; left: 66vw; top: 70vh">#Go</p>
      <p style="position: absolute; left: 58vw; top: 77vh">#Node</p>
      <p style="position: absolute; left: 65vw; top: 62vh">#Python</p>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
@import '../css/variables'
.home
  display flex
  flex-direction column
  justify-content space-between
  height 100%
  @media tablet
    margin-top 5vh
.text
  @media tablet
    display none
  font-family $font-secondary
  font-size 30px
  line-height 45px
  color $rose-color
  white-space nowrap
  position absolute
  .spe
    color $blue-color
h1
  font-family $font-secondary
  font-size 65px
  line-height 80px
  color $black-color
  font-weight 400
  margin-top 150px
  @media tablet
    font-size 50px
    line-height 60px
    margin-top 0
    margin-bottom 30px
  span
    color $rose-color

.infos
  display flex
  @media tablet
    width 100%
    flex-direction column

  .info
    display flex
    flex-direction column
    color $black-color
    margin-right 50px 
    height 50px
    justify-content space-between
    @media tablet
      margin-right 0
      margin-top 15px
    h4
      font-size 18px
      font-weight 700
    p
      font-size 14px
      font-weight 400
</style>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
}
</script>

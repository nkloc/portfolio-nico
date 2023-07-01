<template>
  <div class="home">
    <h1>
      Hello.
      <br> Bienvenue sur mon portfolio.
      <br> Je suis à la recherche de <br class="desktop-only"> <span>nouvelles opportunités</span> pour <span>Octobre 2023.</span>
    </h1>
    <div class="infos">
      <div class="info">
        <h4>Téléphone</h4>
        <p>07 71 78 87 52</p>
      </div>
      <div class="info">
        <h4>Localisation</h4>
        <p>Saint-Leu-La-Forêt, 95320</p>
      </div>
      <div class="info">
        <h4>Email</h4>
        <p>nicolaskloc@gmail.com</p>
      </div>
    </div>
    <div class="text">
      <p style="position: absolute; left: 42vw; top: 5vh;" class="spe">#Programmation</p>
      <p style="position: absolute; left: 73vw; top: 30vh;" class="spe">#Design</p>
      <p style="position: absolute; left: 55vw; top: 69vh;" class="spe">#Gestion de projet</p>
      <p style="position: absolute; left: 47vw; top: -2vh">#Javascript</p>
      <p style="position: absolute; left: 55vw; top: 6vh">#Airtable</p>
      <p style="position: absolute; left: 35vw; top: 13vh">#MongoDB</p>
      <p style="position: absolute; left: 79vw; top: 23vh">#Figma</p>
      <p style="position: absolute; left: 67vw; top: 36vh">#UX/UI</p>
      <p style="position: absolute; left: 63vw; top: 26vh">#UX Research</p>
      <p style="position: absolute; left: 68vw; top: 75vh">#Agilité</p>
      <p style="position: absolute; left: 53vw; top: 77vh">#Management</p>
      <p style="position: absolute; left: 63vw; top: 63vh">#Miro</p>
      <p style="position: absolute; left: 52vw; top: 62vh">#Notion</p>
    </div>
    <div>
      
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
  color $pink-color
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
    font-size 40px
    line-height 55px
    margin-top 0
    margin-bottom 30px
  span 
    color $blue-color

.infos
  display flex
  align-items flex-end
  height 100%
  @media tablet
    width 100%
    flex-direction column
    align-items flex-start

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

export default {
  name: 'Home',
}
</script>

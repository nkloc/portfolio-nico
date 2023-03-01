<template>
  <div class="about">
    <h1 class="title-component">À propos de moi</h1>
    <div class="text-container">
      <p>Je suis actuellement étudiant en 5ème année à la <span class="keyword">Web School Factory</span>, où je prépare le diplôme <span class="keyword">Management de l'innovation numérique</span>. Je travaille en alternance en tant que <span class="keyword">Product Manager</span> et <span class="keyword">Service Designer</span> au <span class="keyword">Web School Studio</span>, une agence spécialisée dans l'expérience utilisateur.</p>
      <p>En 2023, je recevrai mon double diplôme de la <span class="keyword">Web School Factory</span> ainsi que de <span class="keyword">Paris Dauphine PSL</span>, où je suis inscrit au programme DU Intraprenariat et transformation numérique. 2023 sera donc une étape importante dans mon parcours professionnel, marquant la fin de mes études et le début de ma carrière professionnelle.</p>
      <p>Passionné par <span class="keyword">l'innovation</span> et la création de solutions numériques qui améliorent la vie des utilisateurs, mes expériences en tant que <span class="keyword">Product Manager</span> et <span class="keyword">Service Designer</span> m'ont permis de développer des compétences en gestion de projets, <span> en conception de produits / services centrés sur l'Utilisateur </span> et en collaboration avec des équipes interdisciplinaires. </p>
      <p>Je suis constamment à la recherche de nouveaux défis et d'opportunités d'apprentissage pour continuer à développer mes compétences et mes connaissances dans le domaine de <span class="keyword">l'innovation numérique</span>.</p>
    </div>
    <section class="container">
      <a href="@/assets/CV-FR-FEV23.pdf" download="CV_KLOC_Nicolas">
        <article class="cv">
          <div>
            <p>Curriculum Vitae</p>
            <img src="@/assets/cv.png" alt="">
          </div>
          <p>Télécharger mon CV</p>
        </article>
      </a>
      <a href="https://www.linkedin.com/in/n-kloc/" target="_blank">
        <article class="in">
          <div>
            <p>LinkedIn</p>
            <img src="@/assets/linkedin.png" alt="">
          </div>
          <p>Pour me contacter</p>
        </article>
      </a>
      <a href="https://www.malt.fr/profile/nicolaskloc" target="_blank">
        <article class="malt">
          <div>
            <p>Malt</p>
            <img src="@/assets/malt.png" alt="">
          </div>
          <p>Un projet de freelance ?</p>
        </article>
      </a>
    </section>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style lang="stylus" scoped>
@import '../css/variables'

a
  text-decoration none
  color black

.about
  display flex
  flex-direction column
  height 100%
  @media tablet
    margin: 0 20px
    margin-top 5vh
  @media mobile
    margin: 0 10px

section
  display flex
  flex-wrap wrap
  width 100%
  @media tablet
    align-items center
  article
    margin-right 50px
    margin-bottom 50px
    @media tablet
      margin-right 0
      margin-bottom 25px

.text-container
  display: flex
  flex-direction: column
  gap 16px
  font-size 20px
  font-weight 400
  line-height 30px
  margin-bottom 50px
  width 80%
  span
    font-weight 700
    color: $blue-color
  @media tablet
    width auto
    justify-content: center
    margin-bottom 25px
  @media mobile
    font-size 16px
    line-height 24px

article
  display flex
  flex-direction column
  padding 24px
  width: 240px;
  justify-content space-around
  border: 1px solid rgba(0, 0, 0, 0.15)
  border-radius 16px
  gap 16px
  cursor pointer
  &:hover
    background-color: rgba(0, 0, 0, 0.05)
  div
    display flex
    align-items center
    justify-content: space-between
    gap 16px
    p
      font-weight bold
      font-size 24px
      line-height 36px
      max-width 250px
      text-align left
  img
    height 30px
  @media tablet
    max-width 500px
    margin-bottom 30px

</style>
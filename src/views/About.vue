<template>
  <div class="about">
    <h1 class="title-component">À propos de moi</h1>
    <div class="text-container">
      <p>Diplômé de la Web School Factory avec un double diplôme de Paris Dauphine PSL en <span class="keyword">Management de l'innovation numérique</span> et <span class="keyword">DU Intraprenariat et transformation numérique</span>, je suis actuellement à la recherche d'opportunités professionnelles dans le domaine de la <span class="keyword">gestion de produits</span>.</p>
      <p>Mon parcours académique et mes expériences en tant que <span class="keyword">Product Manager</span> et <span class="keyword">Service Designer</span> au sein du <span class="keyword">Web School Studio</span>, une agence spécialisée dans l'<span class="keyword">expérience utilisateur</span>, m'ont permis de développer des compétences approfondies en <span class="keyword">gestion de projets</span>, en <span class="keyword">conception de produits</span> et services centrés sur l'utilisateur, ainsi qu'en <span class="keyword">collaboration</span> avec des équipes interdisciplinaires.</p>
      <p>Fier de mes réalisations académiques, 2023 marque pour moi l'aboutissement de mes études et le début de ma carrière professionnelle. Passionné par l'<span class="keyword">innovation</span> et déterminé à créer des solutions numériques impactantes pour améliorer la vie des utilisateurs, je suis à la recherche de nouveaux défis stimulants.</p>
      <p>Ayant à cœur de contribuer à la création de produits et services novateurs qui apportent une réelle valeur à la société, je suis ouvert aux opportunités professionnelles qui me permettront de mettre en pratique mes compétences et de continuer à apprendre dans le domaine passionnant de l'<span class="keyword">innovation numérique</span>. Mon engagement envers l'<span class="keyword">excellence</span> et ma soif constante d'apprentissage font de moi un professionnel déterminé et prêt à relever les défis du monde professionnel.</p>

    </div>
    <section class="container">
      <router-link to="/cv" target="_blank">
        <article class="cv">
          <div>
            <p>Curriculum Vitae</p>
            <img src="@/assets/cv.png" alt="">
          </div>
          <p>Voir mon CV</p>
        </article>
      </router-link>
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
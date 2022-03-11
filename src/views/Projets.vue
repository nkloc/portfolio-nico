<template>
  <div class="projets">
    <h1 class="title-component">Projets récents</h1>
    <section>
      <Project
        v-for="project in projects"
        :key="project.id"
        :tags="project.tags"
        :title="project.title"
        :description="project.description"
        :path="project.path"
        :year="project.year"
        :ref="projects"
      />
    </section>
  </div>
</template>

<style lang="stylus" scoped>
@import '../css/variables'

section
  display flex
  flex-wrap wrap
  width 100%
  @media tablet
    flex-wrap nowrap
    flex-direction column
    align-items center
  article
    margin-right 50px
    margin-bottom 50px
    @media tablet
      margin-right 0
</style>


<script>
import Project from '../components/projects/Project.vue';
export default {
  components: {
    Project,
  },
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "Nomad Education",
          path: "Nomad",
          tags: ["Design", "Frontend", "Backend"],
          description:
            "L’application de révision ultime pour réussir sa scolarité.",
          year: "2021",
        },
        {
          id: 2,
          title: "Bee",
          path: "Bee",
          tags: ["Design"],
          description:
            "Rendre la collaboration à distance plus efficace grâce à la réalité virtuelle.",
          year: "2020",
        },
        {
          id: 3,
          title: "Pappers",
          path: "Pappers",
          tags: ["Design", "Frontend", "Backend"],
          description:
            "Toute l’information des entreprises, gratuite, complète, intelligente.",
          year: "2019",
        },
        {
          id: 4,
          title: "Coover",
          path: "Coover",
          tags: ["Design", "Frontend"],
          description:
            "La plateforme d’assurance des entreprises et des indépendants.",
          year: "2019",
        },
        {
          id: 5,
          title: "Garden",
          path: "Garden",
          tags: ["Design"],
          description:
            "Vous souhaitez rendre vos voyages quotidiens plus productifs ? Cette application de culture G est faite pour vous !",
          year: "2020",
        },
        {
          id: 6,
          title: "Caf'Fit",
          path: "Caffit",
          tags: ["Design"],
          description:
            "Le café des sportifs, à proximité des salles de sport !",
          year: "2019",
        },
      ],
    };
  },
};
</script>
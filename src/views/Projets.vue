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
      margin-bottom 25px
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
          title: "Lab by CB x System U",
          tags: ["Design", "Management"],
          description: "UX Research pour System U sur la mise en place de nouveaux parcours clients, plus autonomes.",
          year: "2023",
        },
        {
          id: 2,
          title: "Lab by CB x ARKEA",
          tags: ["Design", "Management"],
          description: "UX Research pour ARKEA sur l'accompagnement bancaire des clients pro (Tier 2 et 3).",
          year: "2023",
        },
        {
          id: 3,
          title: "Effy",
          tags: ["Design", "Management"],
          description: "Projet intrapreneurial autour du parcours client.",
          year: "2023",
        },
        {
          id: 4,
          title: "Stellantis",
          tags: ["Design", "Management"],
          description:
            "UX Research pour Stellantis sur le sujet du Métavers.",
          year: "2023",
        },
        {
          id: 5,
          title: "RATP",
          tags: ["Design", "Management"],
          description:
            "UX Research autour de l'appropriation et de la logistique des tablettes à la RATP.",
          year: "2022",
        },
        {
          id: 6,
          title: "Saint-Gobain",
          tags: ["Design", "Management"],
          description:
            "Projet intrapreneurial sur la mise en place d'une Business Solution Platform pour Saint-Gobain Sekurit.",
          year: "2022",
        },
        {
          id: 7,
          title: "Galileo Global Education x Workday",
          tags: ["Design", "Management"],
          description:
            "UX Research autour de la résolution de problèmes liés à Workday pour Galileo Global Education.",
          year: "2022",
        },
        {
          id: 8,
          title: "Nomad Education",
          tags: ["Design", "Front-end", "Back-end"],
          description:
            "L’application de révision ultime pour réussir sa scolarité.",
          year: "2022",
        },
        {
          id: 9,
          title: "Bee",
          tags: ["Design", "Management"],
          description:
            "Rendre la collaboration à distance plus efficace grâce à la réalité virtuelle.",
          year: "2020",
        },
        {
          id: 10,
          title: "Pappers",
          tags: ["Design", "Front-end", "Back-end"],
          description:
            "Réalisation des premiers wireframes et premières maquettes puis développement front pour le MVP / v1 de Pappers.",
          year: "2019",
        },
        {
          id: 11,
          title: "Coover",
          tags: ["Design", "Front-end"],
          description:
            "La plateforme d’assurance des entreprises et des indépendants.",
          year: "2019",
        },
        {
          id: 12,
          title: "Garden",
          tags: ["Design"],
          description:
            "L'application mobile pour développer sa culture générale.",
          year: "2020",
        },
        {
          id: 13,
          title: "Caf'Fit",
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
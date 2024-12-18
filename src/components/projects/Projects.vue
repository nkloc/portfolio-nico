<template>
  <div class="projets">
    <section>
      <Project
        v-for="project in projects"
        :key="project.id"
        :tags="project.tags"
        :backgroundColor="project.backgroundColor"
        :title="project.title"
        :description="project.description"
        :path="project.path"
        :imageAlt="project.alt"
        :ref="projects"
      />
    </section>
  </div>
</template>

<style lang="stylus" scoped>
@import '../../css/variables.styl'

section
  display flex
  flex-direction: column
  width 100%
</style>


<script>
import Project from './Project.vue';
export default {
  components: {
    Project,
  },
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "Pappers",
          tags: ["UX/UI", "Front-end", "Freelance"],
          description: "Design et développement en Vue.js d’une plateforme regroupant toute l'information des entreprises.",
          backgroundColor: "#0D46A8",
          path: "pappers",
          alt: "Image de Pappers",
          link: "https://www.pappers.fr/",
        },
        {
          id: 2,
          title: "Coover",
          tags: ["UX/UI", "Front-end", "Freelance"],
          description: "Refonte du parcours de souscription. Création de maquettes sur Figma et développement en Vue.js.",
          backgroundColor: "#3152E8",
          path: "coover",
          alt: "Image de Coover",
          link: "https://www.app.coover.fr/",
        },
        {
          id: 3,
          title: "Nomad Education",
          tags: ["Product Design", "Full-stack"],
          description: "Design et développement d’une plateforme de réussite scolaire.",
          backgroundColor: "#FF6201",
          path: "nomad",
          alt: "Image de Nomad Education",
          link: "https://www.nomadeducation.fr/",
        },
        {
          id: 4,
          title: "Bee.VR",
          tags: ["Entreprenariat"],
          description: "Création d’une fausse startup dans le cadre d’un projet étudiant.",
          backgroundColor: "#FEB000",
          path: "bee",
          alt: "Image de Bee.VR",
        },
        {
          id: 5,
          title: "Odissey",
          tags: ["Product Design", "Front-end", "Freelance"],
          description: "Design et développement d’un site vitrine et de plaquettes commerciales pour un acteur de sécurité privée.",
          backgroundColor: "#000000",
          path: "odissey",
          alt: "Image de Odissey",
          link: "https://odissey-securite-privee.netlify.app/",
        },
        {
          id: 6,
          title: "Saint-Gobain",
          tags: ["Intraprenariat", "Product Management", "Design Thinking"],
          description: "Comment devenir l’Amazon du vitrage ?",
          backgroundColor: "#20499B",
          path: "saintgobain",
          alt: "Image de Saint-Gobain",
        },
        {
          id: 7,
          title: "RATP",
          tags: ["Agence de conseil", "Service Design", "Design Thinking"],
          description: "Faire adopter à 100% les tablettes par les agents RATP.",
          backgroundColor: "#15AC95",
          path: "ratp",
          alt: "Image de RATP",
        },
        {
          id: 8,
          title: "Galileo Global Education",
          tags: ["Agence de conseil", "Service Design", "Design Thinking"],
          description: "Améliorer les usages internes de Workday.",
          backgroundColor: "#01B5E8",
          path: "gge",
          alt: "Image de Galileo Global Education",
        },
        {
          id: 9,
          title: "Stellantis",
          tags: ["Agence de conseil", "Service Design", "Design Thinking"],
          description: "L'exploration de l’avenir de Stellantis dans le Metaverse et d'une possible 'raison d'être' dans ce dernier.",
          backgroundColor: "#243882",
          path: "stellantis",
          alt: "Image de Stellantis",
        },
        {
          id: 10,
          title: "Système U",
          tags: ["Agence de conseil", "Service Design", "Design Thinking"],
          description: "Création de parcours clients autonomes end-to-end, en ligne et en magasin, adaptés à différentes typologies d'achats.",
          backgroundColor: "#54BBAB",
          path: "systemeu",
          alt: "Image de Système U",
        },
        {
          id: 11,
          title: "Crédit Mutuel Arkéa",
          tags: ["Agence de conseil", "Service Design", "Design Thinking"],
          description: "Création de parcours clients multi-canaux, adaptés aux besoins spécifiques.",
          backgroundColor: "#DA291C",
          path: "arkea",
          alt: "Image de Arkéa",
        },{
          id: 12,
          title: "Effy",
          tags: ["Intraprenariat", "Product Management", "Design Thinking"],
          description: "Comment gagner l’engagement du particulier et du professionnel ?",
          backgroundColor: "#003250",
          path: "effy",
          alt: "Image de Effy",
        },
      ],
    };
  },
};
</script>
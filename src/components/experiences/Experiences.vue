<template>
    <section class="experiences">
      <experience
        v-for="experience in experiences"
        :key="experience.id"
        :jobTitle="experience.jobTitle"
        :company="experience.company"
        :dateRange="experience.dateRange"
        :path="experience.path"
        :imageAlt="experience.alt"
        :ref="experiences"
      />
    </section>
</template>

<script>
import Experience from './Experience.vue';
export default {
  components: {
    Experience,
  },
  data() {
    return {
      experiences: [
        {
          id: 1,
          jobTitle: "Product Designer",
          company: "Freelance",
          dateRange: "Depuis 2019",
          path: "freelance",
          alt: "Logo Nicolas KLOC"
        },
        {
          id: 2,
          jobTitle: "Service Designer",
          company: "Web School Studio",
          dateRange: "2022 - 2023",
          path: "wss",
          alt: "Logo Web School Studio"
        },
        {
          id: 3,
          jobTitle: "Intrapreneur",
          company: "Innovation Factory",
          dateRange: "2022 - 2023",
          path: "if",
          alt: "Logo Innovation Factory"
        },
        {
          id: 4,
          jobTitle: "UX/UI + Fullstack dev",
          company: "Nomad Education",
          dateRange: "2021 - 2022",
          path: "nomad",
          alt: "Logo Nomad Education"
        },
        {
          id: 5,
          jobTitle: "UX/UI + Front dev",
          company: "Coover",
          dateRange: "2020",
          path: "coover",
          alt: "Logo Coover"
        },
        {
          id: 6,
          jobTitle: "UX/UI + Front dev",
          company: "Pappers",
          dateRange: "2020",
          path: "pappers",
          alt: "Logo Pappers"
        },
      ],
    };
  },
};
</script>

<style lang="stylus" scoped>
@import '../../css/variables'

section
  display flex
  width 100%
  flex-wrap wrap
  gap 16px
  @media tablet
    flex-direction: column

</style>

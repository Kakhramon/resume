<template>
  <v-card color="grey lighten-4" light>
    <v-card-text>
      <content-section title="Who am I?">
        I'm a developer born in Uzbekistan and backend developer in InVan!<br />
        I'm interested and skilled in different topics of Information Technology
        including programming, web development, and data science.
      </content-section>
      <content-section v-if="educations" title="Education">
        <v-layout v-for="(education, i) in educations" :key="i">
          <v-flex md4> {{ education.from }} - {{ education.to }} </v-flex>
          <v-flex md8>
            <strong v-if="education.title">{{ education.title }}</strong>
            <div v-if="education.location">
              <i>{{ education.location }}</i>
            </div>
            <div v-if="education.description">
              {{ education.description }}
            </div>
          </v-flex>
        </v-layout>
      </content-section>
      <content-section v-if="skills" title="Skills">
        <v-layout wrap>
          <template v-for="(skill, i) in skills">
            <v-flex v-if="skill.divider" :key="i" md12 xs12 mb-4 />
            <v-flex v-else :key="i" md6 xs12>
              <div class="mr-2 ml-2">
                <div class="align-center">
                  <v-icon v-if="skill.icon" small>
                    {{ skill.icon }}
                  </v-icon>
                  <img
                    v-else
                    width="15"
                    height="15"
                    :src="publicPath(skill.image)"
                    alt=""
                  />
                  {{ skill.title }}
                </div>
                <v-progress-linear
                  class="progress"
                  color="secondary"
                  height="4"
                  :value="skill.value"
                />
              </div>
            </v-flex>
          </template>
        </v-layout>
      </content-section>

      <content-section title="Work samples">
        <div v-for="(work, i) in works" :key="i">
          <v-layout class="my-2">
            <v-flex md6> {{ work.title }} </v-flex>
            <v-flex md6 class="right--text">
              <a
                style="text-decoration: none"
                target="_blank"
                :href="work.link"
                >{{ work.short_name }}</a
              >
            </v-flex>
          </v-layout>
          <hr />
        </div>
        <h3 class="mt-4">And Some Works could not be shown here ...</h3>
      </content-section>
    </v-card-text>
  </v-card>
</template>

<script>
import ContentSection from "@/views/dark-template/content/Section";
export default {
  name: "MainContent",
  components: { ContentSection },
  data: () => ({
    educations: [
      {
        from: "2017",
        to: "2021 (not finished yet)",
        title: "Bachelor's degree, Information Technology",
        location: "TUIT",
        description:
          "Became a member of Tashkent University of Information technologies",
      },
    ],
    skills: [
      {
        title: "JavaScript",
        icon: "mdi-language-javascript",
        value: 88,
      },
      {
        title: "Node js",
        icon: "mdi-nodejs",
        value: 90,
      },
      {
        title: "Fastify",
        value: 92,
        image: "/img/imgs/fastify.jpg",
      },
      {
        title: "Express JS",
        value: 62,
        image: "/img/imgs/express.jpg",
      },
      {
        title: "TypeScript",
        value: 82,
        image: "/img/imgs/typescript.jpg",
      },
      {
        title: "Telegraf js",
        image: "/img/imgs/telegraf.jpg",
        value: 95,
      },
      {
        title: "MongoDB",
        image: "/img/imgs/mongodb.jpg",
        value: 85,
      },
      {
        title: "PostgreSQL",
        image: "/img/imgs/posgress.jpg",
        value: 65,
      },
      {
        title: "Vue.js Framework",
        icon: "mdi-vuejs",
        value: 70,
      },
      {
        title: "Vuetify",
        image: "/img/imgs/vuetify.jpg",
        value: 70,
      },
      {
        title: "Ubuntu Server",
        icon: "mdi-ubuntu",
        value: 70,
      },
      {
        title: "Nginx Server",
        image: "/img/imgs/nginx.jpg",
        value: 70,
      },
      {
        title: "Git",
        icon: "mdi-git",
        value: 67,
      },
      { divider: true },
    ],
    works: [
      {
        title: "Backend of InVan",
        short_name: "InVan POS",
        link: "https://play.google.com/store/apps/details?id=com.qs.anorpos",
      },
      {
        title: "Back Office of InVan",
        short_name: "InVan Back Office",
        link: "http://back-office.invan.uz",
      },
      {
        title: "Backend of RegBooks",
        short_name: "RegBooks App",
        link: "https://play.google.com/store/apps/details?id=uz.rng.regbooks",
      },
      {
        title: "Registon bot",
        short_name: "@rgn_testbot",
        link: "https://t.me/rgn_testbot",
      },
      {
        title: "Imtihon bot",
        short_name: "@Repetitsion_imtihon_bot",
        link: "https://t.me/Repetitsion_imtihon_bot",
      },
      {
        title: "TestMate bot",
        short_name: "@TestMate_Bot",
        link: "https://t.me/TestMate_Bot",
      },
      {
        title: "Backend of Atom Express",
        short_name: "Atom Express App",
        link:
          "https://play.google.com/store/apps/details?id=uz.red.atomexpress",
      },
    ],
  }),
};
</script>

<style scoped>
.progress {
  margin-top: 0.1rem;
}
</style>

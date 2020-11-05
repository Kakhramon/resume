<template>
  <v-card
    color="grey lighten-4"
    light
  >
    <v-card-text>
      <content-section title="Who am I?">
        I'm a developer born in Uzbekistan and android and back-end developer in InVan!<br>
        I'm interested and skilled in different topics of Information Technology
        including programming, web development, and data science.
      </content-section>
      <content-section
        v-if="educations"
        title="Education"
      >
        <v-layout
          v-for="(education, i) in educations"
          :key="i"
        >
          <v-flex md4>
            {{ education.from }} - {{ education.to }}
          </v-flex>
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
      <content-section
        v-if="skills"
        title="Skills"
      >
        <v-layout wrap>
          <template v-for="(skill, i) in skills">
            <v-flex
              v-if="skill.divider"
              :key="i"
              md12
              xs12
              mb-4
            />
            <v-flex
              v-else
              :key="i"
              md6
              xs12
            >
              <div class="mr-2 ml-2">
                <div class="align-center">
                  <v-icon
                    v-if="skill.icon"
                    small
                    :color="skill.color"
                  >
                    {{ skill.icon }}
                  </v-icon>
                  <img
                    v-else
                    width="15"
                    height="15"
                    :src="publicPath(skill.image)"
                    alt=""
                  >
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
        <div
          v-for="(work, i) in works"
          :key="i"
        >
          <v-layout class="my-2">
            <v-flex md6>
              {{ work.title }}
            </v-flex>
            <v-flex
              md6
              class="right--text"
            >
              <a
                style="text-decoration: none"
                target="_blank"
                :href="work.link"
              >{{ work.short_name }}</a>
            </v-flex>
          </v-layout>
          <hr>
        </div>
        <h3 class="mt-4">
          And Some Works could not be shown here ...
        </h3>
      </content-section>
    </v-card-text>
  </v-card>
</template>

<script>
import ContentSection from '@/views/dark-template/content/Section'
export default {
  name      : 'MainContent',
  components: { ContentSection },
  data      : () => ({
    educations: [
      {
        from       : '2018',
        to         : '2022',
        title      : "Bachelor's degree, Information Technology",
        location   : 'TUIT',
        description:
          'Became a member of Tashkent University of Information technologies',
      },
    ],
    skills: [
      {
        title: 'Android',
        icon : 'mdi-android',
        value: 88,
        color: '#4CDD8E',
      },
      {
        title: 'Node js',
        icon : 'mdi-nodejs',
        value: 50,
        color: '#73AB63',
      },
      {
        title: 'Fastify',
        value: 50,
        image: '/img/imgs/fastify.jpg',
      },
      {
        title: 'TypeScript',
        value: 60,
        icon : 'mdi-language-typescript',
        color: '#2F74C0',
      },
      {
        title: 'MongoDB',
        image: '/img/imgs/mongodb.jpg',
        value: 50,
      },
      {
        title: 'Ubuntu Server',
        icon : 'mdi-ubuntu',
        value: 50,
        color: '#D73820',
      },
      {
        title: 'Kotlin',
        value: 90,
        icon : 'mdi-language-kotlin',
        color: '#E07345',
      },
      {
        title: 'Java',
        icon : 'mdi-language-java',
        value: 79,
        color: '#5382A1',
      },
      {
        title: 'Git',
        icon : 'mdi-git',
        value: 67,
        color: '#E84E31',
      },
      {
        title: 'C++',
        icon : 'mdi-language-cpp',
        value: 67,
        color: '#9A6ED2',
      },
      { divider: true },
    ],
    works: [
      {
        title     : 'Pos app',
        short_name: 'InVan POS',
        link      : 'https://play.google.com/store/apps/details?id=com.qs.anorpos',
      },
      {
        title     : 'Invan boss',
        short_name: 'Boss app',
        link      : 'https://play.google.com/store/apps/details?id=uz.inone.bos',
      },
      {
        title     : 'InVan Inventory',
        short_name: 'Inventory management',
        link      :
          'https://play.google.com/store/apps/details?id=uz.invan.invaninventory',
      },
      {
        title     : 'Atom express',
        short_name: 'Food delivery',
        link      :
          'https://play.google.com/store/apps/details?id=uz.red.atomexpress',
      },
    ],
  }),
}
</script>

<style scoped>
.progress {
  margin-top: 0.1rem;
}
</style>

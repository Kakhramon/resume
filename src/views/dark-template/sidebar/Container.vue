<template>
  <v-card
    color="grey darken-3"
    dark
  >
    <v-card-text>
      <avatar />
      <div
        class="text-sm-center mb-4 mt-3"
        itemscope
        itemtype="http://schema.org/Person"
      >
        <h1 itemprop="name">
          Kakhramon
          <span
            class="light-blue--text text--lighten-3"
            itemprop="familyName"
          >Omonov</span>
        </h1>
        <span itemprop="hasOccupation"> Android and back-end Developer </span>
        <div
          style="display: none"
          itemprop="memberOf"
        >
          InVan
        </div>
      </div>

      <sidebar-section :options="sections.info" />
      <sidebar-section :options="sections.socials" />
      <sidebar-section :options="sections.hobbies">
        <template v-slot:item="{ item }">
          <v-chip>
            <v-avatar>
              <v-icon>
                {{ item.icon }}
              </v-icon>
            </v-avatar>
            {{ item.text }}
          </v-chip>
        </template>
      </sidebar-section>
      <sidebar-section :options="sections.languages">
        <template v-slot:items="{ items }">
          <v-container pa-0>
            <v-layout
              wrap
              class="text-xs-center"
            >
              <template v-for="(item, i) in items">
                <v-flex
                  :key="i"
                  md3
                  sm4
                  xs6
                >
                  <v-progress-circular
                    rotate="360"
                    size="65"
                    width="2"
                    :value="item.value"
                    color="white"
                    class="ma-2"
                    itemprop="knowsLanguage"
                  >
                    {{ item.text }}
                  </v-progress-circular>
                </v-flex>
              </template>
            </v-layout>
          </v-container>
        </template>
      </sidebar-section>
    </v-card-text>
  </v-card>
</template>

<script>
import Avatar from '@/views/dark-template/sidebar/Avatar'
import SidebarSection from '@/views/dark-template/sidebar/Section'
export default {
  name      : 'Sidebar',
  components: { SidebarSection, Avatar },
  data () {
    return {
      sections: {
        info: {
          title: 'INFO',
          items: [
            {
              name      : 'Email',
              schema_tag: 'email',
              icon      : 'mdi-email',
              text      : 'qahramonomonov1@gmail.com',
            },
            {
              name      : 'Website',
              schema_tag: 'url',
              icon      : 'mdi-web',
              text      : 'kahero.uz',
              link      : 'https://kahero.uz',
            },
            {
              name      : 'Birth Date',
              schema_tag: 'birthDate',
              icon      : 'mdi-cake-variant',
              text      : '12.16.1999',
            },
            {
              name      : 'Location',
              schema_tag: 'address',
              icon      : 'mdi-map-marker',
              text      : 'Tashkent, Uzbekistan',
            },
          ],
        },
        socials: {
          title: 'SOCIALS',
          items: [
            {
              icon      : 'mdi-github-circle',
              schema_tag: 'url',
              text      : 'github.com/kakhramon',
              link      : 'https://github.com/kakhramon',
            },
            {
              icon      : 'mdi-telegram',
              schema_tag: 'url',
              text      : '@androdevn1',
              link      : 'https://t.me/androdevn1',
            },
            {
              icon      : 'mdi-telegram',
              schema_tag: 'url',
              text      : '@king_in_north',
              link      : 'https://t.me/king_in_north',
            },
          ],
        },
        hobbies: {
          title: 'HOBBIES',
          items: [
            {
              icon: 'mdi-biohazard',
              text: 'Challenges',
            },
            {
              icon: 'mdi-bike',
              text: 'Cycling',
            },
            {
              icon: 'mdi-image-filter-hdr',
              text: 'Nature',
            },
            {
              icon: 'mdi-auto-fix',
              text: 'Hacking Stuffs',
            },
            {
              icon: 'mdi-karate',
              text: 'Sports',
            },
            {
              icon: 'mdi-music',
              text: 'Music',
            },
            {
              icon: 'mdi-chess-queen',
              text: 'Chess',
            },
            {
              icon: 'mdi-android-debug-bridge',
              text: 'Tickling Bugs!',
            },
          ],
        },
        languages: {
          title: 'LANGUAGES',
          items: [
            {
              text      : 'English',
              schema_tag: 'knowsLanguage',
              value     : 70,
            },
            {
              text      : 'Russian',
              schema_tag: 'knowsLanguage',
              value     : 15,
            },
            {
              text      : 'Uzbek',
              schema_tag: 'knowsLanguage',
              value     : 100,
            },
          ],
        },
      },
    }
  },
}
</script>

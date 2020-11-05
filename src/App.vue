<template>
  <v-app>
    <v-content>
      <div
        itemscope
        itemtype="http://schema.org/Person"
      >
        <div
          style="display: none"
          itemprop="name"
        >
          Omonov Kakhramon
        </div>
        <div
          style="display: none"
          itemprop="additionalName"
        >
          Kahero
        </div>
        <div
          style="display: none"
          itemprop="familyName"
        >
          Omonov
        </div>
        <div
          style="display: none"
          itemprop="memberOf"
        >
          InVan
        </div>
        <div
          style="display: none"
          itemprop="telephone"
        >
          +998994958186
        </div>
        <div
          style="display: none"
          itemprop="workLocation"
        >
          Tashkent, Uzbekistan
        </div>
        <div
          style="display: none"
          itemprop="worksFor"
        >
          InVan Pos
        </div>
        <div
          style="display: none"
          itemprop="birthDate"
        >
          <time datetime="1999-05-10">16.12.1999</time>
        </div>
        <div
          style="display: none"
          itemprop="birthPlace"
        >
          Hakkulabad, Namangan, Uzbekistan
        </div>
        <div
          style="display: none"
          itemprop="email"
        >
          qahramonomonov1@gmail.com
        </div>
        <div
          style="display: none"
          itemprop="gender"
          itemtype="http://schema.org/Male"
        >
          Hakkulabad, Namangan, Uzbekistan
        </div>
        <div
          style="display: none"
          itemprop="givenName"
        >
          Kakhramon
        </div>
        <div
          style="display: none"
          itemprop="homeLocation"
        >
          Hakkulabad, Namangan, Uzbekistan
        </div>
        <div
          style="display: none"
          itemprop="knowsLanguage"
        >
          English Uzbek
        </div>
        <div
          style="display: none"
          itemprop="nationality"
        >
          Uzbek
        </div>
        <img
          style="display: none"
          src="https://yusufjon.uz/img/avatar.jpg"
          alt=""
          itemprop="image"
        >
        <div
          style="display: none"
          itemprop="jobTitle"
        >
          Backend developer
        </div>
      </div>
      <dark-template-container />
    </v-content>
  </v-app>
</template>

<script>
import DarkTemplateContainer from '@/views/dark-template/Container'

export default {
  name      : 'App',
  components: { DarkTemplateContainer },
}
</script>

<template>
  <v-app>
    <v-content>
      <div itemscope itemtype="http://schema.org/Person">
        <div style="display: none" itemprop="name">Yusufjon Nazarov</div>
        <div style="display: none" itemprop="additionalName">Joseph</div>
        <div style="display: none" itemprop="familyName">Nazarov</div>
        <div style="display: none" itemprop="memberOf">InVan</div>
        <div style="display: none" itemprop="telephone">+998994056972</div>
        <div style="display: none" itemprop="workLocation">Tashkent, Uzbekistan</div>
        <div style="display: none" itemprop="worksFor">InVan Pos</div>
        <div style="display: none" itemprop="birthDate">
          <time datetime="1999-05-10">10.05.1999</time>
        </div>
        <div style="display: none" itemprop="birthPlace">Khavast, Sirdarya, Uzbekistan</div>
        <div style="display: none" itemprop="email">yusufjonnazarov99gmail.com</div>
        <div style="display: none" itemprop="gender" itemtype="http://schema.org/Male">Khavast, Sirdarya, Uzbekistan</div>
        <div style="display: none" itemprop="givenName">Yusufjon</div>
        <div style="display: none" itemprop="homeLocation">Khavast, Sirdarya, Uzbekistan</div>
        <div style="display: none" itemprop="knowsLanguage">English Uzbek</div>
        <div style="display: none" itemprop="nationality">Uzbek</div>
        <img style="display: none" src="https://yusufjon.uz/img/avatar.jpg" alt="" itemprop="image">
        <div style="display: none" itemprop="jobTitle">Backend developer</div>
      </div>
      <dark-template-container />
    </v-content>
  </v-app>
</template>

<script>
import DarkTemplateContainer from "@/views/dark-template/Container";

export default {
  name: "App",
  components: { DarkTemplateContainer },
};
</script>

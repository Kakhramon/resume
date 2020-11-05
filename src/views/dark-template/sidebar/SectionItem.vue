<template>
  <v-layout
    itemscope
    itemtype="http://schema.org/Person"
  >
    <div
      style="display: none"
      itemprop="name"
    >
      Qahramon Omonov
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
    <v-flex
      v-if="hasIcon"
      xs2
    >
      <v-icon>
        {{ item.icon }}
      </v-icon>
    </v-flex>
    <v-flex
      :xs10="hasIcon"
      :xs12="!hasIcon"
    >
      <div>
        {{ item.name }}
      </div>
      <p>
        <a
          v-if="item.link"
          class="grey--text"
          :href="item.link"
          target="_blank"
          :itemprop="item.schema_tag"
        >
          {{ item.text }}
        </a>
        <span
          v-else
          class="grey--text"
        >
          {{ item.text }}
        </span>
      </p>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name    : 'SidebarSectionItem',
  props   : { item: { type: Object, default: () => {} } },
  computed: {
    hasIcon () {
      return !!this.item.icon
    },
  },
}
</script>

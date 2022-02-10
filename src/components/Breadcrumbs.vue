<template>
  <div v-if="breadcrumbs.length > 1" class="flex items-center">
    <template v-for="link in links" :key="link.id">
      <a class="text-15 leading-snug underline" href="">{{ link.label }}</a>
      <span v-html="delimeter"></span>
    </template>
    <span class="text-15 leading-snug">{{ current.label }}</span>
  </div>
</template>

<script>
import { slice } from "lodash";

export default {
  name: "Breadcrumbs",

  props: {
    breadcrumbs: {
      type: Array,
    },
    delimeter: {
      type: String,
      default: "&nbsp;>&nbsp;",
    },
  },

  computed: {
    links() {
      return slice(this.breadcrumbs, 0, -1);
    },
    current() {
      return slice(this.breadcrumbs, -1)[0];
    },
  },
};
</script>

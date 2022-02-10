<template>
  <div class="flex md:h-screen flex-col lg:flex-row md:overflow-hidden">
    <navbar v-if="!isHome" />
    <div class="w-full bg-sky-200 md:h-full" :class="isHome ? '' : 'pt-12 lg:pt-0 lg:pl-25 '">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  components: {
    Navbar,
  },

  computed: {
    isHome() {
      return this.$route.name === 'Home'
    }
  }
};
</script>

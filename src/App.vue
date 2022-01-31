<template>
  <div class="flex md:h-screen flex-col lg:flex-row md:overflow-hidden">
    <navbar />
    <div class="pt-14 lg:pt-0 lg:pl-25 w-full bg-sky-200 md:h-full">
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
};
</script>

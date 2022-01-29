<template>
  <div class="flex flex-col lg:flex-row">
    <navbar />
    <div class="lg:pl-25 w-full h-screen">
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

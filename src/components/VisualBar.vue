<template>
  <div class="h-5 rounded-full related relative overflow-hidden lg:h-6" :style="{ backgroundColor: bgColor }">
    <div
      class="absolute rounded-full inset-y-0 left-0"
      :style="{ backgroundColor: color, width: calculateWidth() }"
    ></div>
  </div>
</template>

<script>
export default {
  name: "VisualBar",

  props: {
    value: {
      required: true,
    },
    color: {
      default: "#56A198",
    },
    bgColor: {
      default: "#CCE3E0",
    },
  },

  methods: {
    calculateWidth() {
      let ratio = parseInt(this.value) / 100;
      console.log('ratio', ratio)
      if (ratio < 1) {
        return `${parseInt(this.value)}%`;
      } else {
        return "100%";
      }
    },
  },
};
</script>

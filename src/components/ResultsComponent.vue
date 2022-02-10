<template>
  <div class="flex gap-4 mb-5">
    <div
      class="w-6.5 h-15 border-2 rounded-lg relative flex flex-col-reverse justify-between p-0.5 transition"
      :class="hovered !== null && hovered !== i ? 'opacity-40' : ''"
      @mouseenter="handleHover(i)"
      @mouseleave="handleLeave"
      :style="{ borderColor: `rgb(${colors[i]})` }"
      v-for="(result, i) in results"
      :key="result.key"
    >
      <div
        v-for="item in 5"
        :key="item"
        class="h-full max-h-2 last:rounded-t-md first:rounded-b-md"
        :style="{
          backgroundColor:
            item > calculateItems(result.value)
              ? 'transparent'
              : `rgb(${colors[i]})`,
        }"
      ></div>
      <span
        class="absolute top-full left-1/2 transform -translate-x-1/2 text-sm mt-2 leading-snug"
        >{{ result.value }}</span
      >
      <transition name="fade">
        <div
          v-if="hovered !== null && hovered === i"
          class="absolute bottom-full bg-violet-800 rounded-lg rounded-bl-none text-white text-xs leading-tight font-bold px-3 py-2 mb-2 left-1/2"
        >
          {{ result.label }}
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResultsComponent",

  data() {
    return {
      hovered: null,
    };
  },

  props: {
    results: {
      type: Array,
    },
    colors: {
      default: () => [
        "253, 175, 83",
        "86, 161, 152",
        "242, 221, 108",
        "190, 190, 190",
        "224, 113, 113",
        "81, 69, 157",
        "97, 141, 255",
        "52, 89, 183",
      ],
    },
  },

  methods: {
    calculateItems(val) {
      return Math.floor((5 * parseFloat(val)) / 100);
    },
    handleHover(i) {
      console.log("i", i);
      this.hovered = i;
      // this.minValue = this.rating[i];
    },
    // handleLeave: debounce(function () {
    //   console.log("leave");
    //   this.hovered = false;
    // }, 400),
    handleLeave() {
      console.log("leave");
      this.hovered = null;
    },
  },
};
</script>

<template>
  <div
    class="mt-7.5 relative flex flex-col border-t border-indigo-300 w-full pb-1"
  >
    <div class="absolute inset-y-0 pb-1 right-0 left-25 flex gap-6">
      <div
        class="h-full rounded-full bg-opacity-40 w-6 flex-shrink-0 text-center relative"
        :style="{ backgroundColor: generateBgColor(colors[i], 0.3) }"
        v-for="(column, i) in data.values"
        :key="column"
      >
        <span
          class="absolute bottom-full pb-1.5 text-sm leading-snug font-semibold left-1/2 transform -translate-x-1/2"
          >{{ column }}%</span
        >
        <span
          class="text-sm text-vertical transform rotate-180 whitespace-nowrap bottom-1 absolute right-full"
          :class="
            hovered && column < minValue ? 'opacity-80 text-gray-500' : ''
          "
          >{{ data.names[i] }}</span
        >
        <transition name="slide-up">
          <span
            v-if="!hovered || column > minValue"
            class="w-full absolute bottom-0 inset-x-0 rounded-full opacity-80"
            :style="{
              height: `${column}%`,
              backgroundColor: generateBgColor(colors[i]),
            }"
          ></span>
          <span
            v-else
            class="w-full absolute inset-x-0 rounded-full"
            :style="{
              bottom: `${column}%`,
              height: `${setHeight(minValue - column)}px`,
              backgroundColor: generateBgColor(colors[i]),
            }"
          >
            <span class="absolute top-0 transform left-0 -translate-y-full text-sm font-semibold flex items-center">
              <svg
                class="stroke-current h-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 10 12"
              >
                <path stroke-width="2" stroke-linecap="round" d="M5 11V1" />
                <path
                  d="M9 4 5 1 1 4"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              {{ minValue - column }}%
            </span>
          </span>
        </transition>
      </div>
    </div>
    <div
      v-for="(row, i) in heights"
      class="border-b border-indigo-300 flex w-full"
      :style="{ height: `${row}px` }"
      :key="row"
    >
      <div
        class="flex pt-1 gap-1 w-19 border-r border-indigo-300 text-violet-400 hover:text-violet-800 cursor-pointer"
        @mouseenter="handleHover(i)"
        @mouseleave="handleLeave"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-2.5 fill-current"
          v-for="star in 5 - i"
          :key="star"
          viewBox="0 0 10 11"
        >
          <path
            d="M4.143 1.424a1 1 0 0 1 1.714 0l.9 1.495a1 1 0 0 0 .63.458l1.7.394a1 1 0 0 1 .53 1.63L8.473 6.718a1 1 0 0 0-.24.742l.15 1.739a1 1 0 0 1-1.386 1.007l-1.607-.68a1 1 0 0 0-.78 0l-1.607.68a1 1 0 0 1-1.386-1.007l.15-1.739a1 1 0 0 0-.24-.742L.383 5.401a1 1 0 0 1 .53-1.63l1.7-.394a1 1 0 0 0 .63-.458l.9-1.495Z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { values } from "lodash";
export default {
  name: "StarsComponent",

  props: {
    data: {
      required: true,
    },
    rating: {
      default: {
        0: 90,
        1: 80,
        2: 70,
        3: 40,
        4: 15,
        5: 0,
      },
    },
    heightDesktop: {
      default: 200,
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

  data() {
    return {
      hovered: false,
      minValue: null,
    };
  },

  computed: {
    heights() {
      let total = 100;
      let res = [];
      values(this.rating).map((item) => {
        let diff = total - item;
        res.push(diff);
        total = total - diff;
      });
      return res.map((item) => item * 2);
    },
  },

  methods: {
    calcHeight(h) {
      return (100 - h * this.heightDesktop) / 100;
    },
    setHeight(h) {
      console.log("h * this.heightDesktop", (h * this.heightDesktop) / 100);
      return (h * this.heightDesktop) / 100;
    },
    generateBgColor(color, value = 1) {
      return `rgba(${color}, ${value})`;
    },
    handleHover(i) {
      console.log("i", this.rating[i]);
      this.hovered = true;
      this.minValue = this.rating[i];
    },
    // handleLeave: debounce(function () {
    //   console.log("leave");
    //   this.hovered = false;
    // }, 400),
    handleLeave() {
      console.log("leave");
      this.hovered = false;
    },
  },
};
</script>

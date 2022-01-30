<template>
  <div class="relative">
    <slot name="button-content" :click="toggleTooltip">
    </slot>

    <transition name="fade">
      <div class="absolute w-xs bg-indigo-300 bottom-full mb-2 -left-4 py-3.5 px-3 rounded-tl-lg rounded-br-lg" v-if="showTooltip">
        <button @click="toggleTooltip" class="text-gray-500 hover:text-violet-800 transition block ml-auto">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" class="stroke-current w-2.5 h-2.5" viewBox="0 0 12 12">
            <path stroke-linecap="round" stroke-width="2" d="M1 11 11 1M11 11 1 1"/>
          </svg>
        </button>
        <div class="mt-1">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Tooltip",

  data() {
    return {
      showTooltip: false,
    };
  },

  methods: {
    toggleTooltip() {
      this.showTooltip = !this.showTooltip
    }
  }
};
</script>

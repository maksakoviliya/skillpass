<template>
  <div class="flex text-violet-800 gap-1">
    <svg
      class="fill-current w-3.5"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      v-for="star in stars"
      :key="star"
    >
      <path
        d="M7.143 1.424a1 1 0 0 1 1.714 0l1.887 3.136a1 1 0 0 0 .631.458l3.566.826a1 1 0 0 1 .53 1.63l-2.4 2.764a1 1 0 0 0-.241.742l.316 3.646a1 1 0 0 1-1.386 1.007l-3.37-1.428a1 1 0 0 0-.78 0l-3.37 1.428a1 1 0 0 1-1.386-1.007l.316-3.646a1 1 0 0 0-.241-.742l-2.4-2.764a1 1 0 0 1 .53-1.63l3.566-.826a1 1 0 0 0 .631-.458l1.887-3.136Z"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: "RatingComponent",

  props: {
    stars: {
      type: Number,
    },
  },
};
</script>

<template>
  <span>
    <template v-if="value.key === 'visual'">
      <visual-bar
        class="w-full"
        :value="value.value"
        :color="value.color ?? undefined"
        :bg-color="value.bgColor ?? undefined"
      ></visual-bar>
    </template>
    <template v-else-if="value.key === 'date'">
      <span class="max-w-90">
        {{ value.value }}
      </span>
    </template>
    <template v-else-if="value.key === 'title'">
      <span class="min-w-140 block">
        {{ value.value }}
      </span>
    </template>
    <template v-else-if="value.key === 'training_center'">
      <span class="min-w-130 block">
        {{ value.value }}
      </span>
    </template>
    <template v-else-if="value.key === 'duration'">
      <span class="whitespace-nowrap">
        {{ value.value }}
      </span>
    </template>
    <template v-else>
      {{ value.value }}
    </template>
  </span>
</template>

<script>
import VisualBar from "@/components/VisualBar";

export default {
  name: "ResponsiveTableTd",

  components: {
    VisualBar,
  },

  props: {
    value: {
      default: null,
    },
  },
};
</script>

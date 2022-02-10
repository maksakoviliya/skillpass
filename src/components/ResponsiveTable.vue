<template>
  <div>
    <div class="lg:hidden">
      <div
        v-for="row in rowsComputes"
        :key="row.id"
        class="border-b border-indigo-300 mb-3.5"
      >
        <h4 class="text-15 font-semibold mb-3.5">
          {{ row.columns.find((item) => item.key === "title").value }}
        </h4>
        <div
          v-for="column in omitColumns(row.columns)"
          :key="column.key"
          class="mb-2 text-sm md:text-basex"
        >
          <span class="text-gray-500">{{ column.label }}: </span>&nbsp;<span>{{
            column.value
          }}</span>
        </div>
        <div class="mb-3.5 flex items-center">
          <span class="text-gray-500"
            >{{ pickColumns(row.columns)[0].label }}: </span
          >&nbsp;
          <visual-bar
            class="w-full"
            :value="pickColumns(row.columns)[0].value"
            :color="pickColumns(row.columns)[0].color ?? undefined"
            :bg-color="pickColumns(row.columns)[0].bgColor ?? undefined"
          ></visual-bar>
        </div>
      </div>
    </div>
    <div class="hidden lg:block overflow-auto custom-scroll">
      <table class="w-full">
        <thead class="border-b border-indigo-300">
          <tr>
            <th
              class="border-r border-indigo-300 last:border-0 px-2.5 first:pl-0 text-left pb-3 text-sm leading-snug font-normal"
              v-for="heading in headers"
              :key="heading.key"
            >
              {{ heading.label }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in rowsComputes" :key="row.id">
            <td
              class="border-r border-indigo-300 last:border-0 px-2.5 first:pl-0 text-left text-sm py-3 leading-snug font-normal"
              v-for="column in headers"
              :key="column.key"
            >
              <responsive-table-td
                :value="row.columns.find((item) => item.key === column.key)"
              ></responsive-table-td>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { omitBy, pickBy } from "lodash";
import VisualBar from "@/components/VisualBar";
import ResponsiveTableTd from "@/components/ResponsiveTableTd";

export default {
  name: "ResponsiveTable",

  components: {
    VisualBar,
    ResponsiveTableTd,
  },

  props: {
    rows: {
      type: Array,
    },
    showAll: {
      type: Boolean,
      default: false,
    },
    showCount: {
      default: 4,
    },
  },

  computed: {
    rowsComputes() {
      return this.rows.slice(
        0,
        this.showAll ? this.rows.length : this.showCount
      );
    },
    headers() {
      return this.rows[0].columns.map((item) => {
        return {
          label: item.label,
          key: item.key,
        };
      });
    },
  },

  methods: {
    omitColumns(columnsArray, excludedKeys = ["title", "visual"]) {
      return omitBy(columnsArray, (item) => {
        return excludedKeys.includes(item.key);
      });
    },
    pickColumns(columnsArray, keys = ["visual"]) {
      return pickBy(columnsArray, (item) => {
        return keys.includes(item.key);
      });
    },
  },
};
</script>

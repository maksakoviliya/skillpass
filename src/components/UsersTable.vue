<template>
  <div>
    <div class="xl:hidden">
      <div
        v-for="user in users"
        :key="user.id"
        class="mt-5 border-b border-indigo-300"
      >
        <div class="flex items-center gap-4">
          <img
            :src="`/img/${user.avatar}`"
            class="w-9 h-9 object-fill"
            :alt="user.name"
          />
          <div>
            <rating-component :stars="user.rating"></rating-component>
            <div class="text-15 font-bold leading-snug mt-0.5">
              {{ user.name }}
            </div>
          </div>
        </div>
        <div class="mt-5 text-sm leading-tight">{{ user.position }}</div>
        <div class="mt-2 text-sm leading-tight">{{ user.group }}</div>
        <results-component
          class="mt-5 mb-10"
          :results="user.results"
        ></results-component>
      </div>
    </div>
    <div class="hidden xl:block px-6">
      <table class="w-full">
        <thead class="border-b border-indigo-300">
          <tr>
            <th
              class="border-r border-indigo-300 last:border-0 px-2.5 first:pl-0 text-left pb-3 text-sm leading-snug font-normal font-bold"
              v-for="heading in columns"
              :key="heading.key"
            >
              <div class="flex gap-2" v-if="heading.key === 'rating'">
                {{ heading.label }}
                <tooltip content-class="top-full mt-2 right-2 z-10">
                  <template v-slot:button-content="{ click, shown }">
                    <button
                      class="w-5 h-5 flex flex-col items-center justify-center rounded-full border-2 border-violet-800 hover:bg-violet-800 hover:text-white transition"
                      :class="
                        shown ? 'bg-violet-800 text-white' : 'text-violet-800'
                      "
                      @click="click"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="fill-current h-3"
                        viewBox="0 0 9 13"
                      >
                        <path
                          d="M5.647 11.327a1.138 1.138 0 1 1-2.276 0 1.138 1.138 0 0 1 2.276 0Z"
                        />
                        <path
                          fill-rule="evenodd"
                          d="M4.509 1.94c-1.077 0-1.992.904-1.992 2.072a.853.853 0 1 1-1.706 0c0-2.065 1.633-3.78 3.698-3.78s3.698 1.715 3.698 3.78c0 1.628-1.01 3.03-2.449 3.558a.834.834 0 0 0-.326.209c-.065.072-.07.117-.07.134a.853.853 0 0 1-1.707 0c0-1.05.846-1.7 1.516-1.945.764-.28 1.33-1.042 1.33-1.956 0-1.168-.915-2.073-1.992-2.073Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                  </template>

                  <div class="tooltip-content">
                    <div class="flex items-start">
                      <div
                        class="w-22.5 flex flex-shrink-0 items-center gap-1 mt-1"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-2.5"
                          fill="none"
                          viewBox="0 0 10 11"
                        >
                          <path
                            fill="#51459D"
                            d="M4.143 1.424a1 1 0 0 1 1.714 0l.9 1.495a1 1 0 0 0 .63.458l1.7.394a1 1 0 0 1 .53 1.63L8.473 6.718a1 1 0 0 0-.24.742l.15 1.739a1 1 0 0 1-1.386 1.007l-1.607-.68a1 1 0 0 0-.78 0l-1.607.68a1 1 0 0 1-1.386-1.007l.15-1.739a1 1 0 0 0-.24-.742L.383 5.401a1 1 0 0 1 .53-1.63l1.7-.394a1 1 0 0 0 .63-.458l.9-1.495Z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-2.5"
                          fill="none"
                          viewBox="0 0 10 11"
                        >
                          <path
                            fill="#51459D"
                            d="M4.143 1.424a1 1 0 0 1 1.714 0l.9 1.495a1 1 0 0 0 .63.458l1.7.394a1 1 0 0 1 .53 1.63L8.473 6.718a1 1 0 0 0-.24.742l.15 1.739a1 1 0 0 1-1.386 1.007l-1.607-.68a1 1 0 0 0-.78 0l-1.607.68a1 1 0 0 1-1.386-1.007l.15-1.739a1 1 0 0 0-.24-.742L.383 5.401a1 1 0 0 1 .53-1.63l1.7-.394a1 1 0 0 0 .63-.458l.9-1.495Z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-2.5"
                          fill="none"
                          viewBox="0 0 10 11"
                        >
                          <path
                            fill="#51459D"
                            d="M4.143 1.424a1 1 0 0 1 1.714 0l.9 1.495a1 1 0 0 0 .63.458l1.7.394a1 1 0 0 1 .53 1.63L8.473 6.718a1 1 0 0 0-.24.742l.15 1.739a1 1 0 0 1-1.386 1.007l-1.607-.68a1 1 0 0 0-.78 0l-1.607.68a1 1 0 0 1-1.386-1.007l.15-1.739a1 1 0 0 0-.24-.742L.383 5.401a1 1 0 0 1 .53-1.63l1.7-.394a1 1 0 0 0 .63-.458l.9-1.495Z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-2.5"
                          fill="none"
                          viewBox="0 0 10 11"
                        >
                          <path
                            fill="#51459D"
                            d="M4.143 1.424a1 1 0 0 1 1.714 0l.9 1.495a1 1 0 0 0 .63.458l1.7.394a1 1 0 0 1 .53 1.63L8.473 6.718a1 1 0 0 0-.24.742l.15 1.739a1 1 0 0 1-1.386 1.007l-1.607-.68a1 1 0 0 0-.78 0l-1.607.68a1 1 0 0 1-1.386-1.007l.15-1.739a1 1 0 0 0-.24-.742L.383 5.401a1 1 0 0 1 .53-1.63l1.7-.394a1 1 0 0 0 .63-.458l.9-1.495Z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-2.5"
                          fill="none"
                          viewBox="0 0 10 11"
                        >
                          <path
                            fill="#51459D"
                            d="M4.143 1.424a1 1 0 0 1 1.714 0l.9 1.495a1 1 0 0 0 .63.458l1.7.394a1 1 0 0 1 .53 1.63L8.473 6.718a1 1 0 0 0-.24.742l.15 1.739a1 1 0 0 1-1.386 1.007l-1.607-.68a1 1 0 0 0-.78 0l-1.607.68a1 1 0 0 1-1.386-1.007l.15-1.739a1 1 0 0 0-.24-.742L.383 5.401a1 1 0 0 1 .53-1.63l1.7-.394a1 1 0 0 0 .63-.458l.9-1.495Z"
                          />
                        </svg>
                      </div>
                      <span
                        class="text-xs text-black leading-snug font-normal whitespace-nowrap"
                        ><b>Эксперт</b> (90-100)</span
                      >
                    </div>
                    <div class="flex items-start mt-1">
                      <div
                        class="w-22.5 flex flex-shrink-0 items-center gap-1 mt-1"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-2.5"
                          fill="none"
                          viewBox="0 0 10 11"
                        >
                          <path
                            fill="#51459D"
                            d="M4.143 1.424a1 1 0 0 1 1.714 0l.9 1.495a1 1 0 0 0 .63.458l1.7.394a1 1 0 0 1 .53 1.63L8.473 6.718a1 1 0 0 0-.24.742l.15 1.739a1 1 0 0 1-1.386 1.007l-1.607-.68a1 1 0 0 0-.78 0l-1.607.68a1 1 0 0 1-1.386-1.007l.15-1.739a1 1 0 0 0-.24-.742L.383 5.401a1 1 0 0 1 .53-1.63l1.7-.394a1 1 0 0 0 .63-.458l.9-1.495Z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-2.5"
                          fill="none"
                          viewBox="0 0 10 11"
                        >
                          <path
                            fill="#51459D"
                            d="M4.143 1.424a1 1 0 0 1 1.714 0l.9 1.495a1 1 0 0 0 .63.458l1.7.394a1 1 0 0 1 .53 1.63L8.473 6.718a1 1 0 0 0-.24.742l.15 1.739a1 1 0 0 1-1.386 1.007l-1.607-.68a1 1 0 0 0-.78 0l-1.607.68a1 1 0 0 1-1.386-1.007l.15-1.739a1 1 0 0 0-.24-.742L.383 5.401a1 1 0 0 1 .53-1.63l1.7-.394a1 1 0 0 0 .63-.458l.9-1.495Z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-2.5"
                          fill="none"
                          viewBox="0 0 10 11"
                        >
                          <path
                            fill="#51459D"
                            d="M4.143 1.424a1 1 0 0 1 1.714 0l.9 1.495a1 1 0 0 0 .63.458l1.7.394a1 1 0 0 1 .53 1.63L8.473 6.718a1 1 0 0 0-.24.742l.15 1.739a1 1 0 0 1-1.386 1.007l-1.607-.68a1 1 0 0 0-.78 0l-1.607.68a1 1 0 0 1-1.386-1.007l.15-1.739a1 1 0 0 0-.24-.742L.383 5.401a1 1 0 0 1 .53-1.63l1.7-.394a1 1 0 0 0 .63-.458l.9-1.495Z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-2.5"
                          fill="none"
                          viewBox="0 0 10 11"
                        >
                          <path
                            fill="#51459D"
                            d="M4.143 1.424a1 1 0 0 1 1.714 0l.9 1.495a1 1 0 0 0 .63.458l1.7.394a1 1 0 0 1 .53 1.63L8.473 6.718a1 1 0 0 0-.24.742l.15 1.739a1 1 0 0 1-1.386 1.007l-1.607-.68a1 1 0 0 0-.78 0l-1.607.68a1 1 0 0 1-1.386-1.007l.15-1.739a1 1 0 0 0-.24-.742L.383 5.401a1 1 0 0 1 .53-1.63l1.7-.394a1 1 0 0 0 .63-.458l.9-1.495Z"
                          />
                        </svg>
                      </div>
                      <span
                        class="text-xs text-black leading-snug font-normal whitespace-nowrap"
                        ><b>Профессионал</b>(75-90)</span
                      >
                    </div>
                    <div class="flex items-start mt-1">
                      <div
                        class="w-22.5 flex flex-shrink-0 items-center gap-1 mt-1"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-2.5"
                          fill="none"
                          viewBox="0 0 10 11"
                        >
                          <path
                            fill="#51459D"
                            d="M4.143 1.424a1 1 0 0 1 1.714 0l.9 1.495a1 1 0 0 0 .63.458l1.7.394a1 1 0 0 1 .53 1.63L8.473 6.718a1 1 0 0 0-.24.742l.15 1.739a1 1 0 0 1-1.386 1.007l-1.607-.68a1 1 0 0 0-.78 0l-1.607.68a1 1 0 0 1-1.386-1.007l.15-1.739a1 1 0 0 0-.24-.742L.383 5.401a1 1 0 0 1 .53-1.63l1.7-.394a1 1 0 0 0 .63-.458l.9-1.495Z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-2.5"
                          fill="none"
                          viewBox="0 0 10 11"
                        >
                          <path
                            fill="#51459D"
                            d="M4.143 1.424a1 1 0 0 1 1.714 0l.9 1.495a1 1 0 0 0 .63.458l1.7.394a1 1 0 0 1 .53 1.63L8.473 6.718a1 1 0 0 0-.24.742l.15 1.739a1 1 0 0 1-1.386 1.007l-1.607-.68a1 1 0 0 0-.78 0l-1.607.68a1 1 0 0 1-1.386-1.007l.15-1.739a1 1 0 0 0-.24-.742L.383 5.401a1 1 0 0 1 .53-1.63l1.7-.394a1 1 0 0 0 .63-.458l.9-1.495Z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-2.5"
                          fill="none"
                          viewBox="0 0 10 11"
                        >
                          <path
                            fill="#51459D"
                            d="M4.143 1.424a1 1 0 0 1 1.714 0l.9 1.495a1 1 0 0 0 .63.458l1.7.394a1 1 0 0 1 .53 1.63L8.473 6.718a1 1 0 0 0-.24.742l.15 1.739a1 1 0 0 1-1.386 1.007l-1.607-.68a1 1 0 0 0-.78 0l-1.607.68a1 1 0 0 1-1.386-1.007l.15-1.739a1 1 0 0 0-.24-.742L.383 5.401a1 1 0 0 1 .53-1.63l1.7-.394a1 1 0 0 0 .63-.458l.9-1.495Z"
                          />
                        </svg>
                      </div>
                      <span
                        class="text-xs text-black leading-snug font-normal whitespace-nowrap"
                        ><b>Специалист</b>(50-75)</span
                      >
                    </div>
                    <div class="flex items-start mt-1">
                      <div
                        class="w-22.5 flex flex-shrink-0 items-center gap-1 mt-1"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-2.5"
                          fill="none"
                          viewBox="0 0 10 11"
                        >
                          <path
                            fill="#51459D"
                            d="M4.143 1.424a1 1 0 0 1 1.714 0l.9 1.495a1 1 0 0 0 .63.458l1.7.394a1 1 0 0 1 .53 1.63L8.473 6.718a1 1 0 0 0-.24.742l.15 1.739a1 1 0 0 1-1.386 1.007l-1.607-.68a1 1 0 0 0-.78 0l-1.607.68a1 1 0 0 1-1.386-1.007l.15-1.739a1 1 0 0 0-.24-.742L.383 5.401a1 1 0 0 1 .53-1.63l1.7-.394a1 1 0 0 0 .63-.458l.9-1.495Z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-2.5"
                          fill="none"
                          viewBox="0 0 10 11"
                        >
                          <path
                            fill="#51459D"
                            d="M4.143 1.424a1 1 0 0 1 1.714 0l.9 1.495a1 1 0 0 0 .63.458l1.7.394a1 1 0 0 1 .53 1.63L8.473 6.718a1 1 0 0 0-.24.742l.15 1.739a1 1 0 0 1-1.386 1.007l-1.607-.68a1 1 0 0 0-.78 0l-1.607.68a1 1 0 0 1-1.386-1.007l.15-1.739a1 1 0 0 0-.24-.742L.383 5.401a1 1 0 0 1 .53-1.63l1.7-.394a1 1 0 0 0 .63-.458l.9-1.495Z"
                          />
                        </svg>
                      </div>
                      <span
                        class="text-xs text-black leading-snug font-normal whitespace-nowrap"
                        ><b>Новичек</b>(25-50)</span
                      >
                    </div>
                    <div class="flex items-start mt-1">
                      <div
                        class="w-22.5 flex flex-shrink-0 items-center gap-1 mt-1"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-2.5"
                          fill="none"
                          viewBox="0 0 10 11"
                        >
                          <path
                            fill="#51459D"
                            d="M4.143 1.424a1 1 0 0 1 1.714 0l.9 1.495a1 1 0 0 0 .63.458l1.7.394a1 1 0 0 1 .53 1.63L8.473 6.718a1 1 0 0 0-.24.742l.15 1.739a1 1 0 0 1-1.386 1.007l-1.607-.68a1 1 0 0 0-.78 0l-1.607.68a1 1 0 0 1-1.386-1.007l.15-1.739a1 1 0 0 0-.24-.742L.383 5.401a1 1 0 0 1 .53-1.63l1.7-.394a1 1 0 0 0 .63-.458l.9-1.495Z"
                          />
                        </svg>
                      </div>
                      <span
                        class="text-xs text-black leading-snug font-normal whitespace-nowrap"
                        ><b>Стажер</b>(0-25)</span
                      >
                    </div>
                  </div>
                </tooltip>
              </div>
              <template v-else>
                {{ heading.label }}
              </template>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="user in users"
            :key="user.id"
            class="border-b border-indigo-300 last:border-b-0"
            :class="selected.includes(user.id) ? 'bg-indigo-50' : ''"
            @click="toggleSelected(user.id)"
          >
            <td
              class="border-r border-indigo-300 last:border-0 px-2.5 first:pl-0 text-left py-3 leading-snug font-normal"
              v-for="column in columns"
              :key="column.key"
            >
              <template v-if="column.key === 'avatar'">
                <img
                  :src="`/img/${user[column.key]}`"
                  class="w-13.5 h-13.5 block min-w-13.5 object-fill"
                  :alt="user.name"
                />
              </template>
              <template v-else-if="column.key === 'rating'">
                <rating-component
                  class="justify-center"
                  :stars="user.rating"
                ></rating-component>
              </template>
              <template v-else-if="column.key === 'results'">
                <results-component :results="user.results"></results-component>
              </template>
              <template v-else>
                {{ user[column.key] }}
              </template>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import RatingComponent from "@/components/RatingComponent";
import ResultsComponent from "@/components/ResultsComponent";
import Tooltip from "@/components/Tooltip";

export default {
  name: "UsersTable",

  components: {
    RatingComponent,
    ResultsComponent,
    Tooltip,
  },

  data() {
    return {
      selected: [],
    };
  },

  props: {
    users: {
      type: Array,
    },
    columns: {
      type: Array,
      default: () => [
        {
          key: "avatar",
          label: "",
        },
        {
          key: "name",
          label: "ФИО",
        },
        {
          key: "position",
          label: "Должность",
        },
        {
          key: "group",
          label: "Группа",
        },
        {
          key: "results",
          label: "Результаты",
        },
        {
          key: "rating",
          label: "Оценка",
        },
      ],
    },
  },

  methods: {
    toggleSelected(id) {
      if (this.selected.includes(id)) {
        this.selected.splice(
          this.selected.findIndex((item) => item === id),
          1
        );
      } else {
        this.selected.push(id);
      }
      this.$emit('select', this.selected)
    },
  },
};
</script>

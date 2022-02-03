<template>
  <div>
    <div class="flex flex-col xl:flex-row items-center gap-4">
      <div class="relative w-full input-group xl:mr-auto">
        <input
          type="text"
          placeholder="Поиск"
          class="outline-none pl-4 pr-16 text-sm xl:text-15 text-gray-500 leading-snug w-full placeholder-gray-500 border focus:border-violet-500 transition bg-sky-300 border-indigo-300 rounded-xl h-9"
        />
        <svg
          fill="none"
          class="fill-current w-4 absolute top-1/2 right-0 transform -translate-y-1/2 mr-3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 15"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.016 11.21a6.57 6.57 0 0 0 8.744.487l3.36 3.09a.73.73 0 0 0 1.032-1.033l-3.36-3.089a6.566 6.566 0 0 0-.487-8.742 6.57 6.57 0 0 0-9.29 0 6.565 6.565 0 0 0 0 9.287Zm1.032-8.255a5.106 5.106 0 0 0 0 7.223 5.11 5.11 0 0 0 7.22.004l.005-.004.004-.005a5.106 5.106 0 0 0-.004-7.218 5.11 5.11 0 0 0-7.225 0Z"
          />
        </svg>
      </div>
      <div class="relative w-full">
        <VueMultiselect
          v-model="selected"
          class="group cursor-pointer"
          :class="selected && selected.length ? 'has-values' : ''"
          :show-labels="false"
          placeholder="Группа"
          :searchable="false"
          :options="options"
        >
          <template v-slot:caret="{ toggle }">
            <div
              @mousedown.prevent.stop="toggle"
              class="w-4 h-4 flex flex-col items-center justify-center text-gray-300 group-hover:text-violet-800 absolute top-1/2 right-0 transform -translate-y-1/2 mr-3.5"
              :class="
                selected && selected.length
                  ? 'text-violet-800'
                  : 'text-gray-300'
              "
            >
              <svg
                class="h-2 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 11 7"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.262 1.014a.829.829 0 0 1 0 1.172l-4.42 4.419a.829.829 0 0 1-1.17 0l-4.42-4.42a.829.829 0 1 1 1.172-1.17l3.833 3.832L9.09 1.014a.829.829 0 0 1 1.172 0Z"
                />
              </svg>
            </div>
          </template>
          <template v-slot:singleLabel="{ option }"
            ><span class="text-violet-800 font-bold">{{ option }}</span>
          </template>
        </VueMultiselect>
      </div>
      <div class="relative w-full">
        <VueMultiselect
          v-model="position"
          class="group cursor-pointer multiple"
          :class="position && position.length ? 'has-values' : ''"
          multiple
          :show-labels="false"
          placeholder="Профессия"
          :close-on-select="false"
          :searchable="false"
          :options="positions"
        >
          <template v-slot:caret="{ toggle }">
            <div
              @mousedown.prevent.stop="toggle"
              class="w-4 h-4 flex flex-col items-center justify-center group-hover:text-violet-800 absolute top-1/2 right-0 transform -translate-y-1/2 mr-3.5"
              :class="
                position && position.length
                  ? 'text-violet-800'
                  : 'text-gray-300'
              "
            >
              <svg
                class="h-2 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 11 7"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.262 1.014a.829.829 0 0 1 0 1.172l-4.42 4.419a.829.829 0 0 1-1.17 0l-4.42-4.42a.829.829 0 1 1 1.172-1.17l3.833 3.832L9.09 1.014a.829.829 0 0 1 1.172 0Z"
                />
              </svg>
            </div>
          </template>
          <template v-slot:selection="{ values }"
            ><span
              class="multiselect__single font-bold text-violet-800"
              v-if="values.length"
              >Выбрано: {{ values.length }}</span
            ></template
          >
          <template v-slot:option="{ option }">
            <div class="flex gap-2">
              <svg
                v-if="position && position.includes(option)"
                width="19"
                class="flex-shrink-0"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.48334 2.25954C3.33891 2.38744 2.42286 3.29069 2.29045 4.4228C1.93476 7.46395 1.93476 10.5362 2.29045 13.5773C2.42286 14.7094 3.33891 15.6127 4.48334 15.7406C7.46017 16.0733 10.5398 16.0733 13.5166 15.7406C14.6611 15.6127 15.5771 14.7094 15.7095 13.5773C15.9651 11.3922 16.037 9.19098 15.9253 6.9968C15.9224 6.94014 15.9436 6.88487 15.9837 6.84475L17.0225 5.80597C17.1427 5.68574 17.3482 5.76092 17.3609 5.93048C17.557 8.5354 17.5031 11.1544 17.1994 13.7516C16.9845 15.5885 15.5096 17.0272 13.6832 17.2313C10.5957 17.5764 7.40429 17.5764 4.31673 17.2313C2.49035 17.0272 1.01545 15.5885 0.800605 13.7516C0.431374 10.5947 0.431374 7.40547 0.800605 4.24855C1.01545 2.41159 2.49035 0.972944 4.31673 0.768819C7.40429 0.42374 10.5957 0.42374 13.6832 0.768819C14.3265 0.840713 14.9261 1.06574 15.4425 1.40738C15.5441 1.4746 15.5542 1.61744 15.468 1.70359L14.6652 2.50647C14.5995 2.57215 14.4976 2.58319 14.4158 2.53933C14.1423 2.39283 13.8385 2.29551 13.5166 2.25954C10.5398 1.92683 7.46017 1.92683 4.48334 2.25954Z"
                  fill="#383549"
                />
                <path
                  d="M18.0303 3.0304C18.3232 2.73751 18.3232 2.26263 18.0303 1.96974C17.7374 1.67685 17.2625 1.67685 16.9696 1.96974L8.49997 10.4394L6.0303 7.96974C5.73741 7.67685 5.26253 7.67685 4.96964 7.96974C4.67675 8.26263 4.67675 8.7375 4.96964 9.0304L7.96964 12.0304C8.26253 12.3233 8.73741 12.3233 9.0303 12.0304L18.0303 3.0304Z"
                  fill="#383549"
                />
              </svg>
              <svg
                v-else
                width="18"
                height="18"
                class="flex-shrink-0"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.31649 0.768575C7.40404 0.423496 10.5954 0.423496 13.683 0.768575C15.5094 0.9727 16.9843 2.41134 17.1991 4.2483C17.5683 7.40523 17.5683 10.5944 17.1991 13.7513C16.9843 15.5883 15.5094 17.0269 13.683 17.2311C10.5954 17.5761 7.40404 17.5761 4.31649 17.2311C2.49011 17.0269 1.01521 15.5883 0.80036 13.7513C0.43113 10.5944 0.43113 7.40523 0.80036 4.2483C1.01521 2.41134 2.49011 0.9727 4.31649 0.768575ZM13.5164 2.25929C10.5396 1.92659 7.45992 1.92659 4.4831 2.25929C3.33867 2.3872 2.42262 3.29045 2.29021 4.42255C1.93451 7.4637 1.93451 10.5359 2.29021 13.5771C2.42262 14.7092 3.33867 15.6124 4.4831 15.7404C7.45993 16.0731 10.5396 16.0731 13.5164 15.7404C14.6608 15.6124 15.5769 14.7092 15.7093 13.5771C16.065 10.5359 16.065 7.4637 15.7093 4.42256C15.5769 3.29045 14.6608 2.3872 13.5164 2.25929Z"
                  fill="#DCE2F1"
                />
              </svg>
              <span>{{ option }}</span>
            </div>
          </template>
        </VueMultiselect>
      </div>
      <button
        class="px-2 xl:px-4 py-2 bg-indigo-200 rounded-xl mt-4 hover:bg-violet-800 transition hover:text-white text-sm flex items-center justify-center gap-3.5 w-158 xl:w-170 whitespace-nowrap xl:mt-0"
        @click="showFilters = !showFilters"
      >
        Умный фильтр
        <svg
          fill="none"
          class="w-2.5 stroke-current"
          v-if="showFilters"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 10 10"
        >
          <path d="m1 9 8-8M9 9 1 1" xstroke-linecap="round" />
        </svg>
      </button>
    </div>
    <div class="flex flex-wrap gap-1.5 mt-7.5" v-if="showFilters">
      <div
        v-for="item in filters"
        :key="item.label"
        class="h-9 leading-9 whitespace-nowrap overflow-hidden max-w-full px-4 rounded-full flex items-center gap-2"
        :class="
          item.type === 'removable'
            ? 'bg-violet-800 text-white'
            : 'bg-indigo-200'
        "
      >
        {{ item.label }}
        <button v-if="item.type === 'removable'" class="w-4 h-4 -mr-2">
          <svg
            fill="none"
            class="w-2 stroke-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 10 10"
          >
            <path d="m1 9 8-8M9 9 1 1" stroke-linecap="round" />
          </svg>
        </button>
      </div>
      <div class="flex flex-col mt-6 xl:flex-row xl:gap-4 xl:items-center xl:justify-between xl:w-full">
        <div class="flex items-center gap-1">
          <span class="leading-tight">Баллы по компетенции:</span>
          <input
              type="text"
              placeholder="от 0"
              class="outline-none pl-2 max-w-18 pr-2 text-sm xl:text-15 text-gray-500 leading-snug w-full placeholder-gray-500 border focus:border-violet-500 transition bg-sky-300 border-indigo-300 rounded-xl h-9"
          />
          <input
              type="text"
              placeholder="до 100"
              class="outline-none pl-2 max-w-18 pr-2 text-sm xl:text-15 text-gray-500 leading-snug w-full placeholder-gray-500 border focus:border-violet-500 transition bg-sky-300 border-indigo-300 rounded-xl h-9"
          />
        </div>
        <label
            class="checkbox group text-15 flex items-start gap-2.5 mt-6 cursor-pointer xl:mt-0 xl:ml-auto"
        >
          <input type="checkbox" class="hidden" v-model="ignore" />
          <div
              class="check w-6 h-6 border rounded-sm border-indigo-300 group-hover:border-violet-800 transition flex flex-col items-center justify-center"
              :class="ignore ? 'bg-violet-800 border-violet-800' : 'bg-sky-300'"
          >
            <div
                class="selector flex flex-col items-center justify-center"
                v-if="ignore"
            >
              <svg
                  fill="none"
                  class="w-3 h-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 15 14"
              >
                <path
                    d="m1 7.5 6 5L13.5 1"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          Игнорировать если нет данных
        </label>
        <button
            class="px-4 py-2 bg-indigo-200 rounded-xl mt-4 hover:bg-violet-800 transition hover:text-white text-sm flex items-center justify-center gap-2 w-auto mx-auto xl:m-0"
        >
          Сбросить
          <svg
              class="w-3 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 15 15"
          >
            <path
                d="M3.435 3.448A5.74 5.74 0 1 1 1.76 7.5a.594.594 0 1 0-1.188 0 6.927 6.927 0 1 0 2.02-4.889.598.598 0 0 0-.054.064l-.996-.996a.396.396 0 0 0-.674.244l-.28 3.08a.396.396 0 0 0 .43.43l3.079-.28a.396.396 0 0 0 .244-.675l-.972-.972a.599.599 0 0 0 .065-.057Z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import VueMultiselect from "vue-multiselect";

export default {
  name: "FilterComponent",

  components: {
    VueMultiselect,
  },

  data() {
    return {
      showFilters: false,
      ignore: null,
      selected: null,
      options: [
        "Механики",
        "Группа с длинным названием Группа с длинным названием",
        "Плотники",
        "Монтажники",
        "Цех №29",
        "Цех №135",
        "Группа с длинным названием",
        "Плотники",
        "Монтажники",
        "Цех №29",
        "Цех №135",
      ],
      position: null,
      positions: [
        "Техник технолог",
        "Инженер технолог по программированию станков с ЧПУ",
        "Наладчик токарных станков с ЧПУ",
        "Наладчик токарных станков с ЧПУ ОООО",
        "Техник механик",
        "Цех №135",
        "Группа с длинным названием",
        "Плотники",
        "Монтажники",
        "Цех №29",
        "Цех №135",
      ],
    };
  },

  computed: {
    filters() {
      return [
        { type: "removable", label: "Техника безопасности" },
        { type: "removable", label: "Метрология" },
        { type: "removable", label: "Технология" },
        { type: "basic", label: "Чтение чертежей" },
        { type: "basic", label: "Наладка станка" },
        { type: "basic", label: "Программирование G-код" },
        { type: "basic", label: "Программирование CAD-CAM" },
      ];
    },
  },
};
</script>

<!--<style src="vue-multiselect/dist/vue-multiselect.css"></style>-->

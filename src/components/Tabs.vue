<template>
  <div>
    <div class="flex justify-between">
      <button
        v-for="heading in tabs"
        :key="heading.id"
        @click="current = heading.id"
        class="border-2 w-full text-base leading-snug border-white py-7 font-bold hover:text-gray-700 transition px-3 last:rounded-tr-xl last:rounded-bl-xl first:rounded-tl-xl first:rounded-br-xl"
        :class="
          current === heading.id ? 'bg-white' : 'bg-sky-250  text-gray-400'
        "
      >
        {{ heading.label }}
      </button>
    </div>
    <div class="px-6 py-10">
      <transition name="fade" mode="out-in">
        <div class="overflow-x-auto custom-scroll" v-if="current === 1" key="rate">
          <stars-component :data="data"></stars-component>
        </div>
        <div class="" v-else key="possibilities">
          <div class="xl:flex">
            <div class="grid flex-1 skills-table w-full">
              <div
                class="border-r flex items-center gap-2 py-2.5 pr-2 text-sm font-semibold"
              >
                Оценка
                <tooltip>
                  <template v-slot:button-content="{ click }">
                    <button
                      class="w-5 h-5 flex flex-col items-center justify-center rounded-full border-2 border-violet-800 text-violet-800 hover:bg-violet-800 hover:text-white transition"
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
                        class="w-12 flex flex-shrink-0 items-center gap-1 mt-1"
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
                        >Отлично знает и владеет</span
                      >
                    </div>
                    <div class="flex items-start mt-1">
                      <div
                        class="w-12 flex flex-shrink-0 items-center gap-1 mt-1"
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
                      <span class="text-xs text-black leading-snug font-normal"
                        >Знает и владеет, но допускает некритичные ошибки</span
                      >
                    </div>
                    <div class="flex items-start mt-1">
                      <div
                        class="w-12 flex flex-shrink-0 items-center gap-1 mt-1"
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
                      <span class="text-xs text-black leading-snug font-normal"
                        >Выполняет задание с подсказками</span
                      >
                    </div>
                    <div class="flex items-start mt-1">
                      <div
                        class="w-12 flex flex-shrink-0 items-center gap-1 mt-1"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-1.5"
                          fill="none"
                          viewBox="0 0 8 8"
                        >
                          <path
                            stroke="#51459D"
                            stroke-linecap="round"
                            stroke-width="2"
                            d="m1 7 6-6M7 7 1 1"
                          />
                        </svg>
                      </div>
                      <span class="text-xs text-black leading-snug font-normal"
                        >Допускает критические ошибки</span
                      >
                    </div>
                    <div class="flex items-start mt-1">
                      <div
                        class="w-12 flex flex-shrink-0 items-center gap-1 mt-1"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-1.5"
                          fill="none"
                          viewBox="0 0 8 8"
                        >
                          <path
                            stroke="#51459D"
                            stroke-linecap="round"
                            stroke-width="2"
                            d="m1 7 6-6M7 7 1 1"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-1.5"
                          fill="none"
                          viewBox="0 0 8 8"
                        >
                          <path
                            stroke="#51459D"
                            stroke-linecap="round"
                            stroke-width="2"
                            d="m1 7 6-6M7 7 1 1"
                          />
                        </svg>
                      </div>
                      <span class="text-xs text-black leading-snug font-normal"
                        >Не владеет</span
                      >
                    </div>
                  </div>
                </tooltip>
              </div>
              <div class="text-sm font-semibold py-2.5 pl-2">Навыки</div>
              <div class="border-r py-2.5 pr-4">
                <div class="flex flex-shrink-0 items-center gap-1 mt-1">
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
              </div>
              <div class="py-2.5 pl-4 text-sm leading-snug">
                Наладка станка, <br />Создание и загрузка инструмента
              </div>
              <div class="border-r py-2.5 pr-4">
                <div class="flex flex-shrink-0 items-center gap-1 mt-1">
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
              </div>
              <div class="py-2.5 pl-4 text-sm leading-snug">
                Управление станком и управление интерфейсом
              </div>
              <div class="border-r py-2.5 pr-4">
                <div class="w-12 flex flex-shrink-0 items-center gap-1 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-1.5"
                    fill="none"
                    viewBox="0 0 8 8"
                  >
                    <path
                      stroke="#51459D"
                      stroke-linecap="round"
                      stroke-width="2"
                      d="m1 7 6-6M7 7 1 1"
                    />
                  </svg>
                </div>
              </div>
              <div class="py-2.5 pl-4 text-sm leading-snug">
                Измерение инструмента вручную и автоматически
              </div>
              <div class="border-r py-2.5 pr-4 border-b-0">
                <div class="w-12 flex flex-shrink-0 items-center gap-1 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-1.5"
                    fill="none"
                    viewBox="0 0 8 8"
                  >
                    <path
                      stroke="#51459D"
                      stroke-linecap="round"
                      stroke-width="2"
                      d="m1 7 6-6M7 7 1 1"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-1.5"
                    fill="none"
                    viewBox="0 0 8 8"
                  >
                    <path
                      stroke="#51459D"
                      stroke-linecap="round"
                      stroke-width="2"
                      d="m1 7 6-6M7 7 1 1"
                    />
                  </svg>
                </div>
              </div>
              <div class="py-2.5 pl-4 text-sm leading-snug border-b-0">
                Определение рабочего нуля вручную и с помощью измерительного
                щупа
              </div>
            </div>
            <div class="mt-10 flex-1 xl:pl-20 xl:mt-4">
              <h3 class="font-bold leading-22">Общая информация</h3>
              <p class="mt-3 text-sm leading-snug xl:text-base">
                Стаж работы в сфере металлообработки на станках ЧПУ боее 10 лет.
                Активно проявляет интерес и задает большое кол-во вопросов по
                курсу. Быстро обучается и выполняет задания курса. Проявляет
                навыки в преподавательской деятельности
              </p>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import Tooltip from "@/components/Tooltip";
import StarsComponent from "@/components/StarsComponent";

export default {
  name: "Tabs",
  components: {
    Tooltip,
    StarsComponent
  },

  data() {
    return {
      current: 1,
      tabs: [
        {
          id: 1,
          label: "Оценка знений по системе SkillPass",
        },
        {
          id: 2,
          label: "Ключевые навыки",
        },
      ],

      data: {
        names: [
          "Техника безопасности",
          "Чтение чертежей",
          "Технология",
          "Метрология",
          "G-код",
          "CAD-CAM",
          "Наладка станка",
          "Отработка на станке",
        ],
        values: [68, 46, 63, 21, 48, 46, 61, 50],
      },
    };
  },
};
</script>

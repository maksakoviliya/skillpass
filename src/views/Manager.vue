<template>
  <div
    class="relative md:flex md:flex-row w-full md:px-7.5 md:h-full md:pb-13 lg:pb-0"
  >
    <div
      class="md:w-1/2 xl:w-full lg:w-full md:pr-2 md:mr-7.5 md:pt-5 md:pb-0 md:h-full"
    >
      <div class="xl:flex items-start gap-6 md:h-full">
        <div
          class="pt-6 bg-white rounded-xl shadow-md mt-6 md:mt-0 flex-1 flex flex-col justify-between md:h-full"
        >
          <breadcrumbs :breadcrumbs="breadcrumbs" class="px-6"></breadcrumbs>

          <filter-component class="mt-6 px-6"></filter-component>

          <div class="mt-7.5 overflow-auto border-t xl:border-t-0 md:h-full custom-scroll px-6 xl:px-0">
            <users-table :users="users" @select="handleUsersSelect"></users-table>
          </div>
        </div>
      </div>
    </div>
    <div
      class="md:w-1/2 xl:w-full xl:max-w-583 lg:w-full lg:max-w-md w-full md:flex flex-col h-full pt-5 md:pb-6  overflow-auto custom-scroll"
    >
      <div class="p-6 bg-white rounded-xl shadow-md lg:px-7.5 md:mb-6">
        <h2 class="text-lg font-bold text-center tracking-wide">
          Рекомендованные курсы
        </h2>
        <div
            v-if="!selected.length"
          class="flex w-full h-full flex-col justify-center items-center my-6 xl:my-0 xl:min-h-90 xl:px-16"
        >
          <div
            class="py-9 w-full border-t border-b border-indigo-300 text-center"
          >
            <p class="text-gray-300">Здесь пока ничего нет...</p>
            <p class="mt-5 leading-snug text-gray-500">
              <svg
                fill="none"
                class="fill-current w-4 inline"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 18 18"
              >
                <path
                  d="M9 7.75a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5A.75.75 0 0 1 9 7.75ZM9 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                  fill="#656565"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.316.769a42.502 42.502 0 0 1 9.367 0c1.826.204 3.301 1.642 3.516 3.48.37 3.156.37 6.345 0 9.502-.215 1.837-1.69 3.276-3.516 3.48a42.512 42.512 0 0 1-9.367 0c-1.826-.204-3.3-1.643-3.516-3.48a40.902 40.902 0 0 1 0-9.503C1.015 2.411 2.49.973 4.316.768Zm9.2 1.49a41.003 41.003 0 0 0-9.033 0A2.486 2.486 0 0 0 2.29 4.423a39.401 39.401 0 0 0 0 9.154 2.486 2.486 0 0 0 2.193 2.163c2.977.333 6.057.333 9.033 0a2.486 2.486 0 0 0 2.193-2.163 39.401 39.401 0 0 0 0-9.154 2.486 2.486 0 0 0-2.193-2.164Z"
                  fill="#656565"
                />
              </svg>
              Создайте выборку сотрудников,<br />чтобы увидеть рекомендованные
              для них курсы
            </p>
          </div>
        </div>
        <div v-else>
          <responsive-table :show-all="showAllRecommenedCourses" :rows="recommendedCourses"></responsive-table>
          <div class="text-center mt-auto">
            <button
                class="inline-flex gap-2 items-center mx-auto font-semibold text-sm lg:pt-7.5"
                @click="showAllRecommenedCourses = !showAllRecommenedCourses"
            >
              {{ showAllRecommenedCourses ? 'Скрыть' : 'Показать еще' }}
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  class="stroke-current w-2.5 transform"
                  :class="showAllRecommenedCourses ? 'rotate-180' : ''"
                  viewBox="0 0 12 6"
              >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 5 4 5-4"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="mt-10 pb-20 lg:pb-0">
        <div class="flex px-6 lg:px-0 items-center justify-between">
          <h2 class="font-bold text-xl">Новости</h2>
          <div class="flex items-center gap-4">
            <button
              @click="prevSlide"
              class="hove:bg-indigo-400 w-8 h-8 flex flex-col items-center justify-center text-white border-2 border-white bg-indigo-200 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="fill-current h-2.5"
                viewBox="0 0 7 12"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.243 11.004a.829.829 0 0 1-1.172 0L.65 6.585a.829.829 0 0 1 0-1.171l4.42-4.42a.829.829 0 0 1 1.172 1.172L2.41 6l3.833 3.834a.829.829 0 0 1 0 1.171Z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <div class="font-bold text-lg">
              {{ currentSlide }}/<span class="text-gray-300">4</span>
            </div>
            <button
              @click="nextSlide"
              class="hove:bg-indigo-400 w-8 h-8 flex flex-col items-center justify-center text-white border-2 border-white bg-indigo-200 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="fill-current h-2.5 transform rotate-180"
                viewBox="0 0 7 12"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.243 11.004a.829.829 0 0 1-1.172 0L.65 6.585a.829.829 0 0 1 0-1.171l4.42-4.42a.829.829 0 0 1 1.172 1.172L2.41 6l3.833 3.834a.829.829 0 0 1 0 1.171Z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
        <Splide
          :options="splideOptions"
          class="mt-4"
          ref="splide"
          @splide:move="handleSlideMove"
        >
          <SplideSlide v-for="slide in slides" :key="slide.id">
            <img :src="slide.src" alt="" />
          </SplideSlide>
        </Splide>
      </div>
    </div>
  </div>
</template>

<script>
import ResponsiveTable from "@/components/ResponsiveTable";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import Breadcrumbs from "@/components/Breadcrumbs";
import UsersTable from "@/components/UsersTable";
import FilterComponent from "@/components/FilterComponent";

export default {
  name: "Manager",

  components: {
    ResponsiveTable,
    Splide,
    SplideSlide,
    Breadcrumbs,
    FilterComponent,
    UsersTable,
  },

  data() {
    return {
      currentSlide: 1,
      showAllRecommenedCourses: false,
      selected: [],
      splideOptions: {
        type: "loop",
        arrows: false,
        pagination: false,
        gap: "10px",
        fixedWidth: "auto",
        perPage: 3,
        breakpoints: {
          1024: {
            fixedWidth: "250px",
            padding: "45px",
            perPage: 3,
            pagination: true,
          },
        },
      },
      slides: [
        {
          src: "https://api.lorem.space/image/movie?w=250&h=400",
          id: 1,
        },
        {
          src: "https://api.lorem.space/image/movie?w=250&h=400",
          id: 2,
        },
        {
          src: "https://api.lorem.space/image/movie?w=250&h=400",
          id: 3,
        },
        {
          src: "https://api.lorem.space/image/movie?w=250&h=400",
          id: 4,
        },
      ],
      breadcrumbs: [
        {
          id: 1,
          routeName: "Employee",
          label: "Главная",
        },
        {
          id: 2,
          routeName: "Manager",
          label: "Сотрудники",
        },
      ],
      users: [
        {
          id: 1,
          avatar: "no-image.svg",
          name: "Иванов Иван Иванович",
          rating: 4,
          position: "Инженер технолог по программированию станков с ЧПУ",
          group: "Цех №29",
          results: [
            {
              key: "key 1",
              label: "Технология",
              value: 72,
            },
            {
              key: "key 2",
              label: "Операции",
              value: 22,
            },
            {
              key: "key 3",
              label: "Операции",
              value: 90,
            },
            {
              key: "key 4",
              label: "Операции",
              value: 35,
            },
          ],
        },
        {
          id: 2,
          avatar: "no-image.svg",
          name: "Иванов Иван Иванович",
          rating: 4,
          position: "Инженер технолог по программированию станков с ЧПУ",
          group: "Цех №29",
          results: [
            {
              key: "key 1",
              label: "Технология",
              value: 72,
            },
            {
              key: "key 2",
              label: "Операции",
              value: 22,
            },
            {
              key: "key 3",
              label: "Операции",
              value: 90,
            },
            {
              key: "key 4",
              label: "Операции",
              value: 35,
            },
          ],
        },
        {
          id: 3,
          avatar: "no-image.svg",
          name: "Иванов Иван Иванович",
          rating: 2,
          position: "Инженер технолог по программированию станков с ЧПУ",
          group: "Цех №29",
          results: [
            {
              key: "key 1",
              label: "Технология",
              value: 72,
            },
            {
              key: "key 2",
              label: "Операции",
              value: 22,
            },
            {
              key: "key 3",
              label: "Операции",
              value: 90,
            },
            {
              key: "key 4",
              label: "Операции",
              value: 35,
            },
          ],
        },
        {
          id: 4,
          avatar: "no-image.svg",
          name: "Иванов Иван Иванович",
          rating: 4,
          position: "Инженер технолог по программированию станков с ЧПУ",
          group: "Цех №29",
          results: [
            {
              key: "key 1",
              label: "Технология",
              value: 72,
            },
            {
              key: "key 2",
              label: "Операции",
              value: 22,
            },
            {
              key: "key 3",
              label: "Операции",
              value: 90,
            },
            {
              key: "key 4",
              label: "Операции",
              value: 35,
            },
          ],
        },
        {
          id: 5,
          avatar: "no-image.svg",
          name: "Иванов Иван Иванович",
          rating: 4,
          position: "Инженер технолог по программированию станков с ЧПУ",
          group: "Цех №29",
          results: [
            {
              key: "key 1",
              label: "Технология",
              value: 72,
            },
            {
              key: "key 2",
              label: "Операции",
              value: 22,
            },
            {
              key: "key 3",
              label: "Операции",
              value: 90,
            },
            {
              key: "key 4",
              label: "Операции",
              value: 35,
            },
          ],
        },
        {
          id: 6,
          avatar: "no-image.svg",
          name: "Иванов Иван Иванович",
          rating: 1,
          position: "Инженер технолог по программированию станков с ЧПУ",
          group: "Цех №29",
          results: [
            {
              key: "key 1",
              label: "Технология",
              value: 72,
            },
            {
              key: "key 2",
              label: "Операции",
              value: 22,
            },
            {
              key: "key 3",
              label: "Операции",
              value: 90,
            },
            {
              key: "key 4",
              label: "Операции",
              value: 35,
            },
          ],
        },
        {
          id: 7,
          avatar: "no-image.svg",
          name: "Иванов Иван Иванович",
          rating: 4,
          position: "Инженер технолог по программированию станков с ЧПУ",
          group: "Цех №29",
          results: [
            {
              key: "key 1",
              label: "Технология",
              value: 72,
            },
            {
              key: "key 2",
              label: "Операции",
              value: 22,
            },
            {
              key: "key 3",
              label: "Операции",
              value: 90,
            },
            {
              key: "key 4",
              label: "Операции",
              value: 35,
            },
          ],
        },
      ],
      recommendedCourses: [
        {
          id: 1,
          columns: [
            {
              key: "visual",
              label: "Relevance",
              value: "10",
            },
            {
              key: "title",
              label: "Course name",
              value: "Поворот плоскости CYKLE800",
            },
            {
              key: "duration",
              label: "Duration",
              value: "10 часов",
            },
          ],
        },
        {
          id: 2,
          columns: [
            {
              key: "visual",
              label: "Relevance",
              color: "#F4E281",
              bgColor: "#FBF5D3",
              value: "26",
            },
            {
              key: "title",
              label: "Course name",
              value: "Поворот плоскости CYKLE800",
            },
            {
              key: "duration",
              label: "Duration",
              value: "10 часов",
            },
          ],
        },
        {
          id: 3,
          columns: [
            {
              key: "visual",
              label: "Relevance",
              color: "#F4E281",
              bgColor: "#FBF5D3",
              value: "26",
            },
            {
              key: "title",
              label: "Course name",
              value: "Поворот плоскости CYKLE800",
            },
            {
              key: "duration",
              label: "Duration",
              value: "10 часов",
            },
          ],
        },
        {
          id: 4,
          columns: [
            {
              key: "visual",
              label: "Relevance",
              color: "#F4E281",
              bgColor: "#FBF5D3",
              value: "26",
            },
            {
              key: "title",
              label: "Course name",
              value: "Поворот плоскости CYKLE800",
            },
            {
              key: "duration",
              label: "Duration",
              value: "10 часов",
            },
          ],
        },
        {
          id: 5,
          columns: [
            {
              key: "visual",
              label: "Relevance",
              color: "#F4E281",
              bgColor: "#FBF5D3",
              value: "26",
            },
            {
              key: "title",
              label: "Course name",
              value: "Поворот плоскости CYKLE800",
            },
            {
              key: "duration",
              label: "Duration",
              value: "10 часов",
            },
          ],
        },
        {
          id: 6,
          columns: [
            {
              key: "visual",
              label: "Relevance",
              color: "#F4E281",
              bgColor: "#FBF5D3",
              value: "26",
            },
            {
              key: "title",
              label: "Course name",
              value: "Поворот плоскости CYKLE800",
            },
            {
              key: "duration",
              label: "Duration",
              value: "10 часов",
            },
          ],
        },
      ],
    };
  },

  methods: {
    nextSlide() {
      this.$refs.splide.go(">");
    },
    prevSlide() {
      this.$refs.splide.go("<");
    },
    handleSlideMove(splide, nextIndex) {
      this.currentSlide = nextIndex + 1;
    },
    handleUsersSelect(ids) {
      this.selected = ids
    }
  },
};
</script>

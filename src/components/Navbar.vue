<template>
  <div
    class="bg-indigo-200 py-2.5 flex justify-between px-6 fixed w-full lg:inset-y-0 lg:max-h-100vh lg:flex-col lg:px-6.5 lg:py-6.5 z-30 lg:justify-start"
    :class="wideMenu ? 'lg:w-57.5' : 'lg:w-25'"
  >
    <button
      @click="wideMenu = !wideMenu"
      class="hidden outline-none lg:flex flex-col items-center justify-center h-2.5 bg-white absolute top-0 mt-28 z-20 h-11.5 w-6.5 rounded-l-lg right-0 hover:bg-violet-800 hover:text-white"
    >
      <svg
        class="fill-current h-2.5 transform"
        :class="wideMenu ? 'rotate-180' : ''"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 7 10"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M.97.47a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 0 1.06l-4 4A.75.75 0 0 1 .97 8.47L4.44 5 .97 1.53a.75.75 0 0 1 0-1.06Z"
        />
      </svg>
    </button>
    <router-link
      :to="{ name: 'Employee' }"
      class="menu-item w-8 h-8 lg:w-12 lg:h-12 text-violet-800"
    >
      <svg
        class="fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.491 0c6.131 0 6.538.02 7.087.342.844.496 1.145 1.186 1.145 2.627l-.021.321-5.24.064c-5.092.062-5.88.461-6.443.797-.328.195-.929.945-1.038 1.246-.125.345-.82 2.587-.62 5.773l.31 4.99-.627-.044c-.987 0-1.465-.086-1.9-.342C.007 15.106-.001 15.047 0 8.024c0-6.07.017-6.386.367-6.94C1.032.034 1.285 0 8.491 0Zm12.113 7.742s2.163.22 2.79.85l.537.54.052 6.461c.058 7.18.028 7.398-1.087 8.053-.574.337-.902.354-7.237.354-6.26 0-6.668-.02-7.217-.342-.844-.496-1.066-.758-1.1-2.199a7.46 7.46 0 0 0-.037-.592l-.053.001c.01-.298.031-.212.053-.001l5.09-.128c5.666-.141 6.752-.538 7.376-1.456.298-.437.875-1.682.956-6.395l-.123-5.146Zm-7.352.14h3.471v6.839l-.621.654-.623.654-3.652.055c-3.11.046-3.666.014-3.755-.21-.058-.144-.078-1.626-.045-3.294.052-2.595.111-3.112.404-3.58.655-1.042.983-1.118 4.821-1.118Z"
        />
      </svg>
    </router-link>
    <button
      class="menu-item w-8 h-8 lg:hidden text-violet-800"
      @click="showMenu = !showMenu"
    >
      <svg
        v-if="showMenu"
        fill="none"
        class="stroke-current w-3 h-3"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
      >
        <path
          d="M1 13 13 1M13 13 1 1"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
      <svg
        v-else
        class="fill-current w-4 h-3"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 12"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15.75 6a.75.75 0 0 0-.75-.75H1a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 .75-.75ZM15.75 1A.75.75 0 0 0 15 .25H1a.75.75 0 1 0 0 1.5h14a.75.75 0 0 0 .75-.75ZM15.75 11a.75.75 0 0 0-.75-.75H1a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 .75-.75Z"
        />
      </svg>
    </button>
    <transition name="slide-right">
      <div
        class="absolute bg-white inset-x-0 px-6 w-full top-full bg-white z-10 lg:block-important lg:relative lg:inset-0 h-screen overflow-hidden lg:bg-transparent lg:px-0"
        v-show="showMenu"
      >
        <div
          class="mt-2.5 lg:fixed lg:top-0 lg:mt-0 lg:w-full lg:pl-13 lg:bg-white items-center lg:h-15 lg:gap-10"
          :class="[
            showSearch ? 'lg:flex' : 'lg:hidden',
            wideMenu ? 'lg:left-57.5 lg:pr-72' : 'lg:left-25 lg:pr-38',
          ]"
        >
          <div
            class="fixed top-15 inset-x-0 bottom-0 bg-gray-700 opacity-80"
            @click="showSearch = false"
            :class="[
              showSearch ? 'hidden lg:block' : 'hidden',
              wideMenu ? 'lg:left-57.5' : 'lg:left-25',
            ]"
          ></div>
          <h2 class="hidden lg:block font-bold text-lg whitespace-nowrap">
            Глобальный поиск
          </h2>
          <div class="relative lg:w-full">
            <div
              class="absolute inset-y-0 left-0 w-16 flex flex-col items-center justify-center lg:items-start"
            >
              <svg
                fill="none"
                class="fill-current w-4"
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
            <input
              type="text"
              placeholder="Поиск"
              @focusin="addSearchOverlay"
              @focusout="removeSearchOverlay"
              class="outline-none pl-16 text-15 leading-snug py-4 border-b-2 w-full placeholder-gray-500 focus:border-gray-700 transition lg:pl-11 lg:py-2"
            />
          </div>
        </div>

        <div
          class="mt-7.5 relative lg:mt-36 lg:pb-36 lg:h-full lg:flex lg:flex-col"
        >
          <transition name="fade">
            <div
              v-if="showSearchOverlay"
              class="searchOverlay bg-white bg-opacity-80 absolute inset-0 z-10"
            ></div>
          </transition>

          <router-link
            :to="{ name: 'Employee' }"
            class="flex items-center h-17.5 hover:bg-violet-800 rounded-lg font-semibold transition hover:text-white relative lg:bg-white lg:h-12"
          >
            <span
              class="w-16 lg:w-12 flex flex-col items-center justify-center"
            >
              <img src="@/assets/img/avatar.png" class="w-8 h-8" alt="" />
            </span>
            <span
              class="whitespace-nowrap mr-4"
              :class="wideMenu ? 'lg:inline' : 'inline lg:hidden'"
              >Иванов И.И.</span
            >
          </router-link>
          <div class="bg-indigo-300 w-full h-0.5 lg:hidden"></div>
          <router-link
            :to="{ name: 'Employee' }"
            class="flex items-center h-17.5 hover:bg-violet-800 rounded-lg font-semibold transition hover:text-white lg:bg-white lg:mt-5 lg:text-base lg:h-12"
          >
            <span
              class="w-16 lg:w-12 flex flex-col items-center justify-center"
            >
              <svg
                class="fill-current w-4.5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 18 19"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.806 2.535a2.321 2.321 0 0 0-3.173 0L2.922 6.974a.744.744 0 0 0-.222.405 26.86 26.86 0 0 0-.123 9.151l.114.72h3.031v-6.21c0-.415.342-.75.764-.75h5.467c.421 0 .763.335.763.75v6.21h3.031l.115-.72c.482-3.036.44-6.13-.123-9.151a.744.744 0 0 0-.222-.405l-4.711-4.44Zm-4.23-1.083a3.87 3.87 0 0 1 5.287 0l4.711 4.44c.347.327.58.752.667 1.216.595 3.188.64 6.451.13 9.653l-.184 1.158a.996.996 0 0 1-.99.831h-4.244a.757.757 0 0 1-.764-.75v-6.21h-3.94V18c0 .415-.341.75-.763.75H2.24a.996.996 0 0 1-.99-.831l-.183-1.158a28.333 28.333 0 0 1 .13-9.653c.086-.464.32-.89.666-1.216l4.711-4.44Z"
                />
              </svg>
            </span>
            <span
              class="whitespace-nowrap mr-4"
              :class="wideMenu ? 'lg:inline' : 'inline lg:hidden'"
              >Главная</span
            >
          </router-link>
          <div class="bg-indigo-300 w-full h-0.5 lg:hidden"></div>
          <router-link
            :to="{ name: 'Employee' }"
            class="flex items-center h-17.5 hover:bg-violet-800 rounded-lg font-semibold transition hover:text-white lg:bg-white lg:mt-5 lg:text-base lg:h-12"
          >
            <span
              class="w-16 lg:w-12 flex flex-col items-center justify-center"
            >
              <svg
                class="fill-current w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 18"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.75 4.5a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0ZM8 1.75a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5ZM4 11.75A2.25 2.25 0 0 0 1.75 14v1.188c0 .018.013.034.031.037 4.119.672 8.32.672 12.438 0a.037.037 0 0 0 .031-.037V14A2.25 2.25 0 0 0 12 11.75h-.34a.253.253 0 0 0-.079.012l-.865.283a8.751 8.751 0 0 1-5.432 0l-.866-.283a.252.252 0 0 0-.077-.012H4ZM.25 14A3.75 3.75 0 0 1 4 10.25h.34c.185 0 .369.03.544.086l.866.283a7.251 7.251 0 0 0 4.5 0l.866-.283c.175-.057.359-.086.543-.086H12A3.75 3.75 0 0 1 15.75 14v1.188c0 .753-.546 1.396-1.29 1.517a40.095 40.095 0 0 1-12.92 0 1.537 1.537 0 0 1-1.29-1.517V14Z"
                />
              </svg>
            </span>
            <span
              class="whitespace-nowrap mr-4"
              :class="wideMenu ? 'lg:inline' : 'inline lg:hidden'"
              >Моя страница</span
            >
          </router-link>
          <div class="bg-indigo-300 w-full h-0.5 lg:hidden"></div>
          <router-link
            :to="{ name: 'Employee' }"
            class="flex items-center h-17.5 hover:bg-violet-800 rounded-lg font-semibold transition hover:text-white lg:bg-white lg:mt-5 lg:text-base lg:h-12"
          >
            <span
              class="w-16 lg:w-12 flex flex-col items-center justify-center"
            >
              <svg
                class="fill-current w-5.5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 22 22"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11 2.08 8.787 4.368a1.25 1.25 0 0 1-.898.381H4.75V7.89c0 .339-.137.663-.381.898L2.079 11l2.29 2.213c.244.236.381.56.381.899v3.138H7.89c.339 0 .663.138.898.382L11 19.922l2.213-2.29a1.25 1.25 0 0 1 .899-.382h3.138v-3.138c0-.339.138-.663.382-.899L19.922 11l-2.29-2.213a1.25 1.25 0 0 1-.382-.898V4.75h-3.138a1.25 1.25 0 0 1-.899-.381L11 2.079ZM10.101.85a1.25 1.25 0 0 1 1.798 0l2.319 2.4H17.5c.69 0 1.25.559 1.25 1.25v3.282l2.4 2.318a1.25 1.25 0 0 1 0 1.798l-2.4 2.319V17.5c0 .69-.56 1.25-1.25 1.25h-3.282l-2.319 2.4a1.25 1.25 0 0 1-1.798 0l-2.318-2.4H4.5c-.69 0-1.25-.56-1.25-1.25v-3.282L.851 11.899a1.25 1.25 0 0 1 0-1.798l2.4-2.318V4.5c0-.69.559-1.25 1.25-1.25h3.282L10.1.851Z"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.25 11a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0ZM11 7.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5Z"
                />
              </svg>
            </span>
            <span
              class="whitespace-nowrap mr-4"
              :class="wideMenu ? 'lg:inline' : 'inline lg:hidden'"
              >Настройки</span
            >
          </router-link>
          <button
            @click="showSearch = !showSearch"
            class="hidden lg:flex items-center h-17.5 hover:bg-violet-800 rounded-lg font-semibold transition hover:text-white lg:bg-white lg:mt-5 lg:text-base lg:h-12"
          >
            <span
              class="w-16 lg:w-12 flex flex-col items-center justify-center"
            >
              <svg
                class="fill-current h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 15"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.235 11.21a6.57 6.57 0 0 0 8.745.487l3.36 3.09a.73.73 0 0 0 1.032-1.033l-3.36-3.089a6.566 6.566 0 0 0-.488-8.742 6.57 6.57 0 0 0-9.29 0 6.565 6.565 0 0 0 0 9.287Zm1.032-8.255a5.106 5.106 0 0 0 0 7.223 5.11 5.11 0 0 0 7.22.004l.005-.004.004-.005a5.106 5.106 0 0 0-.004-7.218 5.11 5.11 0 0 0-7.225 0Z"
                />
              </svg>
            </span>
            <span
              class="whitespace-nowrap mr-4"
              :class="wideMenu ? 'lg:inline' : 'inline lg:hidden'"
              >Поиск</span
            >
          </button>
          <div class="bg-indigo-300 w-full h-0.5 lg:hidden"></div>
          <router-link
            :to="{ name: 'Employee' }"
            class="flex items-center h-17.5 hover:bg-violet-800 rounded-lg font-semibold transition hover:text-white lg:bg-white lg:mt-5 lg:text-base lg:h-12 lg:mt-auto"
          >
            <span
              class="w-16 lg:w-12 flex flex-col items-center justify-center"
            >
              <svg
                class="fill-current h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 17 16"
              >
                <path
                  d="M9 14.25a.75.75 0 0 0 0 1.5h6A1.75 1.75 0 0 0 16.75 14V2A1.75 1.75 0 0 0 15 .25H9a.75.75 0 0 0 0 1.5h6a.25.25 0 0 1 .25.25v12a.25.25 0 0 1-.25.25H9Z"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M.25 9.115c0 .69.56 1.25 1.25 1.25h4.613l.02.22.054.556a1.227 1.227 0 0 0 1.752.988c1.634-.783 3.212-1.958 4.466-3.267a1.253 1.253 0 0 0 0-1.734l-.1-.103A15.058 15.058 0 0 0 7.94 3.86a1.227 1.227 0 0 0-1.752.988l-.054.555-.02.22H1.5c-.69 0-1.25.56-1.25 1.25v2.241Zm7.303.416a.75.75 0 0 0-.745-.666H1.75v-1.74h5.058a.75.75 0 0 0 .749-.704c.018-.29.04-.581.069-.871l.016-.162a13.558 13.558 0 0 1 3.516 2.607 13.563 13.563 0 0 1-3.516 2.607l-.016-.162a25.283 25.283 0 0 1-.073-.91Z"
                />
              </svg>
            </span>
            <span
              class="whitespace-nowrap mr-4"
              :class="wideMenu ? 'lg:inline' : 'inline lg:hidden'"
              >Выход</span
            >
          </router-link>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Navbar",

  data() {
    return {
      showMenu: false,
      showSearchOverlay: false,
      wideMenu: false,
      showSearch: false,
    };
  },

  methods: {
    addSearchOverlay() {
      this.showSearchOverlay = true;
    },
    removeSearchOverlay() {
      this.showSearchOverlay = false;
    },
  },
};
</script>

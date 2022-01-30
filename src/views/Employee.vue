<template>
  <div
    class="relative md:flex md:flex-row-reverse w-full md:px-7.5 md:h-full md:pb-13 lg:pb-0"
  >
    <div
      class="md:w-1/2 xl:w-full xl:max-w-486 lg:w-5/12 md:pl-7.5 md:border-l border-indigo-300 w-full md:flex flex-col h-full justify-between pt-5 md:pb-6"
    >
      <div
        class="p-6 bg-white rounded-xl shadow-md lg:px-7.5 md:mb-6 md:overflow-auto custom-scroll"
      >
        <div class="flex items-center">
          <div class="w-15 lg:w-17.5 flex-shrink-0 pr-5 lg:pr-0">
            <img
              src="@/assets/img/avatar.png"
              class="w-10 h-10 lg:w-11 lg:h-11"
              alt=""
            />
          </div>
          <h2 class="font-extrabold text-lg leading-22">
            Иванов Иван <br class="md:hidden" />
            Иванович
          </h2>
        </div>
        <div class="mt-3 pb-10 border-b border-indigo-300 mb-5">
          <div
            class="flex items-center min-h-11.5 py-1 border-b border-indigo-300"
          >
            <div
              class="w-15 lg:w-17.5 flex-shrink-0 flex flex-col items-center justify-center pr-5 lg:pr-4 text-gray-300"
            >
              <svg
                class="fill-current w-3.5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.833.708c.346 0 .625.28.625.625v1.39c2.357-.21 4.727-.21 7.084 0v-1.39a.625.625 0 1 1 1.25 0v1.514a2.813 2.813 0 0 1 2.393 2.415l.072.544a24.16 24.16 0 0 1-.077 6.89 2.508 2.508 0 0 1-2.232 2.11l-.995.099c-2.629.259-5.277.259-7.906 0l-.994-.098a2.508 2.508 0 0 1-2.232-2.11 24.162 24.162 0 0 1-.078-6.89l.072-.545a2.813 2.813 0 0 1 2.393-2.415V1.333c0-.345.28-.625.625-.625Zm.371 3.294a38.675 38.675 0 0 1 7.592 0l.754.074c.723.072 1.3.63 1.396 1.35l.072.544c.025.19.048.38.069.571H1.913c.02-.19.044-.38.069-.57l.072-.545a1.563 1.563 0 0 1 1.396-1.35l.754-.074Zm-2.39 3.79a22.912 22.912 0 0 0 .242 4.712 1.258 1.258 0 0 0 1.12 1.059l.993.098c2.548.25 5.114.25 7.662 0l.994-.098a1.258 1.258 0 0 0 1.12-1.059c.242-1.56.323-3.14.241-4.713H1.814Z"
                />
              </svg>
            </div>
            <p class="text-sm leading-snug lg:text-base leading-22">
              27.11.1988
            </p>
          </div>
          <div
            class="flex items-center min-h-11.5 py-1 border-b border-indigo-300"
          >
            <div
              class="w-15 lg:w-17.5 flex-shrink-0 flex flex-col items-center justify-center pr-5 lg:pr-4 text-gray-300"
            >
              <svg
                class="fill-current h-3.5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 15"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.459 4.25a3.542 3.542 0 1 1 7.083 0 3.542 3.542 0 0 1-7.083 0ZM7 1.958a2.292 2.292 0 1 0 0 4.583 2.292 2.292 0 0 0 0-4.583ZM3.667 10.291c-1.036 0-1.875.84-1.875 1.875v.99c0 .016.01.028.026.03 3.432.561 6.933.561 10.365 0a.03.03 0 0 0 .026-.03v-.99c0-1.035-.84-1.875-1.875-1.875h-.284a.209.209 0 0 0-.065.01l-.721.236a7.29 7.29 0 0 1-4.527 0l-.721-.235a.209.209 0 0 0-.065-.01h-.284ZM.542 12.166c0-1.726 1.4-3.125 3.125-3.125h.284c.154 0 .307.025.453.072l.721.236a6.042 6.042 0 0 0 3.75 0l.722-.236c.146-.047.299-.072.453-.072h.284c1.726 0 3.125 1.4 3.125 3.125v.99a1.28 1.28 0 0 1-1.075 1.265 33.41 33.41 0 0 1-10.768 0 1.28 1.28 0 0 1-1.074-1.264v-.99Z"
                />
              </svg>
            </div>
            <p class="text-sm leading-snug lg:text-base leading-22">
              Накладчик станков с ЧПУ
            </p>
          </div>
          <div
            class="flex items-center min-h-11.5 py-1 border-b border-indigo-300"
          >
            <div
              class="w-15 lg:w-17.5 flex-shrink-0 flex flex-col items-center justify-center pr-5 lg:pr-4 text-gray-300"
            >
              <svg
                class="fill-current w-3.5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.867 6.214a14.347 14.347 0 0 0 7.435 7.219l.01.004.637.284c.81.36 1.763.104 2.283-.615l1.062-1.47a.208.208 0 0 0-.038-.284l-1.854-1.495a.208.208 0 0 0-.298.038l-.722.973a.625.625 0 0 1-.76.198 11.156 11.156 0 0 1-5.558-5.559.625.625 0 0 1 .197-.76l.974-.721a.208.208 0 0 0 .038-.298L4.777 1.873a.208.208 0 0 0-.284-.038L3.015 2.902a1.875 1.875 0 0 0-.61 2.296l.462 1.015ZM9.81 14.58A15.597 15.597 0 0 1 1.73 6.734l-.001-.002-.462-1.016a3.125 3.125 0 0 1 1.015-3.827L3.761.822a1.458 1.458 0 0 1 1.989.267l1.496 1.854c.52.645.399 1.594-.267 2.087l-.558.414a9.91 9.91 0 0 0 4.265 4.264l.413-.558a1.458 1.458 0 0 1 2.088-.266l1.854 1.495c.603.487.72 1.361.266 1.99l-1.062 1.47a3.125 3.125 0 0 1-3.805 1.024l-.631-.282Z"
                />
              </svg>
            </div>
            <p class="text-sm leading-snug lg:text-base leading-22">
              + 7 999 000 00 00
            </p>
          </div>
          <div
            class="flex items-center min-h-11.5 py-1 border-b border-indigo-300"
          >
            <div
              class="w-15 lg:w-17.5 flex-shrink-0 flex flex-col items-center justify-center pr-5 lg:pr-4 text-gray-300"
            >
              <svg
                class="fill-current w-3.5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 14"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M.336 3.961c-.233 2.17-.223 4.67.102 6.831a2.615 2.615 0 0 0 2.36 2.216l1.258.11c2.624.228 5.263.228 7.888 0l1.258-.11a2.615 2.615 0 0 0 2.36-2.216c.325-2.16.335-4.662.102-6.83-.03-.252-.065-.503-.102-.754A2.615 2.615 0 0 0 13.202.99L11.944.882a45.539 45.539 0 0 0-7.888 0l-1.258.11a2.615 2.615 0 0 0-2.36 2.216c-.038.25-.071.502-.102.753Zm3.828-1.834a44.288 44.288 0 0 1 7.671 0l1.259.11a1.365 1.365 0 0 1 1.232 1.157l.028.194L9.72 6.163a3.542 3.542 0 0 1-3.44 0L1.646 3.588l.028-.194a1.365 1.365 0 0 1 1.232-1.157l1.258-.11Zm10.343 2.806c.162 1.89.101 3.794-.181 5.673a1.365 1.365 0 0 1-1.232 1.157l-1.259.11a44.3 44.3 0 0 1-7.67 0l-1.26-.11a1.365 1.365 0 0 1-1.23-1.157 24.251 24.251 0 0 1-.182-5.673l4.18 2.322a4.792 4.792 0 0 0 4.654 0l4.18-2.322Z"
                />
              </svg>
            </div>
            <p class="text-sm leading-snug lg:text-base leading-22">
              pochta@mail.ru
            </p>
          </div>
          <div
            class="flex items-center min-h-11.5 py-1 border-b border-indigo-300"
          >
            <div
              class="w-15 lg:w-17.5 flex-shrink-0 flex flex-col items-center justify-center pr-5 lg:pr-4 text-gray-300"
            >
              <svg
                class="fill-current w-3.5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 18 17"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.677.751c.203-.057.417-.057.62 0 .43.123.866.236 1.303.35 2.05.535 4.133 1.078 5.986 2.587l.853.695c.346.282.52.7.52 1.117v5.833a.625.625 0 0 1-1.25 0v-4.12l-.136.111a9.956 9.956 0 0 1-1.999 1.261c.033.076.051.16.051.248v3.578c0 .945-.579 1.792-1.459 2.135l-3.333 1.3a2.292 2.292 0 0 1-1.665 0l-3.333-1.3a2.292 2.292 0 0 1-1.46-2.135V8.833c0-.09.02-.176.054-.253A10.035 10.035 0 0 1 1.415 7.31L.56 6.616c-.692-.564-.692-1.669 0-2.233l.867-.708c1.84-1.501 3.907-2.041 5.943-2.573.437-.114.874-.228 1.306-.35Zm8.032 4.75c0-.076-.03-.125-.06-.149l-.852-.695C14 3.417 12.4 2.87 10.367 2.335a75.432 75.432 0 0 1-1.38-.372c-.475.135-.937.256-1.385.374-2.017.53-3.774.993-5.384 2.306l-.867.708c-.029.023-.059.073-.059.148s.03.125.059.148l.853.695c1.624 1.322 3.397 1.788 5.43 2.323.447.117.906.238 1.38.372a74 74 0 0 1 1.385-.375c2.016-.53 3.774-.992 5.384-2.306l.867-.708c.028-.023.059-.073.059-.148Zm-6.08 4.396c.917-.24 1.84-.48 2.746-.81v3.324c0 .43-.263.815-.663.97l-3.333 1.3a1.041 1.041 0 0 1-.757 0l-3.333-1.3a1.042 1.042 0 0 1-.664-.97V9.08c.916.333 1.85.577 2.776.818.437.114.872.228 1.303.35.203.058.417.058.62 0 .432-.123.868-.237 1.306-.351Z"
                />
              </svg>
            </div>
            <p class="text-sm leading-snug lg:text-base leading-22">
              МАИ им. Цилковского
            </p>
          </div>
          <div
            class="flex items-center min-h-11.5 py-1 border-b border-indigo-300"
          >
            <div
              class="w-15 lg:w-17.5 flex-shrink-0 flex flex-col items-center justify-center pr-5 lg:pr-4 text-gray-300"
            >
              <svg
                class="fill-current w-3.5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 18"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.042 7.334a3.958 3.958 0 1 1 7.917 0 3.958 3.958 0 0 1-7.917 0ZM8 4.625a2.708 2.708 0 1 0 0 5.417 2.708 2.708 0 0 0 0-5.417Z"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M.937 6.381A6.906 6.906 0 0 1 7.82.042h.36a6.906 6.906 0 0 1 6.883 6.339 7.453 7.453 0 0 1-1.658 5.33l-3.994 4.885a1.822 1.822 0 0 1-2.821 0L2.595 11.71A7.453 7.453 0 0 1 .937 6.38ZM7.82 1.292a5.656 5.656 0 0 0-5.637 5.192 6.203 6.203 0 0 0 1.38 4.436l3.994 4.884c.23.28.657.28.886 0l3.995-4.885a6.203 6.203 0 0 0 1.38-4.435A5.656 5.656 0 0 0 8.18 1.292h-.36Z"
                />
              </svg>
            </div>
            <p class="text-sm leading-snug lg:text-base leading-22">
              г. Москва
            </p>
          </div>
          <div class="flex items-center min-h-11.5 py-1 border-indigo-300">
            <div
              class="w-15 lg:w-17.5 flex-shrink-0 flex flex-col items-center justify-center pr-5 lg:pr-4 text-gray-300"
            >
              <svg
                class="fill-current h-3.5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.041 3.525v-.974c0-.722.529-1.336 1.242-1.443L6.3.956a11.458 11.458 0 0 1 3.4 0l1.016.152c.714.107 1.242.72 1.242 1.443v.974l1.428.116a2.384 2.384 0 0 1 2.162 1.995 22.605 22.605 0 0 1 0 7.228 2.384 2.384 0 0 1-2.162 1.994l-1.56.126a47.561 47.561 0 0 1-7.653 0l-1.56-.126a2.384 2.384 0 0 1-2.161-1.994 22.607 22.607 0 0 1 0-7.229 2.384 2.384 0 0 1 2.161-1.994l1.428-.116Zm2.444-1.333c1.004-.15 2.025-.15 3.03 0l1.016.153a.208.208 0 0 1 .177.206v.887a47.566 47.566 0 0 0-5.417 0V2.55c0-.104.076-.191.178-.206l1.016-.153ZM4.274 4.761c2.48-.2 4.972-.2 7.452 0l1.56.126c.52.042.944.433 1.028.948.052.321.096.643.133.965a14.598 14.598 0 0 1-12.895 0c.037-.322.082-.644.134-.965a1.134 1.134 0 0 1 1.028-.948l1.56-.126ZM1.44 8.13a15.848 15.848 0 0 0 13.119 0 21.359 21.359 0 0 1-.245 4.533 1.134 1.134 0 0 1-1.028.949l-1.56.125c-2.48.2-4.972.2-7.452 0l-1.56-.125a1.134 1.134 0 0 1-1.028-.95c-.243-1.5-.325-3.02-.246-4.533Z"
                />
              </svg>
            </div>
            <p class="text-sm leading-snug lg:text-base leading-22">
              ООО “Тульский машиностроительный завод”
            </p>
          </div>
        </div>
        <h2 class="text-base font-bold leading-22">На каких станках работал</h2>
        <div class="mt-5">
          <div class="flex items-center">
            <div
              class="w-15 lg:w-17.5 flex-shrink-0 flex flex-col items-center justify-center pr-5 lg:pr-4 text-gray-300"
            >
              <svg
                class="fill-current w-3.5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 19 18"
              >
                <path
                  d="M4.483 2.26A2.486 2.486 0 0 0 2.29 4.422a39.401 39.401 0 0 0 0 9.154 2.486 2.486 0 0 0 2.193 2.163c2.977.333 6.057.333 9.033 0a2.486 2.486 0 0 0 2.193-2.163 39.41 39.41 0 0 0 .216-6.58.2.2 0 0 1 .058-.152l1.04-1.04a.198.198 0 0 1 .338.125 40.902 40.902 0 0 1-.162 7.821c-.215 1.837-1.69 3.276-3.516 3.48a42.512 42.512 0 0 1-9.367 0c-1.826-.204-3.3-1.643-3.516-3.48a40.902 40.902 0 0 1 0-9.503C1.015 2.411 2.49.973 4.316.768a42.502 42.502 0 0 1 9.367 0 3.99 3.99 0 0 1 1.76.64c.1.066.11.21.025.295l-.803.803a.211.211 0 0 1-.25.033 2.487 2.487 0 0 0-.899-.28 41.003 41.003 0 0 0-9.033 0Z"
                  fill="#56A198"
                />
                <path
                  d="M18.03 3.03a.75.75 0 0 0-1.06-1.06L8.5 10.44 6.03 7.97a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l9-9Z"
                  fill="#56A198"
                />
              </svg>
            </div>
            <p class="text-sm leading-snug lg:text-base leading-22">
              СТХF10 eco
            </p>
          </div>
          <div class="flex items-center mt-2.5">
            <div
              class="w-15 lg:w-17.5 flex-shrink-0 flex flex-col items-center justify-center pr-5 lg:pr-4 text-gray-300"
            >
              <svg
                class="fill-current w-3.5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 19 18"
              >
                <path
                  d="M4.483 2.26A2.486 2.486 0 0 0 2.29 4.422a39.401 39.401 0 0 0 0 9.154 2.486 2.486 0 0 0 2.193 2.163c2.977.333 6.057.333 9.033 0a2.486 2.486 0 0 0 2.193-2.163 39.41 39.41 0 0 0 .216-6.58.2.2 0 0 1 .058-.152l1.04-1.04a.198.198 0 0 1 .338.125 40.902 40.902 0 0 1-.162 7.821c-.215 1.837-1.69 3.276-3.516 3.48a42.512 42.512 0 0 1-9.367 0c-1.826-.204-3.3-1.643-3.516-3.48a40.902 40.902 0 0 1 0-9.503C1.015 2.411 2.49.973 4.316.768a42.502 42.502 0 0 1 9.367 0 3.99 3.99 0 0 1 1.76.64c.1.066.11.21.025.295l-.803.803a.211.211 0 0 1-.25.033 2.487 2.487 0 0 0-.899-.28 41.003 41.003 0 0 0-9.033 0Z"
                  fill="#56A198"
                />
                <path
                  d="M18.03 3.03a.75.75 0 0 0-1.06-1.06L8.5 10.44 6.03 7.97a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l9-9Z"
                  fill="#56A198"
                />
              </svg>
            </div>
            <p class="text-sm leading-snug lg:text-base leading-22">DMU50</p>
          </div>
          <div class="flex items-center mt-2.5">
            <div
              class="w-15 lg:w-17.5 flex-shrink-0 flex flex-col items-center justify-center pr-5 lg:pr-4 text-gray-300"
            >
              <svg
                class="fill-current w-3.5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 19 18"
              >
                <path
                  d="M4.483 2.26A2.486 2.486 0 0 0 2.29 4.422a39.401 39.401 0 0 0 0 9.154 2.486 2.486 0 0 0 2.193 2.163c2.977.333 6.057.333 9.033 0a2.486 2.486 0 0 0 2.193-2.163 39.41 39.41 0 0 0 .216-6.58.2.2 0 0 1 .058-.152l1.04-1.04a.198.198 0 0 1 .338.125 40.902 40.902 0 0 1-.162 7.821c-.215 1.837-1.69 3.276-3.516 3.48a42.512 42.512 0 0 1-9.367 0c-1.826-.204-3.3-1.643-3.516-3.48a40.902 40.902 0 0 1 0-9.503C1.015 2.411 2.49.973 4.316.768a42.502 42.502 0 0 1 9.367 0 3.99 3.99 0 0 1 1.76.64c.1.066.11.21.025.295l-.803.803a.211.211 0 0 1-.25.033 2.487 2.487 0 0 0-.899-.28 41.003 41.003 0 0 0-9.033 0Z"
                  fill="#56A198"
                />
                <path
                  d="M18.03 3.03a.75.75 0 0 0-1.06-1.06L8.5 10.44 6.03 7.97a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l9-9Z"
                  fill="#56A198"
                />
              </svg>
            </div>
            <p class="text-sm leading-snug lg:text-base leading-22">
              OkumaVTR100
            </p>
          </div>
        </div>
      </div>
      <div class="px-6 py-7.5 md:p-0">
        <div
          class="rounded-xl shadow-md bg-violet-800 shadow-sm rounded-lg text-white p-6 relative font-bold text-sm lg:text-base leading-snug lg:leading-22 relative"
        >
          Пройти онлайн SkillTest для подбора курса повышения кваливикации
          <button
            class="w-9 h-9 border-2 border-white rounded-full absolute top-1/2 bg-violet-800 transform -translate-y-1/2 left-full -translate-x-1/2 flex flex-col items-center justify-center"
          >
            <svg
              class="fill-current h-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 8 13"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.047 1.026a.906.906 0 0 1 1.281 0L7.162 5.86a.906.906 0 0 1 0 1.281l-4.834 4.834a.906.906 0 0 1-1.281-1.282L5.239 6.5 1.047 2.308a.906.906 0 0 1 0-1.282Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div
      class="md:w-1/2 xl:w-full lg:w-7/12 md:pr-2 md:mr-7.5 pt-5 md:pb-6 md:overflow-auto custom-scroll"
    >
      <div class="bg-white rounded-xl shadow-md">
        <tabs></tabs>
      </div>
      <div class="xl:flex gap-6">
        <div
          class="p-6 bg-white rounded-xl shadow-md mt-6 flex-1 flex flex-col justify-between"
        >
          <div
            class="border-b border-indigo-300 pt-2.5 pb-7.5 mb-3.5 lg:border-0 lg:p-0 lg:mb-10"
          >
            <h2 class="text-lg font-bold text-center">Пройденные курсы</h2>
          </div>
          <responsive-table :rows="courses"></responsive-table>
          <div class="text-center mt-auto">
            <button
              class="inline-flex gap-2 items-center mx-auto font-semibold text-sm lg:pt-7.5"
            >
              Показать еще
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                class="stroke-current w-2.5"
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
        <div
          class="p-6 bg-white rounded-xl shadow-md mt-6 flex-1 flex flex-col justify-between"
        >
          <div
            class="border-b border-indigo-300 pt-2.5 pb-7.5 mb-3.5 lg:border-0 lg:p-0 lg:mb-10"
          >
            <h2 class="text-lg font-bold text-center">Рекомендованные курсы</h2>
          </div>
          <responsive-table :rows="recommendedCourses"></responsive-table>
          <div class="text-center mt-auto">
            <button
              class="inline-flex gap-2 items-center mx-auto font-semibold text-sm lg:pt-7.5"
            >
              Показать еще
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                class="stroke-current w-2.5"
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
      <div class="mt-10 pb-20">
        <div class="flex px-6 items-center justify-between">
          <h2 class="font-bold text-xl">Новости</h2>
          <div class="flex items-center gap-4">
            <button @click="prevSlide" class="hove:bg-indigo-400 w-8 h-8 flex flex-col items-center justify-center text-white border-2 border-white bg-indigo-200 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="fill-current h-2.5" viewBox="0 0 7 12">
                <path fill-rule="evenodd" d="M6.243 11.004a.829.829 0 0 1-1.172 0L.65 6.585a.829.829 0 0 1 0-1.171l4.42-4.42a.829.829 0 0 1 1.172 1.172L2.41 6l3.833 3.834a.829.829 0 0 1 0 1.171Z" clip-rule="evenodd"/>
              </svg>
            </button>
            <div class="font-bold text-lg">
              {{currentSlide}}/<span class="text-gray-300">4</span>
            </div>
            <button @click="nextSlide" class="hove:bg-indigo-400 w-8 h-8 flex flex-col items-center justify-center text-white border-2 border-white bg-indigo-200 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="fill-current h-2.5 transform rotate-180" viewBox="0 0 7 12">
                <path fill-rule="evenodd" d="M6.243 11.004a.829.829 0 0 1-1.172 0L.65 6.585a.829.829 0 0 1 0-1.171l4.42-4.42a.829.829 0 0 1 1.172 1.172L2.41 6l3.833 3.834a.829.829 0 0 1 0 1.171Z" clip-rule="evenodd"/>
              </svg>
            </button>
          </div>
        </div>
        <Splide :options="splideOptions" class="mt-4" ref="splide" @splide:move="handleSlideMove">
          <SplideSlide v-for="slide in slides" :key="slide.id">
            <img :src="slide.src" alt="">
          </SplideSlide>
        </Splide>
      </div>
    </div>
  </div>
</template>

<script>
import Tabs from "@/components/Tabs";
import ResponsiveTable from "@/components/ResponsiveTable";
import { Splide, SplideSlide } from '@splidejs/vue-splide';

export default {
  name: "Home",

  components: {
    Tabs,
    ResponsiveTable,
    Splide,
    SplideSlide,
  },

  data() {
    return {
      courses: [
        {
          id: 1,
          columns: [
            {
              key: "visual",
              label: "Mastering",
              value: "10",
            },
            {
              key: "date",
              label: "Date",
              value: "12/12/20-18/12/20",
            },
            {
              key: "title",
              label: "Course name",
              value: "Поворот плоскости CYKLE800",
            },
            {
              key: "training_center",
              label: "Training center",
              value: "dmg mori rus",
            },
            {
              key: "duration",
              label: "Duration",
              value: "10 часов",
            },
          ],
        },
        {
          id: 1,
          columns: [
            {
              key: "visual",
              label: "Mastering",
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
              key: "date",
              label: "Date",
              value: "12/12/20-18/12/20",
            },
            {
              key: "training_center",
              label: "Training center",
              value: "dmg mori rus",
            },
            {
              key: "duration",
              label: "Duration",
              value: "10 часов",
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
          id: 1,
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
      currentSlide: 1,
      splideOptions: {
        type: 'loop',
        arrows: false,
        padding: '45px',
        gap: '10px',
        fixedWidth: '250px'
      },
      slides: [
        {
          src: "https://api.lorem.space/image/movie?w=250&h=400",
          id: 1
        },
        {
          src: "https://api.lorem.space/image/movie?w=250&h=400",
          id: 2
        },
        {
          src: "https://api.lorem.space/image/movie?w=250&h=400",
          id: 3
        },
        {
          src: "https://api.lorem.space/image/movie?w=250&h=400",
          id: 4
        }
      ]
    };
  },

  methods: {
    nextSlide() {
      this.$refs.splide.go('>')
    },
    prevSlide() {
      this.$refs.splide.go('<')
    },
    handleSlideMove( splide, nextIndex ) {
      this.currentSlide = nextIndex + 1
    }
  }
};
</script>

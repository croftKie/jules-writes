<template>
  <div class="flex justify-center">
    <nav
      class="select-none lg:flex lg:items-stretch w-full md:w-11/12 h-16 m-4 rounded-lg"
    >
      <div class="flex flex-no-shrink items-center h-full">
        <div class="flex flex-col">
          <RouterLink
            to="/"
            class="brand flex-no-grow flex-no-shrink relative p-2 font-bold text-BLACK no-underline flex items-center gap-10"
          >
            <img class="h-10" src="../../assets/online.png" alt="" />
            <p class="text-xl">Jules Writes | Expert Copywriter</p></RouterLink
          >
        </div>
        <button
          class="block lg:hidden cursor-pointer ml-auto relative w-12 h-12 p-4"
        >
          <svg
            class="fill-current text-neutral-100"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            class="fill-current text-neutral-100"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"
            />
          </svg>
        </button>
      </div>
      <div class="lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow">
        <div class="lg:flex lg:items-stretch lg:justify-end ml-auto gap-5">
          <RouterLink
            to="/projects"
            class="button2 flex-no-grow flex-no-shrink relative py-1 px-4 leading-normal font-bold text-BLACK no-underline flex items-center"
            >My Projects</RouterLink
          >
          <RouterLink
            to="/about"
            class="button2 flex-no-grow flex-no-shrink relative py-1 px-4 leading-normal font-bold text-BLACK no-underline flex items-center"
            >About Me</RouterLink
          >
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "NavBar",
};
</script>

<style>
.button2 {
  height: 40px;
  border-radius: 9px;
  background: #ebebeb;
  box-shadow: 5px 5px 12px #d4d4d4, -5px -5px 12px #ffffff;
}

.button2:hover {
  color: #f4a261;
}

.button2:active {
  border-radius: 9px;
  background: #ebebeb;
  box-shadow: inset 5px 5px 12px #d4d4d4, inset -5px -5px 12px #ffffff;
}
</style>

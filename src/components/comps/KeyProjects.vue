<template>
  <div class="py-20 flex justify-center bg-ORANGE">
    <div class="container">
      <div class="mx-auto max-w-4xl sm:text-center w-5/6">
        <p
          class="text-4xl font-semibold tracking-widest text-g uppercase text-neutral-100"
        >
          Key Projects
        </p>
        <div class="flex justify-center">
          <p class="md:w-2/3 mt-6 text-lg font-medium text-gray-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nam
            mollitia ex veritatis, corrupti non veniam, tenetur magni incidunt
            aliquam perferendis inventore. Quidem numquam rerum, ut omnis
            distinctio officia corporis!
          </p>
        </div>
      </div>

      <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-16">
        <div class="flex justify-center">
          <div class="card p-7 rounded-xl bg-white w-5/6">
            <h3 class="text-xl font-semibold mb-7">Project One</h3>
            <p
              class="font-medium leading-7 text-gray-500 mb-6 dark:text-gray-400"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatem libero aliquid hic vero veniam quidem obcaecati ipsam
              illo, necessitatibus quae beatae. Labore quasi odit possimus magni
              qui beatae non expedita?
            </p>
            <RouterLink
              to="/project"
              class="button py-3 flex items-center justify-center w-full font-semibold rounded-md bg-white hover:bg-ORANGE hover:text-white text-black transition-all duration-500"
              >View Project
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                class="h-5 w-5 ms-3"
              >
                <path
                  fill="currentColor"
                  d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                />
              </svg>
            </RouterLink>
          </div>
        </div>
        <div class="flex justify-center">
          <div class="card p-7 rounded-xl bg-white w-5/6">
            <h3 class="text-xl font-semibold mb-7">Project Two</h3>
            <p
              class="font-medium leading-7 text-gray-500 mb-6 dark:text-gray-400"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              quae cum laudantium eum, repellat esse ipsa quibusdam natus
              deleniti consectetur at recusandae ex eaque atque assumenda sed
              est voluptatibus? Sit.
            </p>
            <RouterLink
              to="/project"
              class="button py-3 flex items-center justify-center w-full font-semibold rounded-md bg-white hover:bg-ORANGE hover:text-white text-black transition-all duration-500"
              >View Project
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                class="h-5 w-5 ms-3"
              >
                <path
                  fill="currentColor"
                  d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                />
              </svg>
            </RouterLink>
          </div>
        </div>
        <div class="flex justify-center">
          <div class="card p-7 rounded-xl bg-white w-5/6">
            <h3 class="text-xl font-semibold mb-7">Project Three</h3>
            <p
              class="font-medium leading-7 text-gray-500 mb-6 dark:text-gray-400"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              earum ipsum possimus ut consequuntur itaque a velit ipsa nesciunt
              expedita! Maxime id nisi obcaecati modi sit esse tenetur? Nobis,
              laboriosam.
            </p>
            <RouterLink
              to="/project"
              class="button py-3 flex items-center justify-center w-full font-semibold rounded-md bg-white hover:bg-ORANGE hover:text-white text-black transition-all duration-500"
              >View Project
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                class="h-5 w-5 ms-3"
              >
                <path
                  fill="currentColor"
                  d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                />
              </svg>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "KeyProjects",
  components: {},
};
</script>

<style>
.card {
  border-radius: 9px;
  box-shadow: inset 5px 5px 12px #d4d4d4, inset -5px -5px 12px #ffffff;
}

.button {
  height: 40px;
  border-radius: 9px;
  background: #ececec;
  box-shadow: 5px 5px 12px #d4d4d4, -5px -5px 12px #ffffff;
}

.button:hover {
  color: black;
}

.button:active {
  border-radius: 9px;
  background: #f4a261;
  box-shadow: inset 5px 5px 12px #dc9257, inset -5px -5px 12px #ffb26b;
}
</style>

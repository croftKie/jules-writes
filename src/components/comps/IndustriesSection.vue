<template>
  <section class="ray-50">
    <div class="py-10 sm:py-16 block lg:py-24 relative bg-opacity-50 z-40">
      <div
        class="relative mx-auto h-full px-4 pb-20 md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8"
      >
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
          <div class="max-w-xl mx-auto text-center">
            <div class="inline-flex px-4 py-1.5 mx-auto rounded-full">
              <p
                class="text-4xl font-semibold tracking-widest text-g uppercase"
              >
                Industries
              </p>
            </div>
            <p
              class="mt-4 text-base leading-relaxed text-gray-600 group-hover:text-neutral-100"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
              autem dicta, commodi, ea inventore quisquam expedita culpa minus
              deleniti aut nesciunt harum ad, rerum sit porro odit officia
              perferendis sunt.
            </p>
          </div>
          <div class="grid grid-cols-1 gap-2 mt-12 sm:grid-cols-3 lg:mt-20">
            <div
              class="icard transition-all duration-500 cursor-default bg-white hover:bg-ORANGE hover:shadow-xl m-2 p-4 relative z-40 group"
            >
              <div
                class="absolute bg-orange-500/50 top-0 left-0 w-24 h-1 z-30 transition-all duration-200 group-hover:bg-white group-hover:w-1/2"
              ></div>
              <div class="py-2 px-9 relative">
                <img class="h-16" src="../../assets/online-shop.png" alt="" />
                <h3
                  class="mt-8 text-lg font-semibold text-black group-hover:text-neutral-100"
                >
                  Ecommerce
                </h3>
                <p
                  class="mt-4 text-base text-gray-600 group-hover:text-neutral-100"
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo,
                  veniam consectetur corrupti eveniet ut quisquam ab? Quos harum
                  quae porro illum dolorum repellendus laborum esse,
                  necessitatibus nostrum, laboriosam in sapiente!
                </p>
              </div>
            </div>
            <div
              class="icard transition-all duration-500 cursor-default bg-white hover:bg-ORANGE hover:shadow-xl m-2 p-4 relative z-40 group"
            >
              <div
                class="absolute bg-orange-500/50 top-0 left-0 w-24 h-1 z-30 transition-all duration-200 group-hover:bg-white group-hover:w-1/2"
              ></div>
              <div class="py-2 px-9 relative">
                <img class="h-16" src="../../assets/programmer.png" alt="" />

                <h3
                  class="mt-8 text-lg font-semibold text-black group-hover:text-neutral-100"
                >
                  Freelancers
                </h3>
                <p
                  class="mt-4 text-base text-gray-600 group-hover:text-neutral-100"
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Tempora, omnis sunt voluptate magnam tempore maiores officia
                  in iusto quaerat rem veniam, qui odit perferendis delectus
                  optio ipsam doloribus porro! Nihil?
                </p>
              </div>
            </div>
            <div
              class="icard transition-all duration-500 cursor-default bg-white hover:bg-ORANGE hover:shadow-xl m-2 p-4 relative z-40 group"
            >
              <div
                class="absolute bg-orange-500/50 top-0 left-0 w-24 h-1 z-30 transition-all duration-200 group-hover:bg-white group-hover:w-1/2"
              ></div>
              <div class="py-2 px-9 relative">
                <img
                  class="h-16"
                  src="../../assets/public-relation.png"
                  alt=""
                />
                <h3
                  class="mt-8 text-lg font-semibold text-black group-hover:text-neutral-100"
                >
                  Public Relations
                </h3>
                <p
                  class="mt-4 text-base text-gray-600 group-hover:text-neutral-100"
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Cumque placeat id voluptatum, numquam reiciendis, nulla
                  molestiae repudiandae eaque facilis explicabo praesentium
                  tempore, atque esse est. Architecto perferendis sit explicabo
                  rerum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "IndustriesSection",
  components: {},
};
</script>

<style>
.icard {
  border-radius: 9px;
  background: #ebebeb;
  box-shadow: inset 5px 5px 12px #d4d4d4, inset -5px -5px 12px #ffffff;
}
</style>

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
                My Services
              </p>
            </div>
            <p
              class="mt-4 text-base leading-relaxed text-gray-600 group-hover:text-neutral-100"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque,
              aut. Corrupti natus unde nulla sed dolorum neque facere
              consectetur sit? Nihil rerum numquam tempore amet sequi suscipit
              autem quo reiciendis.
            </p>
          </div>
          <div class="grid grid-cols-1 gap-2 mt-12 sm:grid-cols-1 lg:mt-20">
            <div class="card2 m-2 p-4">
              <div
                class="absolute bg-orange-500/50 top-0 left-0 w-24 h-1 z-30 transition-all duration-200 group-hover:bg-white group-hover:w-1/2"
              ></div>
              <div class="py-2 px-9 relative">
                <img class="h-16" src="../../assets/copywriter.png" alt="" />
                <h3
                  class="mt-8 text-lg font-semibold text-black group-hover:text-neutral-100"
                >
                  Copywriting
                </h3>
                <p
                  class="mt-4 text-base text-gray-600 group-hover:text-neutral-100"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem quas maiores ex voluptates a, dolores eos aut,
                  magni nihil sequi nemo, quae ipsum ut eum porro obcaecati.
                  Corporis, ullam sunt.
                </p>
                <ul>
                  <li>Blogs and Articles</li>
                  <li>Blogs and Articles</li>
                  <li>Blogs and Articles</li>
                  <li>Blogs and Articles</li>
                  <li>Blogs and Articles</li>
                </ul>
              </div>
            </div>
            <div class="card2 m-2 p-4">
              <div
                class="absolute bg-orange-500/50 top-0 left-0 w-24 h-1 z-30 transition-all duration-200 group-hover:bg-white group-hover:w-1/2"
              ></div>
              <div class="py-2 px-9 relative">
                <img class="h-16" src="../../assets/copywriter.png" alt="" />
                <h3
                  class="mt-8 text-lg font-semibold text-black group-hover:text-neutral-100"
                >
                  Social Media
                </h3>
                <p
                  class="mt-4 text-base text-gray-600 group-hover:text-neutral-100"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem quas maiores ex voluptates a, dolores eos aut,
                  magni nihil sequi nemo, quae ipsum ut eum porro obcaecati.
                  Corporis, ullam sunt.
                </p>
                <ul>
                  <li>Blogs and Articles</li>
                  <li>Blogs and Articles</li>
                  <li>Blogs and Articles</li>
                  <li>Blogs and Articles</li>
                  <li>Blogs and Articles</li>
                </ul>
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
  name: "ServicesSection",
  components: {},
};
</script>

<style>
.card2 {
  border-radius: 9px;
  background: #ebebeb;
  box-shadow: 5px 5px 12px #d4d4d4, -5px -5px 12px #ffffff;
}
</style>

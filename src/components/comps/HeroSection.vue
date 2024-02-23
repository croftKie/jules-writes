<template>
  <section class="h-120 mt-24 flex items-center justify-center w-full">
    <div class="flex flex-col w-full">
      <div
        class="flex flex lg:flex-row items-center justify-center gap-10 mb-24"
      >
        <div class="hero mb-8 w-5/6 lg:mb-0 lg:w-2/5 p-[5%]">
          <h1 class="text-3xl font-semibold mb-2 text-justify">
            <span class="text-ORANGE">Welcome to Jules Studio.</span>
          </h1>
          <h2 class="text-2xl font-semibold mb-2 text-left">
            Expert Copywriting, Social Media Management, and AI Content Creation.
          </h2>
          <p class="text-justify font-light">
            Are you searching for captivating content that engages your audience and boosts your brand's visibility? 
            <br/><br/>
            Look no further. I'm Julia, a Copywriter and Social Media Manager with over five years of experience specializing in SEO, article writing, blogs, and social media content.
          </p>
        </div>
        <div class="mb-8 w-5/6 lg:mb-0 lg:w-2/5 p-[1%] flex justify-center">
          <img class="hero w-[70%] rounded-md" src="../../assets/hero.jpg" alt="">
        </div>
      </div>
      <div
        class="flex flex-col md:flex-row w-full gap-10 mt-12 bg-ORANGE px-48 py-14"
      >
        <div class="item p-6 rounded-lg">
          <p class="text-lg text-neutral-100 italic">
            "Jules manages all of our social media posts and blog posts for Tide
            Chaser and we couldn't be happier! Hire her!"
          </p>
          <div class="flex mt-4 justify-end">
            <div class="md:text-lg text-WHITE">
              <div class="flex flex-row">
                <p class="font-semibold mr-2">Kieran Croft</p>
              </div>

              <p class="text-sm">
                Owner |
                <a
                  href="#"
                  class="hover:underline hover:cursor-pointer hover:text-neutral-100 transition-colors duration-75"
                >
                  Tide Chaser
                </a>
              </p>
            </div>
          </div>
        </div>
        <div class="item p-6 rounded-lg">
          <p class="text-lg text-neutral-100 italic">
            "Jules manages all of our social media posts and blog posts for Tide
            Chaser and we couldn't be happier! Hire her!"
          </p>
          <div class="flex mt-4 justify-end">
            <div class="md:text-lg text-WHITE">
              <div class="flex flex-row">
                <p class="font-semibold mr-2">Kieran Croft</p>
              </div>

              <p class="text-sm">
                Owner |
                <a
                  href="#"
                  class="hover:underline hover:cursor-pointer hover:text-neutral-100 transition-colors duration-75"
                >
                  Tide Chaser
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "HeroSection",
};
</script>

<style>
.hero {
  border-radius: 9px;
  background: #ebebeb;
  box-shadow: inset 5px 5px 12px #d4d4d4, inset -5px -5px 12px #ffffff;
}

.item {
  border-radius: 9px;
  background: #f4a261;
  box-shadow: inset 5px 5px 12px #dc9257, inset -5px -5px 12px #ffb26b;
}
</style>

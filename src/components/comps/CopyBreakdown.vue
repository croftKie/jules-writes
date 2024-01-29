<template>
  <section class="h-fit my-24 flex flex-col items-center">
    <!-- Project header and tldr -->
    <div class="h-96 container mx-auto px-4">
      <div class="flex flex-col lg:flex-row items-center justify-around gap-10">
        <div class="mb-8 w-5/6 lg:mb-0 lg:w-1/3">
          <h2 class="text-4xl font-semibold mb-2 text-justify">
            Press Release Project
          </h2>
          <p class="text-2xl text-justify">CLIENT NAME</p>
        </div>
        <div class="max-w-xl w-full">
          <div
            class="bg-ORANGE p-6 rounded-lg border-ORANGE border-4 shadow-[inset_0_0_1px_5px_#FFF]"
          >
            <h4>Breakdown</h4>
            <ul>
              <li>Item One</li>
              <li>Item One</li>
              <li>Item One</li>
              <li>Item One</li>
              <li>Item One</li>
            </ul>
            <button>View Project</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Project description -->
    <div class="h-96 container mx-auto px-4">
      <div class="flex flex-col lg:flex-row items-center justify-around gap-10">
        <div class="mb-8 w-5/6 lg:mb-0 lg:w-1/3">
          <h2 class="text-3xl font-semibold mb-2 text-justify">
            Project Requirements
          </h2>
          <h3 class="text-2xl">What my client needed</h3>
        </div>
        <div class="mb-8 w-5/6 lg:mb-0 lg:w-1/3">
          <p class="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem, explicabo. Explicabo nemo cumque consectetur
            aliquam, nam dolores sequi id illo nesciunt quis ratione nisi magni.
            Repellat culpa voluptatum iure quae?
          </p>
          <p class="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            accusamus quasi vel facilis. Amet cumque voluptatem minima iste nisi
            ratione quidem sint, voluptate nam officiis? Tempore eligendi
            excepturi fugit vel.
          </p>
          <p class="text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio sint
            voluptatum consectetur tenetur, beatae nostrum error illum deserunt
            debitis magnam sapiente nemo repellendus inventore, sed deleniti
            recusandae ratione aut saepe.
          </p>
        </div>
      </div>
    </div>
    <!-- Project link and conclusion -->
    <div class="h-96 container mx-auto px-4">
      <div class="flex flex-col lg:flex-row items-center justify-around gap-10">
        <div class="mb-8 w-5/6 lg:mb-0 lg:w-1/3">
          <iframe
            class="h-96 w-full bg-ORANGE rounded-lg"
            src=""
            frameborder=""
          ></iframe>
        </div>
        <div class="mb-8 w-5/6 lg:mb-0 lg:w-1/3">
          <h2 class="text-3xl font-semibold mb-2 text-end">
            Project Conclusions
          </h2>
          <h3 class="text-2xl text-end">What I delivered</h3>

          <p class="text-end">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus possimus sit natus, vitae totam saepe laboriosam eos
            error nesciunt rem officiis repellat, iusto labore odio accusamus
            tempora ab enim dolorem!
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "CopyBreakdown",
};
</script>

<template>
  <div class="mx-auto mt-12">
    <div class="flex items-center justify-center p-12">
      <div class="formCard p-10 mx-auto w-full max-w-[550px]">
        <p
          class="text-4xl font-semibold tracking-widest text-g uppercase text-black"
        >
          Get in Touch
        </p>
        <form class="mt-8">
          <div class="mb-5">
            <label
              for="name"
              class="mb-3 block text-base text-orange-400 font-bold"
            >
              Full Name:
            </label>
            <input
              ref="name"
              type="text"
              name="name"
              id="name"
              placeholder="John Smith"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-orange-300 focus:shadow-md"
            />
          </div>
          <div class="mb-5">
            <label
              for="email"
              class="mb-3 block text-base text-orange-400 font-bold"
            >
              Email Address
            </label>
            <input
              ref="email"
              type="email"
              name="email"
              id="email"
              placeholder="example@domain.com"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-orange-300 focus:shadow-md"
            />
          </div>
          <div class="mb-5">
            <label
              for="subject"
              class="mb-3 block text-base text-orange-400 font-bold"
            >
              Subject
            </label>
            <input
              ref="subject"
              type="text"
              name="subject"
              id="subject"
              placeholder="Enter your subject"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-orange-300 focus:shadow-md"
            />
          </div>
          <div class="mb-5">
            <label
              for="message"
              class="mb-3 block text-base text-orange-400 font-bold"
            >
              Message
            </label>
            <textarea
              ref="message"
              rows="4"
              name="message"
              id="message"
              placeholder="Type your message"
              class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-orange-300 focus:shadow-md"
            ></textarea>
          </div>
          <div>
            <button
              class="hover:shadow-form rounded-md bg-ORANGE py-3 px-8 text-base font-semibold text-neutral-100 outline-none"
              @click="handleSubmit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    <footer
      class="p-4 md:flex md:items-center md:justify-between md:p-6 h-full pb-12"
    >
      <span class="text-sm text-black sm:text-center dark:text-gray-400"
        >© 2023
        <a href="https://flowbite.com" class="hover:underline" target="_blank"
          >Jules Writes</a
        >. All Rights Reserved.
      </span>
      <ul class="flex flex-wrap items-center mt-3 sm:mt-0 gap-10">
        <li>
          <RouterLink
            to="/projects"
            class="button2 flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal font-bold text-BLACK no-underline flex items-center hover:text-WHITE"
            >My Projects</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to="/about"
            class="button2 flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal font-bold text-BLACK no-underline flex items-center hover:text-WHITE"
            >About Me</RouterLink
          >
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
import emailjs from "@emailjs/browser";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { ref } from "vue";

export default {
  name: "FooterSection",
  components: {},
  setup() {
    const name = ref(null);
    const email = ref(null);
    const subject = ref(null);
    const message = ref(null);

    const handleSubmit = (e) => {
      e.preventDefault();
      const formResults = {
        name: name.value.value,
        email: email.value.value,
        message: message.value.value,
      };

      emailjs
        .send(
          "service_l2atc6j",
          "template_rka7amt",
          formResults,
          "ESWHaMfXoz72ceSCa"
        )
        .then(
          (response) => {
            toast.success("Email sent - I'll be in touch soon!");
            name.value = "";
            email.value = "";
            message.value = "";
            console.log(response);
          },
          (err) => {
            toast.warn("Looks like something went wrong, try again.");
            console.log(err);
          }
        );
    };
    return { handleSubmit, name, email, subject, message };
  },
};
</script>

<style>
.formCard {
  border-radius: 9px;
  background: #ebebeb;
  box-shadow: 5px 5px 12px #d4d4d4, -5px -5px 12px #ffffff;
}

input,
textarea {
  border-radius: 9px;
  background: #ebebeb;
  box-shadow: inset 5px 5px 12px #d4d4d4, inset -5px -5px 12px #ffffff;
}
</style>

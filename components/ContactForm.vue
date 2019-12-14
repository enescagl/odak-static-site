<template>
  <div>
    <h2 class="text-sm text-gray-600 font-medium">{{$t("contact_us")}}</h2>
    <form class="flex flex-col mt-4" action>
      <label class="text-xs text-gray-600 font-medium" for="name">{{$t("name")}}</label>
      <input
        class="mt-2 py-1 px-2 max-w-sm rounded-sm shadow-inner text-xs text-gray-600 font-medium placeholder-gray-400 lg:max-w-full"
        :placeholder="$t('name')"
        v-model="name"
        type="text"
        name="name"
        id="name"
      />
      <label class="mt-4 text-xs text-gray-600 font-medium" for="email">{{$t("email")}}</label>
      <input
        class="mt-2 py-1 px-2 max-w-sm rounded-sm shadow-inner text-xs text-gray-600 font-medium placeholder-gray-400 lg:max-w-full"
        :placeholder="$t('email')"
        v-model="email"
        type="email"
        name="email"
        id="email"
      />
      <label class="mt-4 text-xs text-gray-600 font-medium" for="subject">{{$t("subject")}}</label>
      <input
        class="mt-2 py-1 px-2 max-w-sm rounded-sm shadow-inner text-xs text-gray-600 font-medium placeholder-gray-400 lg:max-w-full"
        :placeholder="$t('subject')"
        v-model="subject"
        type="text"
        name="subject"
        id="subject"
      />
      <label class="mt-4 text-xs text-gray-600 font-medium" for="message">{{$t("message")}}</label>
      <textarea
        class="resize-none mt-2 py-1 px-2 max-w-sm rounded-sm shadow-inner text-xs text-gray-600 font-medium placeholder-gray-400 lg:max-w-full"
        :placeholder="$t('message')"
        v-model="message"
        name="message"
        id="message"
        cols="30"
        rows="10"
      ></textarea>
      <button
        class="w-1/4 ml-auto mt-4 py-1 px-auto rounded-sm shadow text-xs text-white bg-gray-500 font-medium placeholder-gray-400"
        type="submit"
      >{{$t("submit")}}</button>
    </form>
  </div>
</template>
<i18n>
{
    "tr":{
    "contact_us":"Bize Ulaşın",
    "name": "İsim",
    "email": "Email",
    "subject": "Konu",
    "message": "Mesaj",
    "submit": "Gönder"
    },
    "en":{
    "contact_us":"Contact Us",
    "name": "Name",
    "email": "Email",
    "subject": "Subject",
    "message": "Message",
    "submit": "Submit"
    }
}
</i18n>

<script>
import { validationMixin } from "vuelidate";
import { required, email, minLength } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      message: "",
      submitting: false,
      isSubmited: false,
      error: false
    };
  },
  validations: {
    name: {
      required,
      minLength: 3
    },
    email: {
      required,
      email
    },
    subject: {
      required
    },
    message: {
      required,
      minLength: 10
    }
  },
  methods: {
    validate() {
      if (this.$v.$error || this.submitting) {
        return;
      }
    },
    async submitForm() {
      validate();
      this.submitting = true;
      this.error = false;
      try {
        await this.$axios.$post("", {
          name: this.name,
          email: this.email,
          subject: this.subject,
          message: this.message
        });
        this.submitting = false;
        this.isSubmited = true;
        await new Promise(resolve => setTimeout(resolve, 10000));
      } catch (e) {
        this.submitting = false;
        this.error = true;
        console.error(e);
      }
    }
  }
};
</script>

<style></style>

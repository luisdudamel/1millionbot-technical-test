<script setup lang="ts">
import SendButton from "../SendButton/SendButton.vue"
import { ref } from "vue"

const text = ref("")
</script>

<template>
  <section class="chat-footer__container">
    <input class="chat-input" v-model.trim="text" placeholder="Ask me anything..." />
    <SendButton />
  </section>
</template>

<style lang="scss">
@import "./ChatFooter.scss";
</style>

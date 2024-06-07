<script setup lang="ts">
import type { ChatMessage } from "@/types"
import SendButton from "../SendButton/SendButton.vue"
import { ref } from "vue"
const emit = defineEmits<{
  updateList: [message: ChatMessage]
}>()

const messageText = ref("")

const updateMessageList = () => {
  emit("updateList", {
    messageText: messageText.value,
    messageAuthor: "user"
  })
  messageText.value = ""
}
</script>

<template>
  <section>
    <form class="chat-footer__container" @submit.prevent="() => updateMessageList()">
      <label hidden for="message">Ask the chatbot anything</label>
      <input
        id="message"
        type="text"
        class="chat-input"
        v-model.trim="messageText"
        placeholder="Ask me anything..."
      />
      <SendButton />
    </form>
  </section>
</template>

<style lang="scss">
@import "./ChatFooter.scss";
</style>

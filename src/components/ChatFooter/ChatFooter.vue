<script setup lang="ts">
import type { UserMessage } from "@/types"
import SendButton from "../SendButton/SendButton.vue"
import { computed, ref } from "vue"
const emit = defineEmits<{
  updateList: [message: UserMessage]
}>()

const messageText = ref("")
const isButtonDisabled = computed(() => {
  return messageText.value.length === 0
})

const generateUserMessage = () => {
  emit("updateList", {
    messageText: messageText.value,
    messageAuthor: "user"
  })
  messageText.value = ""
}
</script>

<template>
  <section>
    <form class="chat-footer__container" @submit.prevent="() => generateUserMessage()">
      <label hidden for="message">Ask the chatbot anything</label>
      <input
        autocomplete="off"
        id="message"
        type="text"
        class="chat-input"
        v-model.trim="messageText"
        placeholder="Ask me anything..."
      />
      <SendButton :isButtonDisabled="isButtonDisabled" />
    </form>
  </section>
</template>

<style lang="scss">
@import "./ChatFooter.scss";
</style>

<script setup lang="ts">
import { ref } from "vue"
import ChatLayout from "../ChatLayout/ChatLayout.vue"

const isChatOpen = ref(false)

const handleChatVisibility = () => {
  isChatOpen.value = !isChatOpen.value
}
</script>

<template>
  <main class="general-layout__container">
    <ChatLayout
      :class="`${!isChatOpen ? 'chat-hidden' : ''}`"
      @minimize-chat="handleChatVisibility()"
    />
    <div :class="`chat-agent-bubble__dialog ${isChatOpen ? 'bubble-hidden' : ''}`">
      Hi, I'm Leia! Need help?
    </div>
    <button :class="`chat-agent-bubble ${isChatOpen ? 'bubble-hidden' : ''}`">
      <img
        @click="handleChatVisibility()"
        class="chat-agent-bubble__avatar"
        width="100"
        src="img/chatbotavatar.png"
        alt=""
      />
    </button>
  </main>
</template>

<style lang="scss">
@import "./GeneralLayout.scss";
</style>

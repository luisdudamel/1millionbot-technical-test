<script setup lang="ts">
import { ref } from "vue"
import ChatLayout from "../ChatLayout/ChatLayout.vue"

const isChatOpen = ref(true)

const handleChatVisibility = () => {
  isChatOpen.value = !isChatOpen.value
}
</script>

<template>
  <main class="general-layout__container">
    <ChatLayout :class="`${!isChatOpen ? 'hidden' : ''}`" @minimize-chat="handleChatVisibility()" />
  </main>
</template>

<style lang="scss">
@import "./GeneralLayout.scss";
</style>

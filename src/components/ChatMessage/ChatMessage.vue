<script setup lang="ts">
import type { ChatMessage } from "../../types"
interface ChatMessageProps extends ChatMessage {}

defineProps<ChatMessageProps>()
</script>

<template>
  <div class="chat-message__container" :class="'chat-message__container--' + messageAuthor">
    <p class="chat-message__text">
      {{ messageText }}
    </p>
  </div>
</template>

<style lang="scss">
@import "./ChatMessage.scss";
</style>

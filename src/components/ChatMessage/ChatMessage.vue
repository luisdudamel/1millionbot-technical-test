<script setup lang="ts">
import type { ChatMessage } from "../../types"

defineProps<ChatMessage>()
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

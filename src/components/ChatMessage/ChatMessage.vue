<script setup lang="ts">
import type { ChatMessage } from "../../types"
import ImageMessage from "../ImageMesage/ImageMessage.vue"
defineProps<ChatMessage>()
</script>

<template>
  <div
    v-if="imageMessage"
    class="chat-message__container"
    :class="'chat-message__container--' + messageAuthor + ` ${imageMessage ? 'image-message' : ''}`"
  >
    <p class="chat-message__text">
      {{ messageText }}
    </p>
    <ImageMessage />
  </div>

  <div v-else class="chat-message__container" :class="'chat-message__container--' + messageAuthor">
    <p class="chat-message__text">
      {{ messageText }}
    </p>
  </div>
</template>

<style lang="scss">
@import "./ChatMessage.scss";
</style>

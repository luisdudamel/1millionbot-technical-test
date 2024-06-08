<script setup lang="ts">
import type { ChatMessage } from "@/types"

defineProps<ChatMessage>()
</script>

<template>
  <div class="action-message__container">
    <div class="action-message__icon">
      <i class="fa-solid fa-question"></i>
    </div>
    <p class="action-message">
      {{ messageText }}
    </p>
  </div>
</template>

<style lang="scss">
@import "./ActionMessage.scss";
</style>

<script setup lang="ts">
import type { ChatAgent } from "@/types"
defineEmits(["minimize-chat", "open-options"])
defineProps<ChatAgent>()
</script>

<template>
  <section class="chat-header__container">
    <div class="agent-info">
      <img
        class="agent-info__avatar"
        width="45"
        :src="`/img/${avatarUrl}`"
        :alt="`Profile picture of chat agent ${name}`"
      />
      <span class="agent-info__name">{{ name }}</span>
    </div>
    <div class="chat-actions">
      <button
        @click="$emit('minimize-chat')"
        class="chat-actions__button"
        aria-label="Minimize chat"
      >
        <img src="/img/minimize-chat.png" alt="Two arrows facing down icon" />
      </button>
      <button
        @click="$emit('open-options')"
        class="chat-actions__button"
        aria-label="Open chat options"
      >
        <img src="/img/threedots.png" alt="Three dots icon" />
      </button>
    </div>
  </section>
</template>

<style lang="scss">
@import "./ChatHeader.scss";
</style>

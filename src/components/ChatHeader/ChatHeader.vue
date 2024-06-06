<script setup lang="ts">
import type { ChatAgent } from "@/types"
defineProps<ChatAgent>()
</script>

<template>
  <aside class="chat-header__container">
    <div class="agent-info">
      <img
        class="agent-info__avatar"
        width="45"
        :src="`/img/${avatarUrl}`"
        alt="Profile picture of current chat agent"
      />
      <span class="agent-info__name">{{ name }}</span>
    </div>
    <div class="chat-actions">
      <button class="chat-actions__button">
        <img src="/img/minimize-chat.png" alt="" />
      </button>
      <button class="chat-actions__button">
        <img src="/img/threedots.png" alt="" />
      </button>
    </div>
  </aside>
</template>

<style lang="scss">
@import "./ChatHeader.scss";
</style>

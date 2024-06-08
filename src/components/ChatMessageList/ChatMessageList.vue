<script setup lang="ts">
import ChatMessage from "../ChatMessage/ChatMessage.vue"
import type { ChatMessage as ChatMessageType } from "../../types"

defineProps<{ messageList: ChatMessageType[] }>()
</script>

<template>
  <section class="chat-container">
    <ul class="chat-message-list">
      <li
        :ref="
          (element) => {
            ;(element as HTMLElement).scrollIntoView()
          }
        "
        v-for="message in messageList"
        :class="`chat-message--${message.messageAuthor === 'user' ? 'user' : 'agent'}`"
        :key="message.id"
      >
        <ChatMessage v-bind="message" />
      </li>
    </ul>
  </section>
</template>

<style lang="scss">
@import "./ChatMessageList.scss";
</style>

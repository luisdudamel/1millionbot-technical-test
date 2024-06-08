<script setup lang="ts">
import ChatMessage from "../ChatMessage/ChatMessage.vue"
import ActionMessage from "../ActionMessage/ActionMessage.vue"
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
        :class="`chat-message--${message.messageAuthor === 'user' ? 'user' : 'agent'} ${message.actionMessage ? 'action-message' : ''}`"
        :key="message.id"
      >
        <ActionMessage v-if="message.actionMessage" v-bind="message" />
        <ChatMessage v-else v-bind="message" />
      </li>
    </ul>
  </section>
</template>

<style lang="scss">
@import "./ChatMessageList.scss";
</style>

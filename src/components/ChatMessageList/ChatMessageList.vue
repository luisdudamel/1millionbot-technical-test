<script setup lang="ts">
import ChatMessage from "../ChatMessage/ChatMessage.vue"
import ActionMessage from "../ActionMessage/ActionMessage.vue"
import type { ChatMessage as ChatMessageType, UserMessage } from "../../types"

defineProps<{ messageList: ChatMessageType[]; isAgentTyping: boolean; agentName: string }>()
defineEmits<{
  "update-list": [UserMessage]
}>()
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
        <ActionMessage
          v-if="message.actionMessage"
          v-bind="message"
          @click="
            $emit('update-list', {
              messageAuthor: 'user',
              messageText: message.messageText
            })
          "
        />
        <ChatMessage v-else v-bind="message" />
      </li>
    </ul>
    <div
      :ref="
        (element) => {
          ;(element as HTMLElement).scrollIntoView()
        }
      "
      class="is-typing-container"
    >
      {{ isAgentTyping ? agentName + " is typing..." : "" }}
    </div>
  </section>
</template>

<style lang="scss">
@import "./ChatMessageList.scss";
</style>

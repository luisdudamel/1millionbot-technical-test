<script setup lang="ts">
import { mockAgent } from "../../utils/mocks/mockdata"
import ChatFooter from "../ChatFooter/ChatFooter.vue"
import ChatHeader from "../ChatHeader/ChatHeader.vue"
import ChatMessageList from "../ChatMessageList/ChatMessageList.vue"
import { ref } from "vue"
import type { ChatMessage, UserMessage } from "@/types"
import { addMessageToList, generateAgentResponse } from "../../utils/functions"

const messageList = ref<ChatMessage[]>([])
const isAgentTyping = ref(false)
let agentResponseTimer: NodeJS.Timeout | null = null
let agentTypingTimer: NodeJS.Timeout | null = null

const handleConversation = (incomingMessage: UserMessage) => {
  if (agentResponseTimer && agentTypingTimer) {
    clearTimeout(agentResponseTimer)
    clearTimeout(agentTypingTimer)
  }

  const timestamp = Date.now()

  addMessageToList(incomingMessage, timestamp, messageList)
  agentTypingTimer = setTimeout(() => {
    isAgentTyping.value = true
  }, 500)
  agentResponseTimer = setTimeout(() => {
    generateAgentResponse(messageList)
    agentResponseTimer = null
    isAgentTyping.value = false
  }, 1500)
}
</script>

<template>
  <aside class="chat-layout__container">
    <ChatHeader v-bind="mockAgent" />
    <ChatMessageList :messageList="messageList" />
    <div v-if="isAgentTyping" class="is-typing-container">{{ mockAgent.name }} is typing..</div>
    <ChatFooter
      @updateList="
        (message) => {
          handleConversation(message)
        }
      "
    />
  </aside>
</template>

<style lang="scss">
@import "./ChatLayout.scss";
</style>
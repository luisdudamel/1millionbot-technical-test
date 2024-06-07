<script setup lang="ts">
import { mockAgent } from "../../utils/mocks/mockdata"
import ChatFooter from "../ChatFooter/ChatFooter.vue"
import ChatHeader from "../ChatHeader/ChatHeader.vue"
import ChatMessageList from "../ChatMessageList/ChatMessageList.vue"
import { ref } from "vue"
import type { ChatMessage, UserMessage } from "@/types"
import { addMessageToList, generateAgentResponse } from "../../utils/functions"

const messageList = ref<ChatMessage[]>([])
let agentResponseTimer: NodeJS.Timeout | null = null

const handleConversation = (incomingMessage: UserMessage) => {
  if (agentResponseTimer) {
    clearTimeout(agentResponseTimer)
  }

  const timestamp = Date.now()

  addMessageToList(incomingMessage, timestamp, messageList)

  agentResponseTimer = setTimeout(() => {
    generateAgentResponse(messageList)
    agentResponseTimer = null
  }, 1500)
}
</script>

<template>
  <aside class="chat-layout__container">
    <ChatHeader v-bind="mockAgent" />
    <ChatMessageList :messageList="messageList" />
    <ChatFooter @updateList="(message) => handleConversation(message)" />
  </aside>
</template>

<style lang="scss">
@import "./ChatLayout.scss";
</style>

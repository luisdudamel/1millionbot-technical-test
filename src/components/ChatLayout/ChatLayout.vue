<script setup lang="ts">
import { mockAgent, mockAgentMessages } from "@/mocks/mockdata"
import ChatFooter from "../ChatFooter/ChatFooter.vue"
import ChatHeader from "../ChatHeader/ChatHeader.vue"
import ChatMessageList from "../ChatMessageList/ChatMessageList.vue"
import { ref } from "vue"
import type { UserMessage, ChatMessage } from "@/types"

const messageList = ref<ChatMessage[]>([])
let agentResponseTimer: NodeJS.Timeout | null = null

const addMessageToList = (messageToAdd: UserMessage, timestamp: number) => {
  const highestId = !messageList.value.length
    ? 0
    : Math.max(...messageList.value.map((message) => message.id))

  messageList.value.push({
    ...messageToAdd,
    id: highestId + 1,
    timestamp: timestamp
  })
}

const generateAgentResponse = () => {
  const randomAgentResponse = Math.floor(Math.random() * (9 - 1 + 1)) + 1

  addMessageToList({ ...mockAgentMessages[randomAgentResponse] }, Date.now())
}

const handleConversation = (incomingMessage: UserMessage) => {
  if (agentResponseTimer) {
    clearTimeout(agentResponseTimer)
  }

  const timestamp = Date.now()

  addMessageToList(incomingMessage, timestamp)

  agentResponseTimer = setTimeout(() => {
    generateAgentResponse()
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

<script setup lang="ts">
import { mockActionMessages, mockAgent, mockAgentGreeting } from "../../utils/mocks/mockdata"
import ChatFooter from "../ChatFooter/ChatFooter.vue"
import ChatHeader from "../ChatHeader/ChatHeader.vue"
import ChatMessageList from "../ChatMessageList/ChatMessageList.vue"
import { ref } from "vue"
import type { ChatMessage, UserMessage } from "@/types"
import { addMessageToList } from "../../utils/functions"

const messageList = ref<ChatMessage[]>(mockAgentGreeting)

const isAgentTyping = ref(false)
let agentResponseTimer: NodeJS.Timeout | null = null
let agentTypingTimer: NodeJS.Timeout | null = null
mockActionMessages.forEach((actionMessage) => messageList.value.push(actionMessage))

const handleConversation = (incomingMessage: UserMessage) => {
  if (agentResponseTimer && agentTypingTimer) {
    clearTimeout(agentResponseTimer)
    clearTimeout(agentTypingTimer)
  }

  const timestamp = Date.now()

  addMessageToList(timestamp, messageList, incomingMessage.messageAuthor, incomingMessage)

  agentTypingTimer = setTimeout(() => {
    isAgentTyping.value = true
  }, 500)

  agentResponseTimer = setTimeout(() => {
    addMessageToList(timestamp, messageList, "agent", incomingMessage)

    agentResponseTimer = null
    isAgentTyping.value = false
  }, 1500)
}
</script>

<template>
  <aside class="chat-layout__container">
    <ChatHeader v-bind="mockAgent" />
    <ChatMessageList
      :messageList="messageList"
      @update-list="
        (message) => {
          handleConversation(message)
        }
      "
      :agent-name="mockAgent.name"
      :is-agent-typing="isAgentTyping"
    />
    <ChatFooter
      @update-list="
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

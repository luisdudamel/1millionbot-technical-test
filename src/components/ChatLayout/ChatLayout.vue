<script setup lang="ts">
import { mockAgent } from "@/mocks/mockdata"
import ChatFooter from "../ChatFooter/ChatFooter.vue"
import ChatHeader from "../ChatHeader/ChatHeader.vue"
import ChatMessageList from "../ChatMessageList/ChatMessageList.vue"
import { ref } from "vue"
import type { ChatMessage } from "@/types"

const messageList = ref<ChatMessage[]>([])

const addMessageToList = (messageToAdd: ChatMessage) => {
  messageList.value.push({
    id: 1,
    ...messageToAdd
  })
}
</script>

<template>
  <aside class="chat-layout__container">
    <ChatHeader v-bind="mockAgent" />
    <ChatMessageList :messageList="messageList" />
    <ChatFooter @updateList="(message) => addMessageToList(message)" />
  </aside>
</template>

<style lang="scss">
@import "./ChatLayout.scss";
</style>

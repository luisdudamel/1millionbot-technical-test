<script setup lang="ts">
import { mockAgentMessage, mockUserLongMessage, mockUserMessage } from "../../mocks/mockdata"
import ChatMessage from "../ChatMessage/ChatMessage.vue"
</script>

<template>
  <div>
    <ChatMessage v-bind="mockAgentMessage" />
    <ChatMessage v-bind="mockUserMessage" />
    <ChatMessage v-bind="mockUserLongMessage" />
  </div>
</template>

<style lang="scss">
@import "./GeneralLayout.scss";
</style>

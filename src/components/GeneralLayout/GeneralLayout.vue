<script setup lang="ts">
import { mockAgentMessage, mockUserMessage } from "../../mocks/mockdata"
import ChatMessage from "../ChatMessage/ChatMessage.vue"
</script>

<template>
  <div>
    <ChatMessage v-bind="mockAgentMessage" />
    <ChatMessage v-bind="mockUserMessage" />
  </div>
</template>

<style lang="scss">
@import "./GeneralLayout.scss";
</style>

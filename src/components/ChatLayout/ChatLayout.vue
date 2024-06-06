<script setup lang="ts">
import { mockAgent } from "@/mocks/mockdata"
import ChatFooter from "../ChatFooter/ChatFooter.vue"
import ChatHeader from "../ChatHeader/ChatHeader.vue"
</script>

<template>
  <aside class="chat-layout__container">
    <ChatHeader v-bind="mockAgent" />
    <ChatFooter />
  </aside>
</template>

<style lang="scss">
@import "./ChatLayout.scss";
</style>

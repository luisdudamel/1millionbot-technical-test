<script setup lang="ts">
import { MockAgent } from "@/mocks/mockdata"
import ChatHeader from "../ChatHeader/ChatHeader.vue"
</script>

<template>
  <div>
    <ChatHeader v-bind="MockAgent" />
  </div>
</template>

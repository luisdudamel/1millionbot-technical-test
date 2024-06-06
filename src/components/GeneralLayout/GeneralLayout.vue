<script setup lang="ts">
import { mockAgent } from "@/mocks/mockdata"
import ChatHeader from "../ChatHeader/ChatHeader.vue"
</script>

<template>
  <div>
    <ChatHeader v-bind="mockAgent" />
  </div>
</template>

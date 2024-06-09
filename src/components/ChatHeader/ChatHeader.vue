<script setup lang="ts">
import type { ChatAgent } from "@/types"
import ContextualMenu from "../ContextualMenu/ContextualMenu.vue"
import { ref } from "vue"
import { onClickOutside } from "@vueuse/core"

defineEmits(["minimize-chat", "open-options"])
defineProps<ChatAgent>()
const isOptionsMenuOpen = ref(false)
const contextual = ref(null)

onClickOutside(contextual, (event) => {
  event.stopPropagation()
  isOptionsMenuOpen.value = false
})
</script>

<template>
  <section class="chat-header__container">
    <div class="agent-info">
      <img
        class="agent-info__avatar"
        width="45"
        :src="`/img/${avatarUrl}`"
        :alt="`Profile picture of chat agent ${name}`"
      />
      <span class="agent-info__name">{{ name }}</span>
    </div>
    <div class="chat-actions">
      <button
        @click="$emit('minimize-chat')"
        class="chat-actions__button"
        aria-label="Minimize chat"
      >
        <img src="/img/minimize-chat.png" alt="Two arrows facing down icon" />
      </button>
      <button
        @click="isOptionsMenuOpen = !isOptionsMenuOpen"
        class="chat-actions__button"
        aria-label="Open chat options"
      >
        <img src="/img/threedots.png" alt="Three dots icon" />
      </button>
    </div>
    <ContextualMenu
      @click="isOptionsMenuOpen = !isOptionsMenuOpen"
      ref="contextual"
      v-if="isOptionsMenuOpen"
    />
  </section>
</template>

<style lang="scss">
@import "./ChatHeader.scss";
</style>

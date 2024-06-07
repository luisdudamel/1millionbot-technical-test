<script setup lang="ts">
const emit = defineEmits(["send-message"])
defineProps<{
  isButtonDisabled: boolean
}>()
</script>

<template>
  <button
    :disabled="isButtonDisabled"
    type="submit"
    aria-label="Send"
    @click="emit('send-message')"
    class="send-button__container"
  >
    <i class="fa-solid fa-paper-plane" />
  </button>
</template>

<style lang="scss">
@import "./SendButton.scss";
</style>

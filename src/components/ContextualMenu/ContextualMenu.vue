<script setup lang="ts">
import { contextualMenuOptions } from "@/utils/data"

defineEmits(contextualMenuOptions.map((option) => option.actionToEmit))
</script>

<template>
  <ul class="contextual-menu__container">
    <li
      class="contextual-menu__option"
      v-for="option in contextualMenuOptions"
      :key="option.id"
      @click="$emit(option.actionToEmit)"
    >
      <button class="contextual-menu__button">
        {{ option.optionText }}
      </button>
    </li>
  </ul>
</template>

<style lang="scss">
@import "./ContextualMenu.scss";
</style>

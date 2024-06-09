<script setup lang="ts">
import { imageList } from "@/utils/data"
import { ref } from "vue"

const slide = ref(1)
const currentImages = ref(imageList)
</script>

<template>
  <div class="q-pa-md carousel-container">
    <q-carousel animated v-model="slide" arrows navigation infinite>
      <q-carousel-slide
        v-for="image in currentImages"
        :key="image.id"
        :name="image.id"
        :img-src="'img/christmas/' + image.imageUrl"
      />
    </q-carousel>
  </div>
</template>

<style lang="scss">
@import "./ImageMessage.scss";
</style>

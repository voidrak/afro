<script setup lang="ts">
import Header from '@/components/common/Header.vue'
import { Toaster } from '@/components/ui/sonner'
import 'vue-sonner/style.css'
</script>

<template>
  <Toaster
    :closeButton="true"
    closeButtonPosition="top-left"
    richColors
    position="top-right"
    class="pointer-events-auto"
  />
  <Header />
  <RouterView> </RouterView>
</template>

<style scoped></style>

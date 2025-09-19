<script setup lang="ts">
import backgroundImage from '/images/Home_Page_Girl.png'
import Button from '../ui/button/Button.vue'
</script>

<template>
  <div
    class="h-[calc(100vh-2rem)] bg-cover bg-top bg-no-repeat relative"
    :style="`background-image: url('${backgroundImage}')`"
  >
    <!-- Overlay for better text readability (optional) -->
    <div class="absolute z-0 inset-0 bg-black/30 isolate"></div>

    <!-- Hero content -->
    <div class="relative text-white px-8 pt-36 md:pt-48 md:px-16 z-10">
      <h1 class="text-4xl md:text-6xl font-bold mb-4">
        Welcome to <span class="text-accentFirst"> Afro Chicks</span>
      </h1>
      <p class="text-xl md:text-2xl mb-8 max-w-2xl">
        Find Beauty and Sexy Ethiopian Girls - Your Ultimate Destination for All your needs
      </p>
      <RouterLink :to="{ name: 'Welcome' }" class="">
        <Button size="xxl">Get Started</Button>
      </RouterLink>
    </div>
  </div>
</template>

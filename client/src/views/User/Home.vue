<script setup lang="ts">
import NewArrivals from './NewArrivals.vue'
import backgroundImage from '/images/Home_Page_Girl.png'
import { Rocket, Sparkles, Play, Zap, Shield, Gem } from 'lucide-vue-next'
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
        Explore <span class="text-accentFirst"> Exclusive</span> and<span class="text-accentFirst">
          Erotic</span
        >
      </h1>
      <p class="text-xl md:text-2xl mb-8 max-w-2xl">
        A Gateway to Unveil Your Deepest Desires and Fantasies
      </p>
      <!-- Card -->
      <div class="mt-8 grid md:mt-10 lg:mt-12 gap-4 md:grid-cols-3 max-w-2xl">
        <div
          class="flex items-center space-x-4 rounded-lg border border-white/10 bg-white/10 p-4 backdrop-blur-sm hover:bg-accent/40 cursor-pointer"
        >
          <div class="h-12 w-12 rounded-lg bg-white/20 flex items-center justify-center">
            <Zap class="h-6 w-6 text-sky-400" />
          </div>
          <div>
            <h3 class="text-white">Fast Service</h3>
          </div>
        </div>

        <div
          class="flex items-center space-x-4 rounded-lg border border-white/10 bg-white/10 p-4 backdrop-blur-sm hover:bg-accent/40 cursor-pointer"
        >
          <div class="h-12 w-12 rounded-lg bg-white/20 flex items-center justify-center">
            <Shield class="h-6 w-6 text-rose-400" />
          </div>
          <div>
            <h3 class="text-white">Secure by Default</h3>
          </div>
        </div>
        <div
          class="flex items-center space-x-4 rounded-lg border border-white/10 bg-white/10 p-4 backdrop-blur-sm hover:bg-accent/40 cursor-pointer"
        >
          <div class="h-12 w-12 rounded-lg bg-white/20 flex items-center justify-center">
            <Gem class="h-6 w-6 text-violet-400" />
          </div>
          <div>
            <h3 class="text-white">Exclusive Choices</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
  <NewArrivals />
</template>

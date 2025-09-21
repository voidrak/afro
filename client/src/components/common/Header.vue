<script setup lang="ts">
import { ref } from 'vue'
import ThemeToggle from './ThemeToggle.vue'
import Button from '../ui/button/Button.vue'

const nav: Array<{ title: string; pathName: string }> = [
  { title: 'Home', pathName: 'Welcome' },
  { title: 'History', pathName: 'Welcome' },
  { title: 'Favorites', pathName: 'Welcome' },
  { title: 'Contact Us', pathName: 'Welcome' },
]

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<template>
  <div class="sticky top-0 left-0 z-50 bg-white dark:bg-[#101828]">
    <header class="py-4 px-4 flex border-b items-center justify-between">
      <!-- Logo -->
      <RouterLink
        :to="{ name: 'Welcome' }"
        class="scroll-m-20 text-2xl font-semibold tracking-tight font-serif"
      >
        HA
      </RouterLink>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex gap-x-8 items-center">
        <RouterLink
          :to="{ name: item.pathName }"
          v-for="(item, index) in nav"
          :key="index"
          class="hover:bg-accentFirst group relative cursor-pointer p-2 w-fit text-center rounded-md"
        >
          <span class="scroll-m-20 text-lg font-semibold tracking-tight group-hover:text-white">
            {{ item.title }}
          </span>
        </RouterLink>
      </div>

      <!-- Desktop Actions -->
      <div class="hidden md:flex gap-x-4">
        <ThemeToggle />
        <RouterLink :to="{ name: 'Login' }">
          <Button class="relative dark:text-white" size="lg"> Get Started </Button>
        </RouterLink>
      </div>

      <!-- Mobile Menu Button -->
      <div class="md:hidden flex items-center gap-x-2">
        <ThemeToggle />
        <button
          @click="toggleMobileMenu"
          class="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="Toggle mobile menu"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>

    <!-- Mobile Menu Overlay -->
    <div v-if="isMobileMenuOpen" class="fixed inset-0 z-50 md:hidden" @click="closeMobileMenu">
      <!-- Background overlay -->
      <div class="absolute inset-0 bg-black bg-opacity-50 transition-opacity"></div>

      <!-- Slide-in menu -->
      <div
        class="absolute top-0 right-0 h-full w-80 max-w-sm bg-white dark:bg-[#101828] shadow-xl transform transition-transform"
        :class="isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'"
        @click.stop
      >
        <!-- Menu Header -->
        <div class="flex items-center justify-between p-4 border-b dark:border-gray-700">
          <span class="text-xl font-semibold">Menu</span>
          <button
            @click="closeMobileMenu"
            class="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Close menu"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        <!-- Navigation Links -->
        <nav class="py-4">
          <RouterLink
            :to="{ name: item.pathName }"
            v-for="(item, index) in nav"
            :key="index"
            @click="closeMobileMenu"
            class="block px-6 py-3 text-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            {{ item.title }}
          </RouterLink>
        </nav>

        <!-- Mobile Actions -->
        <RouterLink
          :to="{ name: 'Login' }"
          class="absolute bottom-0 left-0 right-0 p-6 border-t dark:border-gray-700"
        >
          <Button class="w-full dark:text-white" size="lg" @click="closeMobileMenu">
            Get Started
          </Button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

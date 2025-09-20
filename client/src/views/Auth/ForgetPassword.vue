<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { RouterLink } from 'vue-router'
import { MessageCircle, ArrowLeft } from 'lucide-vue-next'

const handleLiveChat = (): void => {
  // Route to chat or open chat functionality
  console.log('Starting live chat...')
  // You can add router.push('/chat') here when you have a chat route
}
</script>

<template>
  <div class="w-full lg:grid lg:min-h-[400px] lg:grid-cols-2 xl:h-[550px]">
    <div class="flex items-center justify-center py-12">
      <div class="mx-auto grid w-[450px] gap-6">
        <!-- Back to Login -->
        <div class="flex items-center">
          <RouterLink
            :to="{ name: 'Login' }"
            class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 hover:text-accentFirst dark:hover:text-accentFirst transition-colors"
          >
            <ArrowLeft class="h-4 w-4" />
            Back to Login
          </RouterLink>
        </div>

        <!-- Header -->
        <div class="grid gap-2 text-center">
          <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Forgot Password?</h1>
          <p class="text-balance text-gray-600 dark:text-gray-300">
            No worries! Chat with our support team to recover your account.
          </p>
        </div>

        <!-- Live Chat Option -->
        <div
          class="border border-gray-200 dark:border-gray-700 rounded-lg p-8 hover:border-accentFirst dark:hover:border-accentFirst transition-colors bg-white dark:bg-gray-800"
        >
          <div class="text-center">
            <div class="flex justify-center mb-4">
              <MessageCircle class="h-12 w-12 text-accentFirst" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Live Chat Support
            </h3>
            <p class="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Chat with our support team in real-time to recover your password
            </p>
            <p class="text-sm font-medium text-gray-900 dark:text-white mb-6">Available 24/7</p>
            <Button @click="handleLiveChat" class="w-full"> Start Live Chat </Button>
          </div>
        </div>

        <!-- Additional Help -->
        <div class="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <p class="text-sm text-gray-600 dark:text-gray-300 mb-2">Need immediate assistance?</p>
          <p class="text-xs text-gray-500 dark:text-gray-400">
            Our support team is available 24/7 to help you recover your account securely.
          </p>
        </div>

        <!-- Remember Password Link -->
        <div class="text-center text-sm text-gray-600 dark:text-gray-300">
          Remembered your password?
          <RouterLink
            :to="{ name: 'Login' }"
            class="underline text-accentFirst hover:text-accentFirst/80"
          >
            Sign in
          </RouterLink>
        </div>
      </div>
    </div>

    <!-- Right Side Image -->
    <div class="hidden bg-gray-100 dark:bg-gray-800 lg:block">
      <img
        src="/images/Home_Page_Girl.png"
        alt="Support Image"
        class="h-full w-full object-cover brightness-[0.5] dark:brightness-[0.4]"
      />
    </div>
  </div>
</template>

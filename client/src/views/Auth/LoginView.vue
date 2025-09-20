<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RouterLink } from 'vue-router'
import { Eye, EyeOff } from 'lucide-vue-next'

// Form state
const phoneNumber = ref('')
const password = ref('')

// Password visibility state
const showPassword = ref(false)

const togglePasswordVisibility = (): void => {
  showPassword.value = !showPassword.value
}

const handleSubmit = (): void => {
  // Handle login logic here
  console.log('Login submitted:', {
    phoneNumber: phoneNumber.value,
    password: password.value,
  })
}
</script>

<template>
  <div class="w-full lg:grid lg:min-h-[400px] lg:grid-cols-2 xl:h-[550px]">
    <div class="flex items-center justify-center py-12">
      <div class="mx-auto grid w-[350px] gap-6">
        <div class="grid gap-2 text-center">
          <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Login</h1>
          <p class="text-balance text-gray-600 dark:text-gray-300">
            Enter your phone number below to login to your account
          </p>
        </div>
        <form @submit.prevent="handleSubmit" class="grid gap-4">
          <div class="grid gap-2">
            <Label for="phoneNumber" class="text-gray-900 dark:text-white">Phone Number</Label>
            <Input
              id="phoneNumber"
              type="tel"
              placeholder="+251 911 123 456"
              v-model="phoneNumber"
              required
            />
          </div>
          <div class="grid gap-2">
            <div class="flex items-center">
              <Label for="password" class="text-gray-900 dark:text-white">Password</Label>
              <RouterLink
                :to="{ name: 'ForgotPassword' }"
                class="ml-auto inline-block text-sm underline text-accentFirst hover:text-accentFirst/80"
              >
                Forgot your password?
              </RouterLink>
            </div>
            <div class="relative">
              <Input
                id="password"
                :type="showPassword ? 'text' : 'password'"
                placeholder="Enter your password"
                v-model="password"
                class="pr-10"
                required
              />
              <button
                type="button"
                @click="togglePasswordVisibility"
                class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <Eye v-if="!showPassword" class="h-4 w-4" />
                <EyeOff v-else class="h-4 w-4" />
              </button>
            </div>
          </div>
          <Button type="submit" class="w-full"> Login </Button>
        </form>
        <div class="mt-4 text-center text-sm text-gray-600 dark:text-gray-300">
          Don't have an account?
          <RouterLink
            :to="{ name: 'Register' }"
            class="underline text-accentFirst hover:text-accentFirst/80"
          >
            Sign up
          </RouterLink>
        </div>
      </div>
    </div>
    <div class="hidden bg-gray-100 dark:bg-gray-800 lg:block">
      <img
        src="/images/Home_Page_Girl.png"
        alt="Login Image"
        class="h-full w-full object-cover brightness-[0.5] dark:brightness-[0.4]"
      />
    </div>
  </div>
</template>

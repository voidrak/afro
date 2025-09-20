<script setup lang="ts">
import { ref, computed } from 'vue'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RouterLink } from 'vue-router'
import { Eye, EyeOff } from 'lucide-vue-next'

interface FormData {
  fullName: string
  phoneNumber: string
  password: string
  confirmPassword: string
}

// Combined form state
const formData = ref<FormData>({
  fullName: '',
  phoneNumber: '',
  password: '',
  confirmPassword: '',
})

// Password visibility state
const showPassword = ref(false)
const showConfirmPassword = ref(false)

// Form validation
const isFormValid = computed((): boolean => {
  return (
    formData.value.fullName.trim() !== '' &&
    formData.value.phoneNumber.trim() !== '' &&
    formData.value.password.length >= 6 &&
    formData.value.password === formData.value.confirmPassword
  )
})

const passwordsMatch = computed((): boolean => {
  return formData.value.password === formData.value.confirmPassword
})

const togglePasswordVisibility = (): void => {
  showPassword.value = !showPassword.value
}

const toggleConfirmPasswordVisibility = (): void => {
  showConfirmPassword.value = !showConfirmPassword.value
}

const handleSubmit = (): void => {
  if (isFormValid.value) {
    // Handle registration logic here
    console.log('Registration submitted:', {
      fullName: formData.value.fullName,
      phoneNumber: formData.value.phoneNumber,
      password: formData.value.password,
    })
  }
}
</script>

<template>
  <div class="w-full lg:grid lg:min-h-[400px] lg:grid-cols-2 xl:h-[550px]">
    <div class="flex items-center justify-center py-8">
      <div class="mx-auto grid w-[350px] gap-5">
        <div class="grid gap-2 text-center">
          <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Register</h1>
          <p class="text-balance text-gray-600 dark:text-gray-300">
            Create your account to get access to
            <span class="font-semibold text-accentFirst">exclusive</span> and
            <span class="font-semibold text-accentFirst">sexy</span> Ethiopian beauties
          </p>
        </div>
        <p class="text-green-600 text-sm text-center font-medium">
          Your personal information is completely secure with us
        </p>
        <form @submit.prevent="handleSubmit" class="grid gap-3">
          <div class="grid gap-2">
            <Label for="fullName" class="text-gray-900 dark:text-white">Full Name</Label>
            <Input
              id="fullName"
              type="text"
              placeholder="Full Name"
              v-model="formData.fullName"
              required
            />
          </div>
          <div class="grid gap-2">
            <Label for="phoneNumber" class="text-gray-900 dark:text-white">Phone Number</Label>
            <Input
              id="phoneNumber"
              type="tel"
              placeholder="0911123456"
              v-model="formData.phoneNumber"
              required
            />
          </div>
          <div class="grid gap-2">
            <Label for="password" class="text-gray-900 dark:text-white">Password</Label>
            <div class="relative">
              <Input
                id="password"
                :type="showPassword ? 'text' : 'password'"
                placeholder="Minimum 6 characters"
                v-model="formData.password"
                class="pr-10"
                required
              />
              <button
                type="button"
                @click="togglePasswordVisibility"
                class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <Eye v-if="!showPassword" class="h-4 w-4 cursor-pointer" />
                <EyeOff v-else class="h-4 w-4 cursor-pointer" />
              </button>
            </div>
          </div>
          <div class="grid gap-2">
            <Label for="confirmPassword" class="text-gray-900 dark:text-white"
              >Confirm Password</Label
            >
            <div class="relative">
              <Input
                id="confirmPassword"
                :type="showConfirmPassword ? 'text' : 'password'"
                placeholder="Repeat your password"
                v-model="formData.confirmPassword"
                class="pr-10"
                required
              />
              <button
                type="button"
                @click="toggleConfirmPasswordVisibility"
                class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <Eye v-if="!showConfirmPassword" class="h-4 w-4 cursor-pointer" />
                <EyeOff v-else class="h-4 w-4 cursor-pointer" />
              </button>
            </div>
            <p v-if="formData.confirmPassword && !passwordsMatch" class="text-sm text-red-500">
              Passwords do not match
            </p>
          </div>
          <Button type="submit" class="w-full" :disabled="!isFormValid"> Create Account </Button>
        </form>
        <div class="mt-3 text-center text-sm text-gray-600 dark:text-gray-300">
          Already have an account?
          <RouterLink
            :to="{ name: 'Login' }"
            class="underline text-accentFirst hover:text-accentFirst/80"
          >
            Sign in
          </RouterLink>
        </div>
      </div>
    </div>
    <div class="hidden bg-gray-100 dark:bg-gray-800 lg:block">
      <img
        src="/images/Home_Page_Girl.png"
        alt="Registration Image"
        class="h-full w-full object-cover brightness-[0.5] dark:brightness-[0.4]"
      />
    </div>
  </div>
</template>

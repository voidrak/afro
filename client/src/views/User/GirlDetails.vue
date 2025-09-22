<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Heart, ArrowLeft, Star, User, Ruler, Weight, Palette } from 'lucide-vue-next'
import { toast } from 'vue-sonner'
import type { GirlsDetails } from '@/types/GirlsType'

const route = useRoute()
const router = useRouter()

const girl = ref<GirlsDetails | null>(null)
const isLoading = ref(true)

// Mock data - replace with actual API call
const mockGirl: GirlsDetails = {
  id: 1,
  name: 'Marti',
  price: 2500,
  image: '/images/Home_Page_Girl.png',
  isNew: true,
  isFavorite: false,
  description:
    'Beautiful and charming Ethiopian girl with amazing personality. She loves dancing, cooking, and spending time with interesting people.',
  age: 22,
  height: 165,
  weight: 55,
  body_color: 'Dark Brown',
}

const toggleFavorite = (): void => {
  if (girl.value) {
    girl.value.isFavorite = !girl.value.isFavorite

    if (girl.value.isFavorite) {
      toast.success('Added to Favorites', {
        description: `${girl.value.name} has been added to your favorites`,
      })
    } else {
      toast.success('Removed from Favorites', {
        description: `${girl.value.name} has been removed from your favorites`,
      })
    }
  }
}

const bookNow = (): void => {
  if (girl.value) {
    console.log('Booking:', girl.value.name)
    toast.success('Booking Request Sent', {
      description: `Your booking request for ${girl.value.name} has been sent. We'll contact you soon.`,
    })
  }
}

const goBack = (): void => {
  router.go(-1)
}

onMounted(() => {
  // Simulate API call
  setTimeout(() => {
    girl.value = mockGirl
    isLoading.value = false
  }, 1000)
})
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-[#101828] py-8 mt-16">
    <div class="container mx-auto px-4 max-w-6xl">
      <!-- Back Button -->
      <div class="mb-6">
        <Button @click="goBack" variant="outline" class="gap-2">
          <ArrowLeft class="h-4 w-4" />
          Back to Girls
        </Button>
      </div>

      <!-- Loading State -->
      <div v-if="isLoading" class="flex justify-center items-center h-64">
        <div class="text-gray-600 dark:text-gray-300">Loading...</div>
      </div>

      <!-- Girl Details -->
      <div v-else-if="girl" class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Image Section -->
        <div class="relative">
          <Card class="overflow-hidden">
            <CardContent class="p-0">
              <div class="relative">
                <img :src="girl.image" :alt="girl.name" class="w-full h-[600px] object-cover" />

                <!-- Badges -->
                <div class="absolute top-4 left-4 flex flex-col gap-2">
                  <Badge v-if="girl.isNew" class="bg-accentFirst text-white"> NEW </Badge>
                </div>

                <!-- Favorite Button -->
                <button
                  @click="toggleFavorite"
                  class="absolute top-4 right-4 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-200"
                  :class="girl.isFavorite ? 'text-red-500' : 'text-gray-400 hover:text-red-500'"
                >
                  <Heart class="h-5 w-5" :fill="girl.isFavorite ? 'currentColor' : 'none'" />
                </button>
              </div>
            </CardContent>
          </Card>
        </div>

        <!-- Details Section -->
        <div class="space-y-6">
          <!-- Header -->
          <div>
            <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              {{ girl.name }}
            </h1>
            <div class="flex items-center gap-2 mb-4">
              <div class="flex items-center gap-1">
                <Star class="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star class="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star class="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star class="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star class="h-4 w-4 fill-yellow-400 text-yellow-400" />
              </div>
              <span class="text-sm text-gray-500 dark:text-gray-400">(5.0)</span>
            </div>
            <div class="text-3xl font-bold text-accentFirst mb-4">
              {{ girl.price.toLocaleString() }} ETB
              <span class="text-sm font-normal text-gray-500 dark:text-gray-400">/hour</span>
            </div>
          </div>

          <!-- Description -->
          <Card>
            <CardContent class="p-6">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">About</h3>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                {{ girl.description }}
              </p>
            </CardContent>
          </Card>

          <!-- Physical Details -->
          <Card>
            <CardContent class="p-6">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Details</h3>
              <div class="grid grid-cols-2 gap-4">
                <div class="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <User class="h-5 w-5 text-accentFirst" />
                  <div>
                    <p class="text-sm text-gray-500 dark:text-gray-400">Age</p>
                    <p class="font-semibold text-gray-900 dark:text-white">{{ girl.age }} years</p>
                  </div>
                </div>

                <div class="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <Ruler class="h-5 w-5 text-accentFirst" />
                  <div>
                    <p class="text-sm text-gray-500 dark:text-gray-400">Height</p>
                    <p class="font-semibold text-gray-900 dark:text-white">{{ girl.height }} cm</p>
                  </div>
                </div>

                <div class="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <Weight class="h-5 w-5 text-accentFirst" />
                  <div>
                    <p class="text-sm text-gray-500 dark:text-gray-400">Weight</p>
                    <p class="font-semibold text-gray-900 dark:text-white">{{ girl.weight }} kg</p>
                  </div>
                </div>

                <div class="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <Palette class="h-5 w-5 text-accentFirst" />
                  <div>
                    <p class="text-sm text-gray-500 dark:text-gray-400">Skin Tone</p>
                    <p class="font-semibold text-gray-900 dark:text-white">{{ girl.body_color }}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <!-- Action Buttons -->
          <div class="space-y-3">
            <Button @click="bookNow" class="w-full py-3 text-lg"> Book Now </Button>
            <Button @click="toggleFavorite" variant="outline" class="w-full py-3">
              <Heart class="h-4 w-4 mr-2" :fill="girl.isFavorite ? 'currentColor' : 'none'" />
              {{ girl.isFavorite ? 'Remove from Favorites' : 'Add to Favorites' }}
            </Button>
          </div>

          <!-- Safety Notice -->
          <Card class="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20">
            <CardContent class="p-4">
              <div class="flex items-start gap-3">
                <div class="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 class="font-semibold text-green-800 dark:text-green-200 mb-1">
                    Safe & Verified
                  </h4>
                  <p class="text-sm text-green-700 dark:text-green-300">
                    All our girls are verified and background checked for your safety and peace of
                    mind.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <!-- Error State -->
      <div v-else class="text-center py-16">
        <p class="text-gray-600 dark:text-gray-300">Girl not found</p>
        <Button @click="goBack" class="mt-4"> Go Back </Button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

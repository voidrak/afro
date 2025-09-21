<script setup lang="ts">
import { ref } from 'vue'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Heart } from 'lucide-vue-next'
import { toast } from 'vue-sonner'

interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  rating: number
  reviews: number
  image: string
  isNew: boolean
  isFavorite: boolean
  description: string
}

const newArrivals = ref<Product[]>([
  {
    id: 1,
    name: 'Marti',
    price: 2500,
    originalPrice: 3200,
    rating: 4.8,
    reviews: 24,
    image: '/images/Home_Page_Girl.png',
    isNew: true,
    isFavorite: false,
    description: 'Luxurious silk pyjama set perfect for comfortable nights',
  },
  {
    id: 2,
    name: 'Meri',
    price: 1800,
    rating: 4.6,
    reviews: 18,
    image: '/images/Home_Page_Girl.png',
    isNew: true,
    isFavorite: false,
    description: 'Soft cotton pyjama set for ultimate comfort',
  },
  {
    id: 3,
    name: 'Tigi',
    price: 3000,
    originalPrice: 3800,
    rating: 4.9,
    reviews: 32,
    image: '/images/Home_Page_Girl.png',
    isNew: true,
    isFavorite: true,
    description: 'Sophisticated lace-trimmed pyjama collection',
  },
  {
    id: 4,
    name: 'Kidi',
    price: 2200,
    rating: 4.7,
    reviews: 15,
    image: '/images/Home_Page_Girl.png',
    isNew: true,
    isFavorite: false,
    description: 'Premium satin sleepwear for special occasions',
  },
])

const toggleFavorite = (productId: number): void => {
  const product = newArrivals.value.find((p) => p.id === productId)
  if (product) {
    product.isFavorite = !product.isFavorite
  }
  if (product?.isFavorite) {
    console.log('Added to favorites:', productId)
    toast.success('Added to Favorite', {
      description: `You have added ${product?.name} to your favorites`,
    })
  } else {
    console.log('Removed from favorites:', productId)
    toast.success('Removed from Favorite', {
      description: `You have removed ${product?.name} from your favorites`,
    })
  }
}

const addToCart = (productId: number): void => {
  console.log('Added to cart:', productId)
  // Add cart functionality here
}
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-[#101828] py-8 mt-16">
    <div class="container mx-auto px-4">
      <!-- Header -->
      <div class="text-center mb-12">
        <Badge class="mb-4 bg-accentFirst text-white"> Fresh</Badge>
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">New Chicks</h1>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Discover our newest members, handpicked for you. New Girls added regularly to keep things
          exciting!
        </p>
      </div>

      <!-- Products Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:px-16">
        <Card
          v-for="product in newArrivals"
          :key="product.id"
          class="group overflow-hidden hover:shadow-xl transition-all mx-auto duration-300 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
        >
          <CardContent class="p-0">
            <!-- Image Container -->
            <div class="relative overflow-hidden">
              <img
                :src="product.image"
                :alt="product.name"
                class="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
              />

              <!-- Badges -->
              <div class="absolute top-3 left-3 flex flex-col gap-2">
                <Badge v-if="product.isNew" class="bg-accentFirst text-white"> NEW </Badge>
              </div>

              <!-- Favorite Button -->
              <button
                @click="toggleFavorite(product.id)"
                class="absolute top-3 right-3 p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-200"
                :class="product.isFavorite ? 'text-red-500' : 'text-gray-400 hover:text-red-500'"
              >
                <Heart class="h-4 w-4" :fill="product.isFavorite ? 'currentColor' : 'none'" />
              </button>
            </div>

            <!-- Product Info -->
            <div class="p-4">
              <!-- Product Name -->
              <h3 class="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-1">
                {{ product.name }}
              </h3>

              <!-- Price -->
              <div class="flex items-center gap-2 mb-4">
                <span class="text-lg font-bold text-accentFirst">
                  {{ product.price.toLocaleString() }} ETB
                </span>
              </div>

              <!-- Add to Cart Button -->
              <Button @click="addToCart(product.id)" class="w-full" variant="outline">
                View Details
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <!-- Load More Section -->
      <div class="text-center mt-12">
        <Button size="lg" variant="outline"> Load More Products </Button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

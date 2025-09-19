<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { ChartBar, Users, Building2, Venus, Star } from 'lucide-vue-next'
import type { Component } from 'vue'

interface StatData {
  label: string
  value: number
  icon: Component
  suffix: string
  decimals: number
}

interface Stat extends StatData {
  displayValue: string
}

interface Testimonial {
  quote: string
  author: string
  role: string
  avatar: string
  initials: string
}

const statsData: StatData[] = [
  {
    label: 'Available Girls',
    value: 35,
    icon: Venus,
    suffix: '+',
    decimals: 0,
  },
  {
    label: 'Satisfied Clients',
    value: 200,
    icon: Users,
    suffix: '+',
    decimals: 0,
  },
  {
    label: 'Secure Locations',
    value: 50,
    icon: Building2,
    decimals: 1,
    suffix: '%',
  },
  {
    label: 'Customer Rating',
    value: 4.5,
    icon: Star,
    decimals: 1,
    suffix: '/5',
  },
]

const stats = ref<Stat[]>(
  statsData.map((stat: StatData) => ({
    ...stat,
    displayValue: '0',
  })),
)

const animateValue = (stat: Stat, index: number): void => {
  const duration: number = 2000 // 2 seconds
  const steps: number = 60
  const stepDuration: number = duration / steps
  let currentStep: number = 0

  const interval = setInterval(() => {
    currentStep++
    const progress: number = currentStep / steps
    const easedProgress: number = 1 - Math.pow(1 - progress, 3) // Cubic easing

    const currentValue: number = stat.value * easedProgress
    stats.value[index].displayValue = currentValue.toFixed(stat.decimals)

    if (currentStep >= steps) {
      clearInterval(interval)
      stats.value[index].displayValue = stat.value.toFixed(stat.decimals)
    }
  }, stepDuration)
}

onMounted(() => {
  stats.value.forEach((stat: Stat, index: number) => {
    setTimeout(() => {
      animateValue(stat, index)
    }, index * 200) // Stagger the animations
  })
})

const testimonial: Testimonial = {
  quote:
    'This platform has transformed the way I connect with girls. It is a secure and reliable service with a variety of girls. Highly recommended!',
  author: 'Mr D',
  role: 'Happy Customer',
  avatar: 'https://shadcnblocks-vue.com/avatars/sarah-johnson.jpg',
  initials: 'DE',
}
</script>

<template>
  <section
    class="relative w-full flex items-center bg-white dark:bg-[#101828] py-8 md:py-16 md:px-6 lg:px-10 lg:py-24"
  >
    <div class="container mx-auto px-4 md:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center space-y-4 mb-12">
        <Badge
          class="mb-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border-gray-200 dark:border-gray-700"
        >
          <ChartBar class="mr-2 size-4" />
          Our Impact
        </Badge>
        <h2
          class="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl text-gray-900 dark:text-white"
        >
          Trusted by hundreds of customers
        </h2>
        <p class="text-gray-600 dark:text-gray-300 md:text-lg max-w-2xl mx-auto">
          We're proud of our numbers and the trust our customers place in us
        </p>
      </div>

      <!-- Stats Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Card
          v-for="stat in stats"
          :key="stat.label"
          class="text-center p-6 transition-all duration-300 hover:border-accentFirst dark:hover:border-accentFirst bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
        >
          <component :is="stat.icon" class="mx-auto mb-4 size-8 text-accentFirst" />
          <div class="space-y-2">
            <h3 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              {{ stat.displayValue }}{{ stat.suffix }}
            </h3>
            <p class="text-sm text-gray-600 dark:text-gray-300">{{ stat.label }}</p>
          </div>
        </Card>
      </div>

      <!-- Testimonial -->
      <div class="mt-16 text-center">
        <blockquote class="max-w-3xl mx-auto">
          <p class="text-xl font-medium italic text-gray-600 dark:text-gray-300">
            "{{ testimonial.quote }}"
          </p>
          <footer class="mt-4">
            <div class="flex items-center justify-center gap-2">
              <Avatar class="bg-gray-100 dark:bg-gray-800">
                <AvatarFallback
                  class="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                  >{{ testimonial.initials }}</AvatarFallback
                >
              </Avatar>
              <div class="text-left">
                <p class="font-semibold text-gray-900 dark:text-white">{{ testimonial.author }}</p>
                <p class="text-sm text-gray-600 dark:text-gray-300">{{ testimonial.role }}</p>
              </div>
            </div>
          </footer>
        </blockquote>
      </div>
    </div>
  </section>
</template>

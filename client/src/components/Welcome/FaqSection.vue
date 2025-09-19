<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  HelpCircle,
  ExternalLink,
  ThumbsUp,
  ThumbsDown,
  Settings,
  CreditCard,
  Users,
  ShieldCheck,
} from 'lucide-vue-next'

// State
const selectedCategory = ref('all')

// Categories
const categories = [
  { id: 'all', name: 'All', icon: HelpCircle },
  { id: 'general', name: 'General', icon: Settings },
  { id: 'account', name: 'Account', icon: Users },
  { id: 'payment', name: 'Payment', icon: CreditCard },
  { id: 'security', name: 'Security', icon: ShieldCheck },
]

// FAQ Data
const faqs = [
  {
    id: 'faq-1',
    category: 'general',
    question: 'Where did you get the girls?',
    answer:
      'We carefully selected our team members from various locations in Ethiopia. From university students to working professionals, they come from diverse backgrounds.',
  },
  {
    id: 'faq-5',
    category: 'general',
    question: 'Are the girls safe?',
    answer:
      'All the girls in our platform are tested regularly for sexually transmitted infections (STIs) and HIV. we also ensure that they work in safe and secure environments.',
  },
  {
    id: 'faq-2',
    category: 'account',
    question: 'How can I access this platform?',
    answer:
      'For the sake of security and make our platform exclusive, we require a small registration fee to access our platform. This fee helps us maintain the quality and safety of our services. You can register by clicking the "Register" button on the top right corner of the header.',
  },
  {
    id: 'faq-3',
    category: 'payment',
    question: 'What payment methods are accepted?',
    answer:
      'We accept transfer to our bank account and client required to screenshot of the receipt . We will verify the payment and provide you with access to our platform immediately.',
  },
  {
    id: 'faq-4',
    category: 'security',
    question: 'How secure is my privacy?',
    answer:
      'Your privacy is our top priority. We implement strict security measures to protect your personal information and also we inquire only the basic information necessary for providing our services .',
  },
]

// Computed
const filteredFaqs = computed(() => {
  let filtered = faqs

  // Filter by category
  if (selectedCategory.value !== 'all') {
    filtered = filtered.filter((faq) => faq.category === selectedCategory.value)
  }

  return filtered
})
</script>

<template>
  <section class="py-20">
    <div class="container">
      <div class="mx-auto max-w-3xl">
        <!-- Header -->
        <div class="mb-14 text-center">
          <Badge variant="outline" class="mb-4">
            <HelpCircle class="mr-2 size-4" />
            FAQ
          </Badge>
          <h1 class="mb-4 text-3xl font-semibold md:mb-6 md:text-5xl">
            Frequently Asked Questions
          </h1>
          <p class="text-lg text-muted-foreground">
            Here you can find answers to the most frequently asked questions. Didn't find what
            you're looking for?
            <RouterLink :to="{ name: 'Welcome' }" class="font-medium text-primary hover:underline"
              >Contact us</RouterLink
            >.
          </p>
        </div>

        <!-- FAQ Categories -->
        <div class="mb-8 flex flex-wrap justify-center gap-2">
          <Button
            v-for="category in categories"
            :key="category.id"
            variant="outline"
            :class="[
              'gap-2 dark:hover:bg-primary/90 ',
              selectedCategory === category.id
                ? 'bg-primary dark:bg-primary text-primary-foreground dark:text-white hover:bg-primary/90   hover:text-white'
                : '',
            ]"
            @click="selectedCategory = category.id"
          >
            <component :is="category.icon" class="size-4" />
            {{ category.name }}
          </Button>
        </div>

        <!-- FAQs -->
        <TransitionGroup
          name="list"
          tag="div"
          class="space-y-4"
          enter-active-class="transition-all duration-300 ease-in-out"
          leave-active-class="transition-all duration-300 ease-in-out"
          enter-from-class="opacity-0 translate-y-8"
          leave-to-class="opacity-0 translate-y-8"
        >
          <div v-for="(faq, index) in filteredFaqs" :key="faq.id">
            <Accordion type="single" :collapsible="true">
              <AccordionItem :value="faq.id">
                <AccordionTrigger class="group">
                  <div class="flex items-center gap-3 text-left">
                    <Badge variant="outline" class="shrink-0">
                      {{ categories.find((c) => c.id === faq.category)?.name }}
                    </Badge>
                    <span class="">{{ faq.question }}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div class="prose prose-sm max-w-none">
                    <p>{{ faq.answer }}</p>

                    <div class="mt-4 flex items-center gap-4">
                      <p class="text-sm text-muted-foreground">Was this answer helpful?</p>
                      <div class="flex gap-2">
                        <Button variant="outline" size="sm" class="gap-2">
                          <ThumbsUp class="size-4" />
                          Yes
                        </Button>
                        <Button variant="outline" size="sm" class="gap-2">
                          <ThumbsDown class="size-4" />
                          No
                        </Button>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </TransitionGroup>
      </div>
    </div>
  </section>
</template>

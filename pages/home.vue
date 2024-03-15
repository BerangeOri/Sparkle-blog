<template>
  <v-card dark class="pa-3">
    <v-responsive :aspect-ratio="16 / 9">
      <!-- <p>Home</p> -->
      {{ gamePostnow }}
      <!-- {{ Object.keys(blogPostnow) ?? '' }} -->
      <v-expansion-panels>
        <v-expansion-panel v-for="(name, i) in Object.keys(categories)" bg-color="secondary "
          focusable
        >
          <v-expansion-panel-title expand-icon="mdi-menu-down">
            {{ name }}
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-data-iterator v-for="(postype, j) in Object.keys(categories[name])"
              :items="categories[name][postype]"
              items-per-page="-1"
            >
              <template v-slot:header="{ page }">
                {{ postype }}
              </template>
              <template v-slot:default="{ items }">
                <v-card v-for="item in items">
                  <v-card-title>{{ item["title"] }}</v-card-title>
                </v-card>
              </template>
            </v-data-iterator>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
      <v-btn color="success" @click="BlogStore.loadRecent()"
      >text</v-btn>
    </v-responsive>
  </v-card>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'test',
})
import { NotionRenderer, getPageBlocks, getPageTable } from 'vue3-notion'

import { ref, onMounted } from 'vue'

import { useGameStore } from '~/store/blog';
import { storeToRefs } from 'pinia';
const BlogStore = useGameStore()
const { gamePostnow } = storeToRefs(BlogStore)

const categories = ref<Record<string,any>>({})

onMounted(async () => {
  BlogStore.loadRecent()
  categories.value["GAMES"] = gamePostnow
})

</script>

<style scoped></style>

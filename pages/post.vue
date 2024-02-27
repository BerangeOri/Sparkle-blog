<template>
  {{ gameList }}
  <!-- <NotionRenderer v-if="gameList" :block-map="gameList" full-page /> -->
  <v-card dark min-height="50vh" class="bg-amber-lighten-3" variant="flat">
    <v-responsive>
      <post-title />
    </v-responsive>
  </v-card>
  <!-- <v-container> -->
  <post-content />
  <!-- </v-container> -->
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'test',
})
import PostTitle from '~/components/post/PostTitle.vue'
import PostContent from '~/components/post/PostContent.vue'

import { NotionRenderer, getPageBlocks, getPageTable } from 'vue3-notion'
import { type BlockMap } from 'vue3-notion'
import { ref, onMounted } from 'vue'

const gameList = ref()

onMounted(async () => {
  var data = (await getPageTable(
    '7bac64fd02cb4f90860c3ae57894cbf6'
  )) as unknown as Record<string, any>[]
  console.log(gameList.value)
  console.log(typeof gameList.value)
  const result: Record<string, any[]> = {}

  if (data) {
    for (const post of data) {
      const c = post.category

      if (!result[c]) {
        result[c] = []
      }

      result[c].push(post)
    }
  }
  gameList.value = result
  console.log(data.length)
})
</script>

<style scoped></style>

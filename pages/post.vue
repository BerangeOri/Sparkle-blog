<template>
  <!-- <NotionRenderer v-if="gameList" :block-map="gameList" full-page /> -->
  <v-card dark min-height="50vh" class="bg-amber-lighten-3" variant="flat">
    <!-- <v-responsive> -->
      <post-title />
    <!-- </v-responsive> -->
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

</script>

<style scoped></style>

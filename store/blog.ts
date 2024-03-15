import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { getPageTable } from 'vue3-notion'

export const useGameStore = defineStore('game', () => {
    // states
    const postraw = ref<Record<string, any>[]>([])
    const postnow = ref({})
    const postselected = ref({})

    // getters
    const gamePostnow = computed(() => {
        return postnow.value
    })


    // actions
    async function loadRecent() {
        var data = (await getPageTable(
            '7bac64fd02cb4f90860c3ae57894cbf6'
          )) as unknown as Record<string, any>[]
          postraw.value = data
          const result: Record<string, any[]> = {}
        
          if (data) {
            for (const post of data) {
              const c = post.category
              const s = post.status
              if (s == "시작 전") continue;
        
              if (!result[c]) {
                result[c] = []
              }
              result[c].push(post)
            }
          }
          postnow.value = result
    }

    return { gamePostnow,
        loadRecent }
  })

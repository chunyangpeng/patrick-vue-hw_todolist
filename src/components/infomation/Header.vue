<script setup>
import { defineProps, computed } from "vue"

const props = defineProps({
  todolists: {
    type: Array,
    required: true,
    default: [],
  },
})

const todolistCount = computed(() => {
  return props.todolists.filter((todolist) => todolist.title.length > 2).length
})
</script>

<template>
  <h2 class="text-2xl" v-if="todolists.length == 0">目前無任何資料</h2>
  <h2 class="text-2xl" v-else>目前共有 {{ todolistCount }} 個todolist</h2>
</template>

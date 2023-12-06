<script setup>
import { ref, defineEmits } from "vue"

const todolistName = ref("")

const emits = defineEmits(["add-todolist"])

const addToDoList = () => {
  emits("add-todolist", todolistName.value)
  todolistName.value = ""
}
</script>

<template>
  <div class="flex items-center gap-2 mt-4">
    <input
      v-model.trim="todolistName"
      @keydown.enter="addToDoList"
      type="text"
      class="w-full input input-bordered"
    />
    <button @click="addToDoList" class="btn btn-primary">新增</button>
  </div>
</template>

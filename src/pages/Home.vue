<script setup>
import { v4 as uuid } from "uuid"
import { getToDoLists, saveToDoLists } from "@/auo-lib/storage"
import { reactive, onBeforeMount } from "vue"
import Header from "@/components/infomation/Header.vue"
import ToDoListItem from "@/components/todolists/Item.vue"
import AddToDoListForm from "@/components/forms/AddToDoList.vue"

const title = "Patrick To Do List"
const todolists = reactive([])

const removeToDoList = (id) => {
  if (id) {
    const todolistIndex = todolists.findIndex((todolist) => todolist.id == id)

    if (todolistIndex >= 0) {
      todolists.splice(todolistIndex, 1)
      saveToDoLists(todolists)
    }
  }
}

const addToDoList = (todolistName) => {
  if (todolistName != "") {
    const todolist = {
      id: uuid(),
      title: todolistName,
    }

    todolists.unshift(todolist)

    // save
    saveToDoLists(todolists)
  }
}

onBeforeMount(() => {
  const data = getToDoLists()
  if (data) {
    todolists.push(...data)
  }
})
</script>

<template>
  <h1 class="title">{{ title }}</h1>

  <AddToDoListForm @add-todolist="addToDoList" />

  <div class="divider"></div>
  <div>
    <Header :todolists="todolists" />
    <ul>
      <ToDoListItem @remove-todolist="removeToDoList" v-for="todolist in todolists" :todolist="todolist" />
    </ul>
  </div>
</template>

<style scoped>
.title {
  @apply text-slate-800 text-5xl;
}
</style>

import "./assets/main.css"
import { createApp } from "vue"
import Layout from "@/Layout.vue"
import { createRouter, createWebHashHistory } from "vue-router"

import HomePage from "@/pages/Home.vue"
import ToDoListDetailPage from "@/pages/todolists/Detail.vue"

const routes = [
  { path: "/", component: HomePage },
  { path: "/todolists/:auo", name: "detail", component: ToDoListDetailPage },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

createApp(Layout).use(router).mount("#app")

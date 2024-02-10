
<template>
<div class="container">
    <input type="text" v-model="todo_input" class="border-black boder-lg">
    <button @click="add_todo">Add</button>
  <ul>
    <li v-for="(todo,i) in todos" :key="todo.id" >
      <p :class="{
         completed_todo: todo.is_completed
      }
      "> {{ i + 1 }} {{ todo.title }}</p>
      <button @click="Completed_line(todo.id)">end</button>
      <button @click="delete_task(todo.id)">delete</button>
    </li>
  </ul>
</div>
</template>
<script setup>
const data_val = ref(null)
import { ref } from "vue"
const todo_input = ref("")
const todos = ref([
  {
    id:1, 
    title:"task1",
    is_completed: true,
  }
])

const add_todo = () => {
  const new_todo = {
    id: new Date().getTime(),
    title:todo_input.value,
    is_completed:false,
  }
  todos.value.push(new_todo)
}

const Completed_line = (id,i) => {
const index = todos.value.findIndex((todo) => todo.id == id)
todos.value[index].is_completed = !todos.value[index].is_completed
}

const delete_task = (id) => {
const filtered_task = todos.value.filter((todo) => todo.id != id)
todos.value = filtered_task
}
</script>
<style>
.completed_todo {
  text-decoration: line-through;
}
</style>


<template>
<div class="container">
  <div class="big_div bg-[aqua]">
    <div class="btn_input">
    <input type="text" v-model="todo_input" class="input" placeholder="New Todo">
    <button @click="add_todo" class="add_btn">Add</button>
   </div>
  <ul class="ul">
    <li v-for="(todo,i) in todos" :key="todo.id" class="li" >
      <div class="end_delete">
      <p :class="{
         completed_todo: todo.is_completed
      }
      "> {{ i + 1 }} {{ todo.title }}</p>
      <button @click="Completed_line(todo.id)" class="end_btn">end</button>
      <button @click="delete_task(todo.id)" class="delete_btn">delete</button>
     </div>
    </li>
  </ul>
  </div>
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
.btn_input {
padding: 10px;
display: flex;
justify-content: center;
align-items: center;
gap: 30px;
}
.big_div {
  width: 700px;
  margin: 0 auto;
  border-radius: 20px;
}
.add_btn {
  background-color: azure;
  padding: 10px;
  width: 200px;
  border-radius: 15px;
}
.input {
  padding: 10px;
  width: 300px;
}
.li {
  background-color: rebeccapurple;
  margin: 0 auto;
  width: 500px;
  margin-top: 15px;
  padding: 15px;
  border-radius: 15px;
  margin-top: 20px;
}
.end_delete {
  display: flex;
  justify-content: center;
  gap: 20px;
  color: white;
}
.end_btn {
  background-color: bisque;
  width: 100px;
  color: black;
  border-radius: 15px;
}
.delete_btn {
  background-color: bisque;
  width: 100px;
  color: black;
  border-radius: 15px;
}

</style>

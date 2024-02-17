<template>
  <h2>button</h2>
  <div v-for="btn in btns">
    <MainBtn :title="btn.title" :key="btn.id" @clicked="handle_message" />
  </div>
  <p>{{ text }}</p>
  <SearchInput/>
  <ul>
    <li v-for="user in users" :key="user.id">{{ user.name }}</li>
  </ul>
</template>
<script setup>
import { ref } from "vue";
import MainBtn from "@/components/MainBtn.vue";
import SearchInput from "@/components/SearchInput.vue";



   const input = inp_search.value;
   const filtered_rooms =  users.filter((t) =>
    t.name.toLocaleLowerCase().includes(input.toLocaleLowerCase())
  );



const handle_message = (arg) => {
  text.value = arg;
};
const text = ref("text");
const btns = ref([
  {
    id: 1,
    title: "btn1",
  },
  {
    id: 2,
    title: "btn2",
  },
  {
    id: 3,
    title: "btn3",
  },
]);
const users = ref([
  {
    id: 1,
    name: "asadbek",
  },
  {
    id: 2,
    name: "islom",
  },
]);
</script>
<style></style>

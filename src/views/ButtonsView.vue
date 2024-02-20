<template>
  <h2>button</h2>
  <div v-for="btn in btns">
    <MainBtn :title="btn.title" :key="btn.id" @clicked="handle_message" />
  </div>
  <p>{{ text }}</p>
  <SearchInput @input_arg="(inp) => (input = inp)" />
  <ul>
    <li v-for="user in search_user()" :key="user.id">{{ user.name }}</li>
  </ul>
</template>
<script setup>
import { ref } from "vue";
import MainBtn from "@/components/MainBtn.vue";
import SearchInput from "@/components/SearchInput.vue";

const input = ref("");

const search_user = () => {
  const filtered_users = users.value.filter((user) =>
    user.name.toLowerCase().includes(input.value.toLowerCase())
  );
return filtered_users
};

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
  {
    id: 3,
    name: "oybek",
  },
]);
</script>
<style></style>

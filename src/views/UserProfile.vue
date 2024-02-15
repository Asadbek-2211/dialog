<template>
  <UserCard
    :img="finded_user.img"
    :name="finded_user.name"
    :phone="finded_user.phone"
  >
  <button class="bg-green-300 p-2 text-white w-[90px] rounded-lg" @click="delete_user">Delete</button>
  <button class="bg-yellow-300 p-2 text-white ml-2 w-[90px] rounded-lg">Edit</button>
  </UserCard>
</template>
<script setup>
import UserCard from "@/components/UserCard.vue";
import { useRoute } from "vue-router";

const users = JSON.parse(localStorage.getItem("users"))
const route = useRoute();
const { id } = route.params;

const finded_user = users.find((user) => user.id == id);
const delete_user = () => {
   const filtered_user = users.filter((user) => {
   return id != user.id
   })
  localStorage.setItem("users", JSON.stringify(filtered_user))
}
console.log(users);
</script>
<style></style>

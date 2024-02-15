<template>
  <UserCard
    :img="finded_user.img"
    :name="finded_user.name"
    :phone="finded_user.phone"
  >
  <button class="bg-green-300 p-2 text-white w-[90px] rounded-lg" @click="delete_user(users.json.id)">Delete</button>
  <button class="bg-yellow-300 p-2 text-white ml-2 w-[90px] rounded-lg">Edit</button>
  </UserCard>
</template>
<script setup>
import UserCard from "@/components/UserCard.vue";
import { useRoute } from "vue-router";
import users from "@/server/users.json";
const route = useRoute();
const { id } = route.params;

const finded_user = users.find((user) => user.id == id);
const delete_user = (id) => {
    const filtered_user = users.json.filter((user) => user.id != id)
     users.json = filtered_user
}
</script>
<style></style>

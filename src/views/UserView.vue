<template>
<el-row :gutter="20">
<el-col :sm="6" :md="8" v-for="user in users" :key="user.id">
<router-link :to="'/userprofile/' + user.id">
    <userCard :img="user.img" :name="user.name" :id="user.id" @clicked="funck"/>
</router-link>
</el-col>
</el-row>
</template>
<script setup>
import users from "@/server/users.json"
import userCard from "@/components/UserCard.vue"
const funck = () => {
    console.log(1111);
}
</script>
<style>

</style>
<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="container mx-auto">
    <header class="shadow-xl py-5 mb-5 ">
      <div class="wrapper">

        <nav class="flex gap-5 justify-center">
          <RouterLink class="hover:text-red-400" to="/">Todo List</RouterLink>
          <RouterLink class="hover:text-red-400" to="/about">Gallary</RouterLink>
          <RouterLink class="hover:text-red-400" to="/homework">Homework</RouterLink>
          <RouterLink class="hover:text-red-400" to="/user">User</RouterLink>
          <RouterLink class="hover:text-red-400" to="/buttons">Buttons</RouterLink>
          <RouterLink class="hover:text-red-400" to="/post">Post</RouterLink>
          <RouterLink class="hover:text-red-400" to="/students">Students</RouterLink>
          <RouterLink class="hover:text-red-400" to="/todolistvuex">TodolistVuex</RouterLink>
        </nav>
      </div>
    </header>

    <RouterView />
  </div>
</template>
<style>
.router-link-active {
  color: coral;
}
</style>

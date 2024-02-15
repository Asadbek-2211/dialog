<template>
<div>
<el-row :gutter="12">
  <el-col :sm="12" :md="8" :lg="6" v-for="img in imgs" :key="img.id" class="mb-[25px]">
    <img class="w-full h-72 object-cover" :src="img.url" alt="" @click="(active_img = img.url),dialog_val = true">
  </el-col>
</el-row>
<el-dialog v-model="dialog_val" align-center>
<img :src="active_img" alt="">
</el-dialog>
</div>
</template>
<script  setup>
const dialog_val = ref(false)
import { ref } from "vue"

const active_img = ref("")
const imgs = ref([
  {
    id:1,
    url:"https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?cs=srgb&dl=pexels-pixabay-210019.jpg&fm=jpg"
  },
  {
    id:2,
    url:"https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnN8ZW58MHx8MHx8fDA%3D"
  },
  {
    id:3,
    url:"https://img.freepik.com/free-photo/modern-sports-car-speeds-through-dark-curve-generative-ai_188544-9136.jpg"
  },
  {
    id:4,
    url:"https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?cs=srgb&dl=pexels-pixabay-210019.jpg&fm=jpg"
  },
  {
    id:5,
    url:"https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnN8ZW58MHx8MHx8fDA%3D"
  },
  {
    id:6,
    url:"https://img.freepik.com/free-photo/modern-sports-car-speeds-through-dark-curve-generative-ai_188544-9136.jpg"
  },
  {
    id:7,
    url:"https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?cs=srgb&dl=pexels-pixabay-210019.jpg&fm=jpg"
  },
  {
    id:8,
    url:"https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnN8ZW58MHx8MHx8fDA%3D"
  },
  {
    id:9,
    url:"https://img.freepik.com/free-photo/modern-sports-car-speeds-through-dark-curve-generative-ai_188544-9136.jpg"
  },
  {
    id:10,
    url:"https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?cs=srgb&dl=pexels-pixabay-210019.jpg&fm=jpg"
  },
  {
    id:11,
    url:"https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnN8ZW58MHx8MHx8fDA%3D"
  },
  {
    id:12,
    url:"https://img.freepik.com/free-photo/modern-sports-car-speeds-through-dark-curve-generative-ai_188544-9136.jpg"
  },

])
</script>
<style>

</style>

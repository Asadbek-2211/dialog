<template>
  <el-row :gutter="20">
    <el-col :md="6">
        <div class="shadow-xl h-screen">
            <div class="p-5 bg-red-100 border-b-2 border-solid border-red-400">
                <h2>Projects</h2>
            </div>
            <div class="mt-5">
                <div class="flex gap-2 justify-between p-2 cursor-pointer hover:bg-red-50" :class="{ 'bg-red-100': active_hw == hw.id} " @click="active_hw = hw.id" v-for="(hw,i) in homeworks " :key="hw.id" >
                    <p>{{ i + 1 }}.{{ hw.title }}</p>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    </el-col>
    <el-col :md="18">
  <el-collapse v-model="activeNames" @change="handleChange">
    <el-collapse-item v-for="hw in homeworks" :key="hw.id" :title="hw.title" >
      <div class="flex items-center gap-12">
        <div v-for="reqs in hw.reqs" :key="reqs.id">
        <span class="text-lg block font-bold">{{ hw.title }}</span>
          <span class="text-lg block font-bold">{{ reqs.title }}</span>
          <div class="w-[450px] bg-gray-200 p-[20px] rounded-lg mt-[10px]">
            <p>{{ reqs.title }}</p>
          </div>
          <h3 class="text-lg font-bold">{{ hw.desk }}</h3>
          <div class="w-[450px] bg-gray-200 p-[20px] rounded-lg">
            <p>{{ hw.desk }}</p>
          </div>
        </div>
      </div>
    </el-collapse-item>
  </el-collapse>
</el-col>

  </el-row>
</template>
<script setup>
import { ref } from "vue"
const active_hw = ref(1)
const homeworks = ref([
  {
    id: 1,
    title: "hw1",
    reqs: [
      {
        id: 1,
        title: "req1.1",
      },
      {
        id: 2,
        title: "req1.2",
      },
    ],
    desk:"desk1",

  },
  {
    id: 2,
    title: "hw2",
    reqs: [
      {
        id: 1,
        title: "req2.1",
      },
      {
        id: 2,
        title: "req2.2",
      },
    ],
    desk:"desk2",
    
  },
  
]);
</script>
<style>

</style>

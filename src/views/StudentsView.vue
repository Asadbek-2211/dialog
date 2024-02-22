<template>
  <div class="students">
    <h1>Students</h1>
    <el-select v-model="status_val" class="w-32 my-2" placeholder="Status" clearable>
        <el-option label="Active" value="active"/>
        <el-option label="archived" value="archived"/>
    </el-select>
    <el-select v-model="age_val" class="w-32 my-2" placeholder="Age" clearable>
        <el-option label="8-12" value="8"/>
        <el-option label="12-16" value="16"/>
    </el-select>
    <StudentsTable :status="status_val" :age="age_val" />
  </div>
</template>
<script setup>
import SearchStudents from "@/components/SearchStudents.vue";
import StudentsTable from "@/components/StudentsTable.vue";
import { ref } from "vue";
const status_val = ref("")
const age_val = ref(null)
</script>
<style>
.students table,
.students th,
.students td {
    border: 1px solid black;
    padding: 10px;
}
</style>

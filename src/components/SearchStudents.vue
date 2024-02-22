<template>
<input type="text" class="border" @input="send_students" v-model="student_search">
</template>
<script setup>
import { ref } from 'vue';
const student_search = ref("")
const emits = defineEmits("inp_arg")
const send_students = () => {
    emits("inp_arg",student_search.value)
}
</script>
<style>
</style>
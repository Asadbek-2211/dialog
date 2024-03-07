<template>
<input type="text" v-model="inp_search" class="border-2" @input="send_change">
</template>
<script setup>
import { ref } from 'vue';
const inp_search = ref("")
const emits = defineEmits(["input_arg"])
const send_change = () => {
    emits("input_arg",inp_search.value)
}
</script>
<style>
    
</style>

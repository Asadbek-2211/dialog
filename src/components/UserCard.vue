<template>
 <div class="p-2 rounded shadow">
<img :src="img" class="w-full h-72 object-contain" alt="">
<p class="text-[32px] text-center">{{ name }}</p>
<p class="text-[32px] text-center">{{ phone }}</p>
<button @click="$emit('clicked')">click</button>
<slot></slot>
</div>
</template>
<script setup>
const props = defineProps(["img","name","phone"])
</script>

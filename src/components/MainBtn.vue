<template>
  <button @click="click" class="bg-red-300 p-2">{{ title }}</button>
</template>
<script setup>
const props = defineProps(["title"]);

const emits = defineEmits(["clicked"]);

const click = () => {
  emits("clicked", props.title);
};
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>N</th>
        <th>Name</th>
        <th>Phone</th>
        <th>Status</th>
        <th>Age</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(student, i) in filtered_students" :key="student.id">
        <td>{{ i + 1 }}</td>
        <td>{{ student.name }}</td>
        <td>{{ student.phone }}</td>
        <td>{{ student.status }}</td>
        <td>{{ student.age }}</td>
      </tr>
      {{ props.age }}
    </tbody>
  </table>
</template>
<script setup>
import { onMounted, ref, watch } from "vue";

const props = defineProps(["status","age"]);


const input = ref("")

const search_user_2 = () => {
  const filtered_user_table = students.filter((student) => {
    student.name.toLowerCase().includes(input.value.toLowerCase())
  })
  return filtered_user_table
}
const students = [
  {
    id: 1,
    name: "asadbek",
    phone: "991993138",
    status: "active",
    age: 10,
  },
  {
    id: 2,
    name: "islom",
    phone: "991993138",
    status: "archived",
    age: 12,
  },
];

const filtered_students = ref([]);
const filter_students = () => {
  if (props.status.length == 0) filtered_students.value = students;
  else {
    filtered_students.value = students.filter((s) => s.status == props.status);
  }
};
const filtered_age = ref([]);
const filter_age = () => {
  if( 3 ) filtered_age.value = students
    else {
      filtered_students.value = students.filter((s) => s.age == props.age)
    }
}
onMounted(() => {
  filter_students();
  filter_age()
});

watch(
  () => props.status,
  () => {
    filter_students();
  }
);
</script>
<style></style>

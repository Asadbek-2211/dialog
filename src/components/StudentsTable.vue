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
     <tr v-if="filtered_students.length == 0">
      <td colspan="5">
        No Students
      </td>
     </tr>
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
  if (props.status.length == 0 && !props.age) filtered_students.value = students;
  else {
    filtered_students.value = students.filter((s) =>  {
      if(!props.age) return s.status == props.status
      else if (props.status.length == 0) {
        if(props.age == 8) return s.age >= 8 && s.age < 12
        else return s.age >= 12 && s.age <= 16;
      }else{
        if(props.age == 8) return s.age >= 8 && s.age < 12 && s.status == props.status
        else return s.age >= 12 && s.age <= 16 && s.status == props.status
      }
      });
  }
};
onMounted(() => {
  filter_students();
});

watch(
  () => props.status,
  () => {
    filter_students();
  }
);
watch(
  () => props.age,
  () => {
    filter_students();
  }
);
</script>
<style></style>

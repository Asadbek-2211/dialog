<template>
  <h2>post</h2>
  <input
    type="number"
    v-model="input_search"
    @input="render_id"
    class="border border-solid"
  />
  <div
    class="mb-[20px] p-4 text-gray-500 rounded-lg bg-yellow-200 w-96"
    v-if="searched_post.title"
  >
    <img :src="searched_post?.image" alt="" class="img_url" />
    <span class="text-xl">{{ searched_post?.title }}</span>
    <p>{{ searched_post?.content }}</p>
  </div>
  <el-row :gutter="20">
    <el-col :sm="12" :md="8" :lg="6" v-for="post in posts" :key="post.id">
        <el-space direction="vertical" alignment="flex-start">
    <div>
      <label style="margin-right: 16px">Switch Loading</label>
      <el-switch v-model="loading" />
    </div>
    <el-skeleton style="width: 240px" :loading="loading" animated>
      <template #template>
        <el-skeleton-item variant="image" style="width: 240px; height: 240px" />
        <div style="padding: 14px">
          <el-skeleton-item variant="h3" style="width: 50%" />
          <div
            style="
              display: flex;
              align-items: center;
              justify-items: space-between;
              margin-top: 16px;
              height: 16px;
            "
          >
            <el-skeleton-item variant="text" style="margin-right: 16px" />
            <el-skeleton-item variant="text" style="width: 30%" />
          </div>
        </div>
      </template>
      <template #default>
        <el-card :body-style="{ padding: '0px', marginBottom: '1px' }">
          <div style="padding: 14px">
            <span>
                <div class="mb-[20px] p-4 text-gray-500 rounded-lg bg-yellow-200">
                    <img :src="post.image" alt="" class="img_url" />
                    <span class="text-xl">{{ post.title }}</span>
                    <p>{{ post.content.slice(0, 150) }}</p>
                      </div>
               </span>
            <div class="bottom card-header">
              <div class="time">{{ currentDate }}</div>
              <el-button text class="button">Operation button</el-button>
            </div>
          </div>
        </el-card>
      </template>
    </el-skeleton>
  </el-space>
    </el-col>
  </el-row>
</template>
<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
const input_search = ref(null);
const searched_post = ref({});

const loading = ref(true)
const currentDate = new Date().toDateString()

const render_id = async () => {
  searched_post.value = await axios
    .get("https://jsonplaceholder.org/posts/1")
    .then((res) => res.data)
    .catch(() => []);
};
const posts = ref([]);
const get_posts = async () => {
  posts.value = await axios
    .get("https://jsonplaceholder.org/posts")
    .then((res) => res.data)
    .catch(() => []);
};
onMounted(() => {
  get_posts();
});
</script>
<style>
.img_url {
  border-radius: 10px;
}
</style>

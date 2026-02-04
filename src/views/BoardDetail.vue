<script setup>
import { onMounted, reactive } from 'vue';
import { useRoute } from 'vue-router';
import httpService from '@/services/httpService';

const route = useRoute();

const state = reactive({
    data: {}
});

onMounted(async () => {
    const id= route.params.id;
    console.log('id: ', id);
    state.data = await httpService.findById(id);
})
</script>

<template>
<h3>게시글 디테일</h3>
<div>글번호: {{ state.data.id }}</div>
<div>작성일시: {{ state.data.createdAt }}</div>
<div>글제목: {{ state.data.title }}</div>
<div>글내용: {{ state.data.contents }}</div>
</template>

<style scoped>

</style>
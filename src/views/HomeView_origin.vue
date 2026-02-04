<script setup>
import { reactive, onMounted } from 'vue';
import httpService from '@/services/httpService';

const state = reactive({
    list: [],
    searchText: ''
});

onMounted(async () => {
    state.list = await httpService.findAll();
});

const search = async () => {
    const params = {
        search_text: state.searchText
    }
    state.list = await httpService.findAll(params);
}

</script>

<template>
<h3>게시판 리스트</h3>
<div>
  <label>검색: <input type="searchText" v-model="state.searchText" @keyup.enter="search"></label>
  <button @click="search">검색</button>
</div>

<div v-if="!state.list.length">등록된 게시글이 없습니다.</div>
<div v-else>
    <table>
        <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성일시</th>
        </tr>
        <tr v-for="item in state.list" :key="item.id">
            <th>{{ item.id }}</th>
            <th>{{ item.title }}</th>
            <th>{{ item.createdAt }}</th>
        </tr>
    </table>
</div>
</template>

<style scoped>

</style>
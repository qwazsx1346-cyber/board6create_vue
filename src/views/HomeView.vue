<script setup>
import { reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import httpService from '@/services/httpService';

const router = useRouter();

const state = reactive({
    list: [],
    searchText: ''
});

const httpSearch = async params => {
    state.list = await httpService.findAll(params);
}

onMounted(() => {
    httpSearch();
});

const search = () => {
    const params = {
        search_text: state.searchText
    };
    httpSearch(params);
}

const moveToDetail = id => {
    router.push(`/detail/${id}`)
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
      <thead>
          <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성일시</th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="item in state.list" :key="item.id" @click="moveToDetail(item.id)">
              <th>{{ item.id }}</th>
              <th>{{ item.title }}</th>
              <th>{{ item.createdAt }}</th>
          </tr>
      </tbody>
    </table>
</div>
</template>

<style scoped>
tr:hover {cursor: pointer; background-color: lightblue;}
</style>
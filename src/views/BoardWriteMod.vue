<script setup>
import { reactive } from 'vue';
import httpService from '@/services/httpService';
import router from '@/router';

const state = reactive({
    data: {
        id: 0,
        title: '',
        contents: ''
    }
});
//반응형 객체 (title, contents)와 화면과 연결
//버튼 이벤트 바인딩

const submit = async () => {
    const result = await httpService.save(state.data);
    if(result === 1) {
        alert('등록 성공!');
    } else {
        alert('등록 실패!');
    }
}
</script>

<template>
<h3>글쓰기</h3>

<div> <!--v-bind는 단방향, 반드시 v-model을 사용-->
    <label>제목: <input type="text" v-model="state.data.title"></label>
</div>
<div>
    <label>내용: <textarea v-model="state.data.contents"></textarea></label>
</div>
<div>
    <button @click="submit">등록</button>
</div>
<!-- 제목, 내용 작성할 수 있고 작성된 글 등록할 수 있는 버튼 -->
</template>

<style scoped>

</style>
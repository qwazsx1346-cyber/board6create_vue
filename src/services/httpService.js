import axios from "axios";
axios.defaults.baseURL = 'http://localhost:8080/api';

class HttpService {
    #url = '/board';

    async save(params) {
        const res = await axios.post(this.#url, params); //두번째 란에 객체params를 넣어주면 axios가 알아서 JSON형태로 바꿔준다
        return res.data;
    }

    async findAll(params) {
        const res = await axios.get(this.#url, { params }); //{'params': params}와 같음
        return res.data;
    }

    async findById(id) {
        const res = await axios.get(`${this.#url}/${id}`);
        return res.data;
    }
}

export default new HttpService(); //export해줘야 다른곳에서 쓸 수 있음.
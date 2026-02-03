import axios from "axios";
axios.defaults.baseURL = 'http://localhost:8080/api';

class HttpService {
    #url = '/board';

    async save(params) {
        const res = await axios.post(this.#url, params);
        return res.data;
    }
}

export default new HttpService(); //export해줘야 다른곳에서 쓸 수 있음.
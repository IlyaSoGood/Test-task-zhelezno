import axios from "axios";

// import * as axios from "axios";
export default class PhotoService {
    static async getAll(limit = 20, page = 1) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/albums/1/photos', {
            params: {
                _limit: limit,
                _page: page
            }
        });
        return response
    }
}
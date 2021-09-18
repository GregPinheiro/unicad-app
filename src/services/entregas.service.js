import api from '../api';

class DataService {

    create(data) {
        return api.post('', data);
    }

    get(id) {
        return api.get(`/${id}`);
    }
}

export default new DataService;
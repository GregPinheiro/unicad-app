import api from '../api';

class DataService {

    create(data) {
        return api.post('', data);
    }
}

export default new DataService;
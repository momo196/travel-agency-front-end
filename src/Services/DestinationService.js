import axios from 'axios'
const DESTINATION_API_URL = 'http://localhost:8080/destination'
class DestinationService {
    retrieveAllDestination() {
        return axios.get(`${DESTINATION_API_URL}s`);
    }

    deleteCourse( id) {
        //console.log('executed service')
        return axios.delete(`${DESTINATION_API_URL}/${id}`);
    }

}
export default new DestinationService();
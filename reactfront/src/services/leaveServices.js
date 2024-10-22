import axios from 'axios';

const LEAVE_BASE_REST_API_URL = 'http://localhost:8080/api/leav';

class leaveService {
    getAllLeave() {
      return axios.get(LEAVE_BASE_REST_API_URL);
    }

    createleave(leave) {
      return axios.post(LEAVE_BASE_REST_API_URL, leave);
    }

    getleaveById(leaveid) {
      return axios.get(`${LEAVE_BASE_REST_API_URL}/${leaveid}`);
    }
    
  updateleave(leaveid, leave) {
    return axios.put(`${LEAVE_BASE_REST_API_URL}/${leaveid}`, leave);
  }

  deleteleave(leaveid) {
    return axios.delete(`${LEAVE_BASE_REST_API_URL}/${leaveid}`);
  }
}

export default new leaveService();

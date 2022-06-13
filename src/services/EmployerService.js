import axios from "axios";

export default class EmployerService {
  getEmployers() {
    return axios.get("http://localhost:8080/api/employers/getall");
  }

  getEmployerById(id) {
    return axios.get("http://localhost:8080/api/employers/getbyid?id="+id)
  }
}
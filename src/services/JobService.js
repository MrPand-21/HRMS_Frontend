import axios from "axios";

export default class JobService {
  getJobs() {
    return axios.get("http://localhost:8080/api/jobs/getall");
  }
  addJob(job) {
    return axios.post("http://localhost:8080/api/jobs/add",job)
  }

  deleteJob(id) {
    return axios.post("http://localhost:8080/api/jobs/delete?id="+id)
  }

  getApprovedJobs() {
    return axios.get("http://localhost:8080/api/jobs/getallapprovedjobs");
  }

  getUnapprovedJobs() {
    return axios.get("http://localhost:8080/api/jobs/getallunapprovedjobs");
  }

  setActive(id){
    return axios.post("http://localhost:8080/api/jobs/setactivetojobvisibility?id="+id)
  }

  getJobById(id){
    return axios.get("http://localhost:8080/api/jobs/getjobbyid?id="+id);
  }
}
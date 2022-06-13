import axios from "axios";

export default class WorkPlaceService {
  getWorkPlaces() {
    return axios.get("http://localhost:8080/api/workplaces/getall");
  }
}
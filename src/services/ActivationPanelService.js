import axios from "axios";

export default class ActivationPanelService {
  setApproved(panelForJob) {
    return axios.post("http://localhost:8080/api/activationpanel/setapproved",panelForJob);
  }
  setUnapproved(panelForJob) {
    return axios.post("http://localhost:8080/api/activationpanel/setunapproved",panelForJob);
  }
}
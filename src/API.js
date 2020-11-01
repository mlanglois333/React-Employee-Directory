import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=20&nat=us"


function API(){ return axios.get(BASEURL);}
export default API;

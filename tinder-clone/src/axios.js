import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder-backend0309.herokuapp.com/",
});

export default instance;

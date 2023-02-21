import axios from "axios";

class HelloWorld {
  retrieveMessage() {
    return axios.get(`http://localhost:8080/hello-world`);
  }
  retrieveBeanMessage() {
    return axios.get(`http://localhost:8080/hello-world-bean`);
  }
  retrievePathMessage(name) {
    return axios.get(`http://localhost:8080/hello-world-bean/path/${name}`);
  }
}
export default new HelloWorld();

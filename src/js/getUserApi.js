import axios from "axios";

export default function getUsers() {
  const BASE_URL = "https://reqres.in";

  return axios
    .get(`${BASE_URL}/api/users?page=1&per_page=12`)
    .then((response) => {
      if (response.status !== 200) {
        throw new Error(response.status);
      }
      return response.data.data;
    });
}

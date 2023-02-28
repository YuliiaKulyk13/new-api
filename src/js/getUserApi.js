import axios from "axios";

export default async function getUsers() {
  const BASE_URL = "https://reqres.in";

  const response = await axios.get(`${BASE_URL}/api/users?page=1&per_page=12`);
  if (response.status !== 200) {
    throw new Error(response.status);
  }
  return response.data.data;
}

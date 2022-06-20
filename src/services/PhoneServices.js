import axios from "axios";

const baseUrl = "http://localhost:3001/phonebook"


const getAll = () => {
  const request = axios.get(baseUrl);

  return request.then((response) => response.data)
};


const deleteOne = (id) => {
  return (axios.delete(`${baseUrl}/${id}`))
}

export default {
  getAll,
  deleteOne
}
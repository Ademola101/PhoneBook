import axios from "axios";

const baseUrl = "http://localhost:3001/phonebook"


const getAll = () => {
  const request = axios.get(baseUrl);

  return request.then((response) => response.data)
};


const deleteOne = (id) => {
  return (axios.delete(`${baseUrl}/${id}`))
};

const create = (personObject) => {
const request  = axios.post(baseUrl,personObject);
return request.then(resonse => resonse.data)
}

export default {
  getAll,
  deleteOne,
  create
}
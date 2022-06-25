import axios from "axios";

const baseUrl = "http://salty-plateau-41961.herokuapp.com/api/persons"


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
};

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`,newObject)
  return request.then(response => response.data)
}


const PhoneServices = {
  create,
  update,
  deleteOne,
  getAll
};

export default PhoneServices
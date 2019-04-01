import axios from 'axios'
const baseUrl = '/api/trains'

let token = null

const getAll = async () => {
  const request = await axios.get(baseUrl)
  return request.data
}

const setToken = (newToken) => {
  token = `bearer ${newToken}`
}

const create = async (newObject) => {
  const config = {
    headers: { 'Authorization': token }
  }

  const response = await axios.post(baseUrl, newObject, config)
  return response.data
}

const deleteTrain = async (id) => {
  const config = {
    headers: { 'Authorization': token }
  }

  await axios.delete(`${baseUrl}/${id}`, config)
}

const update = async (id, newObject) => {
  const newTrain = await axios.put(`${baseUrl}/${id}`, newObject)
  return newTrain
}

export default { getAll, create, update, setToken, deleteTrain }
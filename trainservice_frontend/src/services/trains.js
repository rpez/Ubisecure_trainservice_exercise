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

const update = async (id, newObject) => {
  const newTrain = await axios.put(`${baseUrl}/${id}`, newObject)
  return newTrain
}

export default { getAll, update, setToken }
export default {
  async getOne(axios, id) {
    const res = await axios.get(`/api/v1/topic/${id}`)
    return res.data
  },
  async getAll(axios) {
    const res = await axios.get('/api/v1/topic')
    return res.data
  },
  async downloadZip(axios, id) {
    const axiosOptions = {
      responseType: 'arraybuffer',
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const res = await axios.get(`/api/v1/topic/${id}/download`, axiosOptions)
    return res.data
  },
  async search(axios, store, keyword) {
    const query = []
    query.push(`limit=${store.state.limit || 10}`)
    query.push(`page=${store.state.page || 1}`)
    if (keyword) query.push(`keyword=${keyword}`)
    const res = await axios.get(`/api/v1/topic/search?${query.join('&')}`)
    return res.data
  },
  async createOne(axios, dto) {
    const res = await axios.post('/api/v1/topic', dto)
    return res.data
  },
  async updateOne(axios, id, dto) {
    const res = await axios.put(`/api/v1/topic/${id}`, dto)
    return res.data
  },
  async deleteOne(axios, id) {
    const res = await axios.delete(`/api/v1/topic/${id}`)
    return res.data
  },
}

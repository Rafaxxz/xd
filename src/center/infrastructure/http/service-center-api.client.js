import axios from 'axios'

export class ServiceCenterApiClient {
  constructor() {
    this.baseURL = 'https://my.api.mockaroo.com'
  }

  async getServiceCenters() {
    try {
      const response = await axios.get(`${this.baseURL}/centers/centers.json`)
      return response.data
    } catch (error) {
      console.error('Error fetching service centers:', error)
      throw error
    }
  }
}
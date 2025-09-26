import axios from 'axios'
import { ServiceCenter } from '../domain/service-center.entity.js'
import { ServiceCenterAssembler } from './service-center.assembler.js'

export class ServiceCenterApiService {
  constructor() {
    this.apiUrl = 'https://my.api.mockaroo.com/centers/centers.json'
    this.assembler = new ServiceCenterAssembler()
  }

  async getServiceCenters() {
    try {
      const response = await axios.get(this.apiUrl)
      return response.data.map(data => this.assembler.toEntity(data))
    } catch (error) {
      console.error('Error fetching service centers:', error)
      return this.getMockData()
    }
  }

  getMockData() {
    return [
      new ServiceCenter(1, 'California', 'Los Angeles', 34.0522, -118.2437, ['Toyota', 'Honda', 'Ford']),
      new ServiceCenter(2, 'New York', 'New York City', 40.7128, -74.0060, ['BMW', 'Mercedes', 'Audi']),
      new ServiceCenter(3, 'Texas', 'Houston', 29.7604, -95.3698, ['Chevrolet', 'Ford', 'Dodge']),
      new ServiceCenter(4, 'Florida', 'Miami', 25.7617, -80.1918, ['Toyota', 'Nissan', 'Hyundai'])
    ]
  }
}
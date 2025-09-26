import { ServiceCenterRepository } from '../../infrastructure/repositories/service-center.repository.js'
import { ServiceCenterAssembler } from '../assemblers/service-center.assembler.js'

export class ServiceCenterService {
  constructor() {
    this.repository = new ServiceCenterRepository()
  }

  async getAllServiceCenters() {
    try {
      const responses = await this.repository.getAll()
      return ServiceCenterAssembler.toEntities(responses)
    } catch (error) {
      console.error('Error in service:', error)
      throw error
    }
  }
}
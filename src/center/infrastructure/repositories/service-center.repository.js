import { ServiceCenterApiClient } from '../http/service-center-api.client.js'

export class ServiceCenterRepository {
  constructor() {
    this.apiClient = new ServiceCenterApiClient()
  }

  async getAll() {
    return await this.apiClient.getServiceCenters()
  }
}
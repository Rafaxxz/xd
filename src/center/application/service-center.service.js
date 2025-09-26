import { ServiceCenterApiService } from '../infrastructure/service-center-api.service.js'

export class ServiceCenterService {
  constructor() {
    this.apiService = new ServiceCenterApiService()
  }

  async getAllServiceCenters() {
    return await this.apiService.getServiceCenters()
  }

  generateMapUrl(latitude, longitude) {
    return `https://maps.google.com/?q=${latitude},${longitude}`
  }
}
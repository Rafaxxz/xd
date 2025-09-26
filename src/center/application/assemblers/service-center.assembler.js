import { ServiceCenter } from '../../domain/entities/service-center.entity.js'
import { ServiceCenterResponse } from '../../domain/models/service-center-response.model.js'

export class ServiceCenterAssembler {
  static toEntity(response) {
    if (response instanceof ServiceCenterResponse) {
      return new ServiceCenter(
        response.id,
        response.state,
        response.city,
        response.latitude,
        response.longitude,
        response.carMakes
      )
    }
    return new ServiceCenter(
      response.id,
      response.state,
      response.city,
      response.latitude,
      response.longitude,
      response.carMakes
    )
  }

  static toEntities(responses) {
    return responses.map(response => this.toEntity(response))
  }
}
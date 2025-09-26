import { ServiceCenter } from '../domain/service-center.entity.js'

export class ServiceCenterAssembler {
  toEntity(data) {
    return new ServiceCenter(
      data.id,
      data.state,
      data.city,
      data.latitude,
      data.longitude,
      Array.isArray(data.carMakes) ? data.carMakes : []
    )
  }

  toResource(entity) {
    return {
      id: entity.id,
      state: entity.state,
      city: entity.city,
      latitude: entity.latitude,
      longitude: entity.longitude,
      carMakes: entity.carMakes
    }
  }
}
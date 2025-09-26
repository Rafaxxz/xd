export class ServiceCenterResponse {
  constructor(id, state, city, latitude, longitude, carMakes) {
    this.id = id
    this.state = state
    this.city = city
    this.latitude = latitude
    this.longitude = longitude
    this.carMakes = carMakes
  }
}
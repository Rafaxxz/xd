import axios from 'axios'

export class LogoApiService {
  constructor() {
    this.baseURL = 'https://img.logo.dev'
  }

  getLogoUrl(domain) {
    return `${this.baseURL}/${domain}?token=your-token-here`
  }
}
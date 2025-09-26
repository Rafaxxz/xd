<template>
  <div class="service-centers-list">
    <h2 class="text-center mb-4">{{ $t('app.serviceCenters') }}</h2>
    <div class="grid" v-if="serviceCenters.length > 0">
      <div 
        v-for="center in serviceCenters" 
        :key="center.id"
        class="col-12 md:col-6 lg:col-4"
      >
        <ServiceCenterCard :service-center="center" />
      </div>
    </div>
    <div v-else-if="loading" class="text-center">
      <pv-progress-spinner />
      <p class="mt-2">Loading service centers...</p>
    </div>
    <div v-else class="text-center">
      <p>No service centers available.</p>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import ProgressSpinner from 'primevue/progressspinner'
import ServiceCenterCard from './service-center-card.vue'
import { ServiceCenterService } from '../../application/services/service-center.service.js'

export default {
  name: 'ServiceCentersList',
  components: {
    'pv-progress-spinner': ProgressSpinner,
    ServiceCenterCard
  },
  setup() {
    const serviceCenters = ref([])
    const loading = ref(false)
    const service = new ServiceCenterService()

    const loadServiceCenters = async () => {
      loading.value = true
      try {
        serviceCenters.value = await service.getAllServiceCenters()
      } catch (error) {
        console.error('Failed to load service centers:', error)
        serviceCenters.value = getMockData()
      } finally {
        loading.value = false
      }
    }

    const getMockData = () => {
      return [
        {
          id: 1,
          state: 'California',
          city: 'Los Angeles',
          latitude: 34.0522,
          longitude: -118.2437,
          carMakes: ['Toyota', 'Honda', 'Ford']
        },
        {
          id: 2,
          state: 'Texas',
          city: 'Houston',
          latitude: 29.7604,
          longitude: -95.3698,
          carMakes: ['Chevrolet', 'BMW', 'Mercedes']
        },
        {
          id: 3,
          state: 'New York',
          city: 'New York',
          latitude: 40.7128,
          longitude: -74.0060,
          carMakes: ['Audi', 'Volkswagen', 'Nissan']
        }
      ]
    }

    onMounted(() => {
      loadServiceCenters()
    })

    return {
      serviceCenters,
      loading
    }
  }
}
</script>

<style scoped>
.service-centers-list {
  padding: 2rem;
}
</style>
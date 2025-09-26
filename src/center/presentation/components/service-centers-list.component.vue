<template>
  <div class="service-centers-section" role="main" aria-label="Service centers listing">
    <div class="section-header mb-4">
      <h2 class="text-2xl font-bold text-center">{{ $t('app.serviceCenters') }}</h2>
    </div>
    
    <div v-if="loading" class="text-center p-4" role="status" aria-live="polite">
      <pv-progress-spinner />
      <p class="mt-2">Loading service centers...</p>
    </div>

    <div v-else class="grid">
      <div 
        v-for="center in serviceCenters" 
        :key="center.id"
        class="col-12 md:col-6 lg:col-4"
      >
        <service-center-card 
          :center="center"
          @map-clicked="onMapClicked"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import ProgressSpinner from 'primevue/progressspinner'
import ServiceCenterCard from './service-center-card.component.vue'
import { ServiceCenterService } from '../../application/service-center.service.js'

const { t } = useI18n()
const serviceCenterService = new ServiceCenterService()

const serviceCenters = ref([])
const loading = ref(true)

const loadServiceCenters = async () => {
  try {
    loading.value = true
    serviceCenters.value = await serviceCenterService.getAllServiceCenters()
  } catch (error) {
    console.error('Error loading service centers:', error)
  } finally {
    loading.value = false
  }
}

const onMapClicked = (center) => {
  console.log('Map clicked for center:', center.city)
}

onMounted(() => {
  loadServiceCenters()
})
</script>

<style scoped>
.service-centers-section {
  padding: 2rem 1rem;
  min-height: 60vh;
}

.section-header h2 {
  color: #1976d2;
}
</style>
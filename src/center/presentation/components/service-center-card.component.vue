<template>
  <pv-card class="service-center-card mb-3" role="article" :aria-label="`Service center in ${center.city}, ${center.state}`">
    <template #header>
      <img 
        :src="centerImage" 
        :alt="`Service center in ${center.city}`"
        class="center-image"
        loading="lazy"
      />
    </template>
    <template #title>
      {{ center.city }}, {{ center.state }}
    </template>
    <template #content>
      <div class="center-details" role="region" aria-label="Center details">
        <div class="detail-item">
          <strong>{{ $t('center.state') }}:</strong> {{ center.state }}
        </div>
        <div class="detail-item">
          <strong>{{ $t('center.city') }}:</strong> {{ center.city }}
        </div>
        <div class="detail-item">
          <strong>{{ $t('center.latitude') }}:</strong> {{ center.latitude }}
        </div>
        <div class="detail-item">
          <strong>{{ $t('center.longitude') }}:</strong> {{ center.longitude }}
        </div>
        <div class="detail-item">
          <strong>{{ $t('center.carMakes') }}:</strong>
          <div class="car-makes mt-2">
            <pv-tag 
              v-for="make in center.carMakes" 
              :key="make" 
              :value="make" 
              class="mr-1 mb-1"
              severity="info"
            />
          </div>
        </div>
      </div>
    </template>
    <template #footer>
      <pv-button 
        :label="$t('center.seeMap')"
        icon="pi pi-map-marker"
        @click="openMap"
        class="p-button-primary"
        :aria-label="`Open map for ${center.city} service center`"
      />
    </template>
  </pv-card>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import Card from 'primevue/card'
import Button from 'primevue/button'
import Tag from 'primevue/tag'
import { ServiceCenterService } from '../../application/service-center.service.js'

const props = defineProps({
  center: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['map-clicked'])

const { t } = useI18n()
const serviceCenterService = new ServiceCenterService()

const centerImage = computed(() => {
  return 'https://images.unsplash.com/photo-1486754735734-325b5831c3ad?w=300&h=200&fit=crop&auto=format'
})

const openMap = () => {
  const mapUrl = serviceCenterService.generateMapUrl(props.center.latitude, props.center.longitude)
  window.open(mapUrl, '_blank', 'noopener,noreferrer')
  emit('map-clicked', props.center)
}
</script>

<style scoped>
.service-center-card {
  max-width: 400px;
  margin: 0 auto;
}

.center-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.center-details {
  min-height: 180px;
}

.detail-item {
  margin-bottom: 0.5rem;
}

.car-makes {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
}
</style>
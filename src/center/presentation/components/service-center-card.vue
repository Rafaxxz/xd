<template>
  <pv-card class="service-center-card m-2" :aria-label="`Service center in ${serviceCenter.city}, ${serviceCenter.state}`">
    <template #header>
      <img 
        src="/image.png" 
        :alt="`Service center in ${serviceCenter.city}`"
        class="card-image"
      />
    </template>
    
    <template #title>
      {{ serviceCenter.city }}, {{ serviceCenter.state }}
    </template>
    
    <template #content>
      <div class="center-info">
        <p><strong>{{ $t('center.state') }}:</strong> {{ serviceCenter.state }}</p>
        <p><strong>{{ $t('center.city') }}:</strong> {{ serviceCenter.city }}</p>
        <p><strong>{{ $t('center.latitude') }}:</strong> {{ serviceCenter.latitude }}</p>
        <p><strong>{{ $t('center.longitude') }}:</strong> {{ serviceCenter.longitude }}</p>
        <p><strong>{{ $t('center.carMakes') }}:</strong></p>
        <ul class="car-makes-list">
          <li v-for="make in serviceCenter.carMakes" :key="make">{{ make }}</li>
        </ul>
      </div>
    </template>
    
    <template #footer>
      <pv-button 
        :label="$t('center.seeMap')" 
        icon="pi pi-map"
        class="p-button-primary"
        @click="openMap"
        :aria-label="`Open map for ${serviceCenter.city}, ${serviceCenter.state}`"
      />
    </template>
  </pv-card>
</template>

<script>
import Card from 'primevue/card'
import Button from 'primevue/button'

export default {
  name: 'ServiceCenterCard',
  components: {
    'pv-card': Card,
    'pv-button': Button
  },
  props: {
    serviceCenter: {
      type: Object,
      required: true
    }
  },

  methods: {
    openMap() {
      const url = `https://www.google.com/maps?q=${this.serviceCenter.latitude},${this.serviceCenter.longitude}`
      window.open(url, '_blank')
    }
  }
}
</script>

<style scoped>
.service-center-card {
  max-width: 400px;
  margin: 1rem;
}

.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.car-makes-list {
  list-style-type: disc;
  margin-left: 1rem;
}

.center-info p {
  margin: 0.5rem 0;
}
</style>
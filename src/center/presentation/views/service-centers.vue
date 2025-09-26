<template>
  <div class="service-centers-view">
    <ServiceCentersList />
  </div>
</template>

<script>
import ServiceCentersList from '../components/service-centers-list.vue'

export default {
  name: 'ServiceCenters',
  components: {
    ServiceCentersList
  }
}
</script>
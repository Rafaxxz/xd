<template>
  <div class="home-view">
    <ServiceCenters />
  </div>
</template>

<script>
import ServiceCenters from '../../../center/presentation/views/service-centers.vue'

export default {
  name: 'Home',
  components: {
    ServiceCenters
  }
}
</script>
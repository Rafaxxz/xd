<template>
  <pv-toolbar class="layout-toolbar" :aria-label="$t('app.toolbar')">
    <template #start>
      <div class="flex align-items-center">
        <h1 class="text-xl font-bold">{{ $t('app.title') }}</h1>
      </div>
    </template>
    
    <template #end>
      <LanguageSwitcher />
    </template>
  </pv-toolbar>
</template>

<script>
import Toolbar from 'primevue/toolbar'
import LanguageSwitcher from './language-switcher.vue'

export default {
  name: 'Layout',
  components: {
    'pv-toolbar': Toolbar,
    LanguageSwitcher
  }
}
</script>

<style scoped>
.layout-toolbar {
  background-color: #1976d2;
  color: white;
}
</style>
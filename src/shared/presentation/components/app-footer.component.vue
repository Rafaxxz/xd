<template>
  <footer class="app-footer mt-4 p-4" role="contentinfo" aria-label="Footer information">
    <div class="text-center">
      <p class="m-0 mb-2">{{ $t('footer.copyright') }}</p>
      <p class="m-0">{{ $t('footer.developedBy') }}</p>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
.app-footer {
  background-color: #f8f9fa;
  border-top: 1px solid #dee2e6;
  color: #6c757d;
  font-size: 0.875rem;
}
</style>
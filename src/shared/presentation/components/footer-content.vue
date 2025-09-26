<template>
  <footer class="footer-content p-4 text-center bg-primary text-white">
    <div class="footer-line">
      {{ $t('footer.copyright') }}
    </div>
    <div class="footer-line mt-2">
      {{ $t('footer.developedBy') }}
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterContent'
}
</script>

<style scoped>
.footer-content {
  background-color: #1976d2;
  margin-top: auto;
}

.footer-line {
  font-size: 0.9rem;
}
</style>
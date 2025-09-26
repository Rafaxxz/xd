<template>
  <pv-toolbar class="toolbar" role="banner" aria-label="Main navigation">
    <template #start>
      <div class="flex align-items-center">
        <img 
          :src="logoUrl" 
          alt="Midas International Logo" 
          class="logo mr-2"
          width="40"
          height="40"
        />
        <span class="company-name text-xl font-bold">{{ $t('app.title') }}</span>
      </div>
    </template>
    <template #end>
      <div class="language-selector" role="region" aria-label="Language selector">
        <pv-button 
          :label="$t('language.english')"
          :class="{ 'p-button-outlined': locale !== 'en' }"
          class="mr-2"
          @click="changeLanguage('en')"
          size="small"
          :aria-pressed="locale === 'en'"
        />
        <pv-button 
          :label="$t('language.spanish')"
          :class="{ 'p-button-outlined': locale !== 'es' }"
          @click="changeLanguage('es')"
          size="small"
          :aria-pressed="locale === 'es'"
        />
      </div>
    </template>
  </pv-toolbar>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import Toolbar from 'primevue/toolbar'
import Button from 'primevue/button'

const { locale, t } = useI18n()
const logoUrl = ref('')

const generateLogoUrl = () => {
  const domain = 'midas.com'
  return `https://img.logo.dev/${domain}?token=pk_X-1ZO13OSgeOdV-CFtXCIA`
}

onMounted(() => {
  logoUrl.value = generateLogoUrl()
})

const changeLanguage = (newLocale) => {
  locale.value = newLocale
}
</script>

<style scoped>
.toolbar {
  background: #1976d2;
  color: white;
  border: none;
}

.logo {
  border-radius: 4px;
}

.company-name {
  color: white;
}

.language-selector button {
  min-width: 50px;
}
</style>
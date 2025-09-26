<template>
  <div class="language-switcher">
    <pv-dropdown 
      v-model="selectedLanguage" 
      :options="languages" 
      option-label="label" 
      option-value="value"
      @change="changeLanguage"
      :aria-label="$t('language.switch')"
    />
  </div>
</template>

<script>
import Dropdown from 'primevue/dropdown'

export default {
  name: 'LanguageSwitcher',
  components: {
    'pv-dropdown': Dropdown
  },
  data() {
    return {
      selectedLanguage: 'en',
      languages: [
        { label: 'EN', value: 'en' },
        { label: 'ES', value: 'es' }
      ]
    }
  },
  mounted() {
    this.selectedLanguage = this.$i18n.locale
  },
  methods: {
    changeLanguage() {
      this.$i18n.locale = this.selectedLanguage
    }
  }
}
</script>
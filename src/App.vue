<template>
  <div id="app" class="app-container">
    <Layout />
    <main class="main-content">
      <Home />
    </main>
    <FooterContent />
  </div>
</template>

<script>
import Layout from './shared/presentation/components/layout.vue'
import Home from './shared/presentation/views/home.vue'
import FooterContent from './shared/presentation/components/footer-content.vue'

export default {
  name: 'App',
  components: {
    Layout,
    Home,
    FooterContent
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', sans-serif;
  line-height: 1.6;
  color: #333;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding: 0;
}
</style>
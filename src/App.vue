<template>
  <RouterView></RouterView>
  <FooterVue/>
</template>

<script>
import FooterVue from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    FooterVue
  }
}
</script>

<style lang="scss">
@import './scss/main.scss';
</style>

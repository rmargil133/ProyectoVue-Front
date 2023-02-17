<template>
  <HeaderPrimero/>
  <InicioVue/>
  <FooterVue/>
</template>

<script>

import HeaderPrimero from './components/Header.vue'
import InicioVue from './components/Inicio.vue'
import FooterVue from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    HeaderPrimero,
    InicioVue,
    FooterVue
  }
}
</script>

<style lang="scss">
@import './scss/main.scss';
</style>

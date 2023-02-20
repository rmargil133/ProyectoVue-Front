<template>
    <header>
        <div class="vacio"></div>
        <h1><router-link to="/" class="enlace_logo">GARAKOHANDMADE</router-link></h1>
      <nav class="nav">
          <ul>
            <li><router-link to="/listadoPrincipal">Articulos</router-link></li>
            <li><router-link to="/contactoPrincipal">Contacto</router-link></li>
            <li><router-link to ="/registro">Register</router-link></li>
            <li><router-link to="/login">Log-In</router-link></li>
          </ul>
      </nav>
    </header>
</template>

<script>
export default {
  name: 'headerPrincipal'
}
</script>


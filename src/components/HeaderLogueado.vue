<template>
    <header class="headerLogueado">
        <div class="headerLogueado__vacio"></div>
        <h1><router-link to="/" class="headerLogueado__enlace_logo">GARAKOHANDMADE</router-link></h1>
      <nav class="headerLogueado__nav">
          <ul>
            <li><router-link to="/listadoLogueado">Articulos</router-link></li>
            <li><router-link to="/contactoLogueado">Contacto</router-link></li>
            <img src="../assets/user.png" alt="foto usuario">
          </ul>
      </nav>
    </header>
</template>

<script>
export default {
  name: 'headerLogueado'
}
</script>


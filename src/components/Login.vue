<template>
<headerSecundario/>
<main class="Login">
    <img class="Login__imagen" src="../assets/d.png" alt="fondo-inicio">
    <form class="Login__formulario">   
      <h2> Login </h2>
      <ul>
          <li>
            <input placeholder="Usuario" type="text" id="user" name="user_name" required/>
          </li>
          <li>
            <input placeholder="Contraseña (Min 8 Caracteres)" type="password" id="password" name="user_password" required/>
          </li>

          <li>
          
          </li>
          <button type="submit">Enviar</button>
      </ul>
    </form>
  </main>
</template>

<script>
import headerSecundario from './HeaderSecundario.vue'
export default {
  name: 'loginForm',
  components: {
    headerSecundario
  }
}
</script>
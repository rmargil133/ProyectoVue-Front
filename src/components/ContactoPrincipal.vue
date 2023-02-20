<template>
  <headerPrincipal/>
<main class="contacto">
    <img class="contacto__imagen" src="../assets/d.png" alt="fondo-inicio">
    <form class="contacto__formulario">   
      <h2> Contacto </h2>
      <ul>
        <li>
          <input placeholder="Correo electronico" type="email" id="email" name="user_email" required/>
          </li>
          <li>
            <input placeholder="Teléfono" type="tel" name="telefono"  required/>
          </li>
          <li>
          <textarea placeholder="Mensaje" cols="35" rows="10" maxlength="100" required/>
          </li>
          <button type="submit">Enviar</button>
      </ul>
    </form>
  </main>
</template>

<script>
import headerPrincipal from './Header.vue'
export default {
  name: 'contactoPrincipal',
  components: {
    headerPrincipal
  }
}
</script>
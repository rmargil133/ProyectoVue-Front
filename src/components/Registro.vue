<template>
    <headerSecundario/>
    <main class="Registro">
        <img class="Registro__imagen" src="../assets/d.png" alt="fondo-inicio">
        <form class="Registro__formulario">   
          <h2> Registro </h2>
          <ul>
            <li>
              <input placeholder="Correo electronico" type="email" id="email" name="user_email" required/>
              </li>
              <li>
                <input placeholder="Usuario" type="text" id="user" name="user_name" required/>
              </li>
              <li>
                <input placeholder="Contraseña (Min 8 Caracteres)" type="password" id="password" name="user_password" required/>
              </li>
              <li>
                <input placeholder="Teléfono" type="tel" name="telefono"  required/>
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
      name: 'registroForm',
      components: {
        headerSecundario
      }
    }
    </script>
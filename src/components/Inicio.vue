<template>
  <main class="home">
    <img class="home__imagen" src="../assets/d.png" alt="fondo-inicio">
      
    <h1 class="home__titulo">Sobre mi trabajo</h1>
      <p class="home__texto">Est. 2015 surge como alternativa ocupacional para tener la mente activa fuera de horarios laborales y problemas del dia dia a los que muchos estamos sometidos sin ni siquiera saberlo, surge la idea de poder darle una segunda oportunidad a todos esos cacharros arrumbados en el taller que me vio crecer y donde tantas historias he vivido….</p>
      <p class="home__texto1">Ideas que empiezan a aparecer en mi cabeza de la nada, a veces sin plantearlas, mirar un carburador e imaginarlo convertido en una lámpara, ver abridores de cerveza donde otros solo ven bujías o llaves de trabajo, pulseras en cualquier trozo de metal capaz de ser moldeado con un poco de calor…. Y asi empieza mi andadura, con un soplete y una llave fija, un poco de técnica e inspiración y estaba en mi muñeca, sin pensar que al ser vista por todos esos amigos, compañeros y conocidos del mundo del motor de dos o cuatro ruedas iba a tener una buena acogida y esas ganas de poder tener una de ellas en sus manos, y ese fue el comienzo de esta locura que dia a dia aumenta las ganas de usar nuevos materiales y quitar el polvo a todas esas piezas olvidadas de las estanterías de ese viejo taller….</p>
      <input placeholder="Buscar Articulo" type="text" class="home__buscador" name="articulo"/>
    <button type="submit" class="home__boton" id="boton">Buscar!</button>  
  </main>
</template>

<script>
export default {
  name: 'InicioVue'
}
</script>
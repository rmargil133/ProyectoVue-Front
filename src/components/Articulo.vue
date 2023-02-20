<template>
    <headerPrincipal/>
    <main class="ArticuloPrincipal">
        <div class="ArticuloPrincipal__Contenedor" >
            <img class="ArticuloPrincipal__Contenedor__imagen" :src="articulo.imagen" alt='articulo' />
            <ul class="ArticuloPrincipal__Contenedor__lista">
                <li class="ArticuloPrincipal__Contenedor__lista__elemento">Articulo: {{ articulo.nombre }}</li>
                <li class="ArticuloPrincipal__Contenedor__lista__elemento">Precio: {{ articulo.precio }}</li>
                <li class="ArticuloPrincipal__Contenedor__lista__elemento">Descripcion: {{ articulo.descripcion }}</li>
            </ul>
        </div> 
    </main>
</template>

<script>
    import headerPrincipal from "./Header.vue";
    export default{
        name: 'articuloPrincipal',
        components: {
            headerPrincipal,
        },
        data(){
            return{
                articulo: []
            };
        },
        async mounted(){
            const url = this.$route.params.nombre
            await fetch(`http://localhost:3001/api/v1/articulos/${url}`)
                .then((response) => response.json())
                .then((data) => (this.articulo = data));
        }
    }
</script>
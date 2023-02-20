<template>
    <headerLogueado/>
    <main class="ArticuloLogeuado">
        <div class="ArticuloLogueado__Contenedor" >
            <img class="ArticuloLogueado__Contenedor__imagen" :src="articulo.imagen" alt='articulo' />
            <ul class="ArticuloLogueado__Contenedor__lista">
                <li class="ArticuloLogueado__Contenedor__lista__elemento">Articulo: {{ articulo.nombre }}</li>
                <li class="ArticuloLogueado__Contenedor__lista__elemento">Precio: {{ articulo.precio }}</li>
                <li class="ArticuloLogueado__Contenedor__lista__elemento">Descripcion: {{ articulo.descripcion }}</li>
            </ul>
        </div>
    </main>
</template>

<script>
    import headerLogueado from "./HeaderLogueado.vue";
    export default{
        name: 'articuloLogueado',
        components: {
            headerLogueado,
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
<template>
    <headerLogueado/>
    <main class="ListadoLogueado">
                <div class='ListadoLogueado__contenedor'>
            <div class='ListadoLogueado__contenedor__articulo' v-for="articulo in articulos" :key="articulo.nombre" @click="$event => verArticulo(articulo.nombre)">
                <img class="ListadoLogueado__contenedor__articulo__foto" :src="articulo.imagen" alt='articulo' />
                <h5 class='ListadoLogueado__contenedor__articulo__nombre'>{{ articulo.nombre }}</h5>
            </div>
        </div>
    </main>
</template>

<script>
    import headerLogueado from "./HeaderLogueado.vue";
    export default{
        name: 'ListadoLogueado',
        components: {
            headerLogueado
        },
        data(){
            return{
                articulos: []
            };
        },
        async mounted(){
            await fetch("http://localhost:3001/api/v1/articulos")
                .then((response) => response.json())
                .then((data) => (this.articulos = data));
        },
        methods: {
            verArticulo(nombre){
                this.$router.push(`articuloPrincipal/${nombre}`)
            }
        }
    }
</script>
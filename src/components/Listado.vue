<template>
    <headerPrincipal/>
    <main class="PrincipalListado">
        <div class='PrincipalListado__contenedor'>
            <div class='PrincipalListado__contenedor__articulo' v-for="articulo in articulos" :key="articulo.nombre" @click="$event => verArticulo(articulo.nombre)">
                <img class="PrincipalListado__contenedor__articulo__foto" :src="articulo.imagen" alt='articulo' />
                <h5 class='PrincipalListado__contenedor__articulo__nombre'>{{ articulo.nombre }}</h5>
            </div>
        </div>
    </main>
</template>

<script>
    import headerPrincipal from "./Header.vue";
    export default{
        name: 'listadoPrincipal',
        components: {
            headerPrincipal
        },
        data(){
            return{
                articulos: []
            }

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
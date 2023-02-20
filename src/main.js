import { createApp } from 'vue'
import { createRouter , createWebHashHistory} from 'vue-router'
import App from './App.vue'
import index from './components/Index.vue'
import contactoPrincipal from './components/ContactoPrincipal.vue'
import loginForm from './components/Login.vue'
import registroForm from './components/Registro.vue'
import listadoPrincipal from './components/Listado.vue'
import indexLogueado from './components/IndexRegistrado.vue'
import listado from './components/ListadoLogueado.vue'
import articuloPrincipal from './components/Articulo.vue'
import articuloLogueado from './components/ArticuloLogueado.vue'


const routes = [
    { path:'/', component: index},
    { path:'/contactoPrincipal', component: contactoPrincipal},
    { path:'/login', component: loginForm},
    { path:'/registro', component: registroForm},
    { path:'/listadoPrincipal', component: listadoPrincipal},
    { path:'/indexLogueado', component: indexLogueado},
    { path:'/listado', component: listado},
    { path:'/articuloPrincipal/:nombre', component: articuloPrincipal},
    { path:'/articuloLogueado/:nombre', component: articuloLogueado}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes })

const app = createApp(App) 

app.use(router)

app.mount('#app')
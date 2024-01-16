import { createRouter, createWebHistory } from "vue-router";

import Home from './pages/Home.vue';
import About from './pages/About_Us.vue';
import contact from './pages/Contact.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/contact',
            name: 'contact',
            component: contact
        },
       
    ]
});

// Aggiungi un listener per l'evento load
window.addEventListener('load', () => {
    // Controlla l'URL corrente
    const currentPath = window.location.pathname;
  
    // Se l'URL è diverso dalla tua rotta principale, reimposta alle rotte originali
    if (currentPath !== '/') {
      router.push('/');
    }
});

export {router};
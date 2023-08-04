// routes.js
import Home from './pages/Home.svelte'
import Water from './pages/Water.svelte'
import Break from './pages/Break.svelte'

// A dictionary with the routes
const routes = {
    '/': Home, // Default route
    '/home': Home,
    '/water': Water,
    '/break': Break,
}

export default routes;

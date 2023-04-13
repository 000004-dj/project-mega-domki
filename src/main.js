import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/router";
import store from "././store";
import directives from "./directives/index.js"

const app = createApp(App)

const components = import.meta.globEager('./common/UI/*.vue')

Object.entries(components).forEach(([path, definition]) => {
    const componentName = path.split('/').pop().replace(/\.\w+$/, '')
    app.component(componentName, definition.default)
})

directives.forEach(directive => {
    app.directive(directive.name, directive)
})

app
    .use(store)
    .use(router)
    .mount('#app')

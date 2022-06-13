import './bootstrap';

import App from "./vue/app";
import { createApp } from "vue";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const app = createApp(App);

library.add( faPlusSquare, faTrash )

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app');



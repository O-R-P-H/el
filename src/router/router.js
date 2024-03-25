import {createMemoryHistory,createRouter} from "vue-router";
import MainPage from "@/pages/main.vue";
import AudiPlayerPage from "@/pages/player.vue";
const routes =
[
    {
        path:'/',
        component:MainPage
    },
    {
        path: '/Player',
        component: AudiPlayerPage
    }
]
export const router=createRouter({
    history:createMemoryHistory(),
    routes
})
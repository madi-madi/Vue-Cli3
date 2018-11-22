import HomePage from './components/HomePage.vue'
import AboutUs from './components/AboutUs.vue'
import PostPage from './components/PostPage.vue'
import PostsPage from './components/PostsPage.vue'
import NotFoundPage from './components/NotFoundPage.vue'
import UsersPage from './components/UsersPage.vue'
import UsersHomePage from './components/users/UsersHomePage.vue'
import UsersViewPage from './components/users/UsersViewPage.vue'


const routes = [
    { path: "/", component: HomePage , name:"home" },
    { path: "/about", component: AboutUs , beforeEnter:(to , from , next)=>{
        next();
    } },
    { path: "/posts", component: PostsPage, },
    { path: "/posts/:id", component: PostPage, props: true, name: "single-post"},
    { path: "/users", component: UsersPage, children:[
        {path:"",component:UsersHomePage},
        { path: ":id", component: UsersViewPage , props:true, name:"single-user" },

    ] },


    { path: "*", component: NotFoundPage },



];

export  default routes;
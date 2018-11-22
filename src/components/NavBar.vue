<template>
    <div>
        <ul class="nav nav-pills">
            <li class="nav-item">
            <!-- <a class="nav-link active" href="#">Active</a> -->
            <router-link :to="{name:'home'}" class="nav-link " active-class="active" exact > Home </router-link>
            </li>
            <li class="nav-item">
            <!-- <a class="nav-link" href="#">Link</a> -->
            <router-link to="/about" class="nav-link" active-class="active" > About Us </router-link>

            </li>
            <li class="nav-item">
            <!-- <a class="nav-link" href="#">Link</a> -->
            <router-link to="/posts" class="nav-link" active-class="active" > Posts </router-link>

            </li>
            <li class="nav-item">
            <!-- <a class="nav-link" href="#">Link</a> -->
            <router-link to="/users" class="nav-link" active-class="active" > Users </router-link>

            </li>
            <li class="nav-item">
            <!-- <a class="nav-link" href="#">Link</a> -->
                <button class="btn btn-primary" type="button" @click="backRoute()" >Back</button>
            </li> 
        </ul>
    </div>
</template>
<script>
export default {
    methods:{
       backRoute(){
           if (confirm('back?')) {
               
               history.back()
           }
       } 
    }
}
</script>

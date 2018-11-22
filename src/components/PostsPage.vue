<template>
    <div class="container">
            <ul class="nav flex-column">
                <li class="nav-item">
                <!-- <a class="nav-link active" href="#">Active</a> -->
                <router-link to="/posts/1?q=1" class="nav-link" active-class="active">Post first</router-link>
                </li>
                <li class="nav-item">
                <!-- <a class="nav-link" href="#">Link</a> -->
                <router-link :to="{name:'single-post',params:{id:2},query:{q:2}}"  class="nav-link" active-class="active">Post two</router-link>

                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                <a class="nav-link disabled" href="#">Disabled</a>
                </li>
            </ul>

    </div>
</template>
<script>
export default {
    data(){
        return{
            // id:this.$route.params.id,
        }
    }
}
</script>


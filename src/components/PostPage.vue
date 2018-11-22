<template>
    <div class="container">
        Post {{id}}
        Qyery Value  {{$route.query.q}}

    </div>
</template>
<script>
export default {
    data(){
        return{
            id:this.$route.params.id,
        }
    }
}
</script>


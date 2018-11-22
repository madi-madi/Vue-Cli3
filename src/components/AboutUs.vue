<template>
    <div class="content">
        About Us
        <button class="btn btn-primary" @click="goHome()"> Go to Home Page </button>
    </div>
</template>
<script>
export default {
    methods:{
        goHome(){
            console.log('goHome')
            setTimeout(() => {
                this.$router.push('/')
                
            }, 1000);
        }
    },
    beforeRouteEnter(to , from , next){
        next()
    },

}
</script>
<style>

</style>


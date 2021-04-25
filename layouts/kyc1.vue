<template>
    <div class="w-screen h-screen bg-green-300">
      <div class="w-full h-full flex-col">    
        <div class="w-full flex bg-red-400 py-10 px-6">
        <div>
            Hi {{emailId}}
        </div>  
        <div class="flex p-20 bg-blue-400">
            <Nuxt />
        </div>
        </div>
      </div>
    </div>

</template>

<script>
import { mapActions, mapState} from 'vuex'

export default {
    computed:{
        ...mapState({
        emailId: state => state.email.emailId,
      })
    },
    methods: {
      ...mapActions({
        getEmailId : "emailId/getEmailId"
      })
    },
    mounted(){
    //   this.getEmailId({emailId});
    }
}
</script>

<style>

</style>
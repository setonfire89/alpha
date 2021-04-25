<template>
  <div>
      Hi {{emailId}}
  </div>  
</template>

<script>
import { mapActions, mapState} from 'vuex'

export default {
    layout: "kyc",
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
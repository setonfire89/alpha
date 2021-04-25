<template>
  <div class="w-screen h-screen bg-yellow-400 px-30 flex">
    <div class="m-auto w-full md:w-1/2">
    <input-element
        labelName="Email"
        labelId="email"
        inputType="email"
        :model="email"
        @input="setEmailId($event)"
        class="my-2"
        />
      <input-element
        labelName="Password"
        labelId="password"
        inputType="password"
        :model="password"
        @input="password = $event"
        class="my-2"
        />
    </div>
  </div>  
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex';
import InputElement from '../components/InputElement.vue'
export default {
  layout: "login",  
  components: { InputElement },
  data: function(){
        return{
            email: "",
            password: ""
        }
    },
    computed:{
        ...mapState({
            emailId: state => state.email.email,
        })
    },
    methods: {
        ...mapMutations({
            setEmailId : 'email/setEmailId',
        })
    },  
}
</script>

<style>

</style>
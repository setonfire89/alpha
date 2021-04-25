<template>
  <div class="w-screen h-screen bg-green-300">
      <div class="w-full h-full flex-col">    
        <div class="w-full flex bg-red-400 py-10 px-6">
        <Nuxt />
        </div>
        <div class="flex p-20 bg-blue-400">
        <input-element
        labelName="FIRST NAME"
        labelId="firstName"
        inputType="text"
        :model="firstName"
        @input="firstName = $event"
        class="my-2"
        />
      <input-element
        labelName="LAST NAME"
        labelId="lastName"
        inputType="text"
        :model="lastName"
        @input="lastName = $event"
        class="my-2"
        />
        </div>
        <redirect path="/kyc2" pathName="Next">
        </redirect>
      </div>
  </div>     
</template>

<script>
import InputElement from '../components/InputElement.vue'
import Redirect from '../components/redirect.vue'
export default {
  components: { InputElement, Redirect },
  data: function(){
        return{
            firstName: "",
            lastName: ""
        }
    },
}

</script>

<style>

</style>
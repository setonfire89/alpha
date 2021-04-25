<template>
  <div class="">
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
        <div>
        <redirect path="/kyc2" pathName="Next"></redirect>
        </div>
        </div>

</template>

<script>
import InputElement from '../components/InputElement.vue'
import Redirect from '../components/redirect.vue'
export default {
    layout: "kyc1",
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
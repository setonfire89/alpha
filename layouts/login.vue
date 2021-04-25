<template>
  <div class="h-screen w-full flex flex-col items-center justify-center bg-blue-300 font-sans">
	  <Nuxt />
      <redirect path="/kycnew" pathName="LOGIN"></redirect>
  </div>  
</template>

<script>
import redirect from '../components/redirect.vue'
export default {
  components: { redirect },

}
</script>

<style>

</style>
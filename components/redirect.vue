<template>
  <div class="flex justify-center">
    <label>
        <!--  URL Redirection -->
        <NuxtLink :to="path" >{{pathName}}</NuxtLink>
    </label>
 </div>
</template>

<script>
export default {
    props:{
        path: String, // page URL path for destination
        pathName: String // page label name
    }
}
</script>

<style>

</style>
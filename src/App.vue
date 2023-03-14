<template>
  <div>
    <router-link to="/">Home</router-link>
    <router-link to="/:catchAll(.*)">NotFound</router-link>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>

</style>

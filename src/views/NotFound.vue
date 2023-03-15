<template>
    <div>
      <img alt="Notfound" src="../assets/errorimage.jpg">
    </div>
    <h3>Hello, The page you are looking for is either broken or missing.</h3>
    <h4>Kindly go back to the home page</h4>
    <p>Thank you</p>
  </template>

<script>

export default {
    name: 'NotFound'
}
</script>

<style scoped>
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
h3 {
  text-align: center;
}
h4 {
  text-align: center;
}
p {
  text-align: center;
}
</style>

<template>
    <header>
        <h1>{{ title }}</h1>   
    </header>
</template>

<script>

export default {
    name: 'NavBar',
    props: {
        title: String
    },
}
</script>

<style scoped>
header {  
    color: #fff;
    text-align: center;
    padding: 20px;
}
</style>

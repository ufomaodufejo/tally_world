<template>
    <footer>
        <h4>{{ footer }}</h4>
    </footer>
</template>
<script>

export default {
    name: 'FooterComp',
    props: {
        footer: String
    },
}

</script>

<style scoped>
footer {
    background-color: #313866;
    color: #fff;
    text-align: center;
    padding: 20px;
}
</style>
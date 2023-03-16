<template>
    <main>
        <div class="home">
            <div>
                <h1>Welcome to Tally World</h1>
                <h2>....the place of accuracy</h2>
                <div class="para">
                    <p>A tally counter is a mechanical, electronic, or software device used to incrementally count something, typically fleeting. One of the most common things tally counters are used for is counting people, animals, or things that are coming and going from some location.</p>
                </div>
               
            </div>
            <div class="imagediv">
                <img alt="Notfound" src="../assets/tally.jpg">
            </div>
        </div>
    </main>
</template>

<script>

export default {
    name: 'HomeComp',
}
</script>
<style scoped>
main{
    height: 73vh;
}
h1{
    font-size: 45px;
}
.home{
 display: flex;
 justify-content: space-evenly;
 align-items: center;
 margin-top: 30px;
}
.imagediv {
    height: 400px;
    width: 400px;
}
img{
    width: 100%;
    height: 100%;
    border-radius: 20px;
}
.para{
    width: 300px;
}
</style>
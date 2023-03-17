<template>
  <main>
   <div class="container">
    <div class="counterbody">
      <h1 class="count"> {{ count }}</h1>
    </div>
    <div>
        <input type="number" v-model="newValue" />
    </div>
    <div class="buttoncomp">
        <button class="btn increm" @click="increment">Increment</button>
        <button class="btn decrem" @click="decrement">Decrement</button>
        <button class="btn reset" @click="reset" >Reset</button>
        <button class="btn setValue" @click="setValue(newValue)">setValue</button>
    </div>
  </div>
</main>
</template>

<script>
import useCounter from '@/composables/counter'
import { ref, inject } from 'vue'

export default {
  name: 'CounterComponent',
  
  setup() {
    const { count, increment, decrement, reset, setValue } = useCounter()

    const newValue = ref(10)

    const store = inject('store')

    return {
      count,
      increment,
      decrement,
      reset,
      setValue,
      newValue,
      store
    }
  },
}
</script>


<style scoped>
main{
    height: 75vh;
}
 .container {
  max-width: 500px;
  margin: 30px auto;
  padding: 20px;
  border-radius: 10px;
  background-color: #313866;
}
.counterbody {
  border: 2px solid goldenrod;
  text-align: center;
  margin: 20px auto;
  width: 300px;
  height: 300px;
  background-color: #964EC2;
  border-radius: 50%;
}

.count {
  font-size: 150px;
  margin: 20px auto;
  text-align: center;
  width: 250px;
  height: 250px;
  background-color: #fff;
  border-radius: 50%;
}

.buttoncomp {
  display: flex;
  justify-content: space-between;
  
}

.btn {
  display: inline-block;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;

}

.increm {
  background-color: #15CDCA;
}

.decrem {
  background-color: #FF7BBF;
}

.reset {
  background-color: #964EC2;
}

.setValue {
  background-color: #964EC2;
}

input {
    width: 100%;
    margin: 20px 0;
    padding: 12px 20px;
    border-radius: 5px;
    background-color: #e1f7f6;
    font-size: 20px;
    font-weight: 600;
}


@media screen and (max-width: 550px){
  .buttoncomp{
    display: flex;
    flex-wrap: wrap;
  }
  .btn{
    width: 50%;
    flex: 25%;
  }
}
</style>
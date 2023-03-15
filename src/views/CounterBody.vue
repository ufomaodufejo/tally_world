<template>
   <div class="container">
    <div class="counterbody">
      <h1 class="count"> {{ $store.state.count }}</h1>
    </div>
    <div>
        <input type="number" v-model="newValue" />
    </div>
    <div class="buttoncomp">
        <button class="btn increm" @click="$store.commit('increaseCounter')">Increment</button>
        <button class="btn decrem" @click="$store.commit('decreaseCounter')">Decrement</button>
        <button class="btn reset" @click="$store.commit('resetCounter')" >Reset</button>
        <button class="btn setValue" @click="$store.commit('setValue')">setValue</button>
      </div>
  </div>
</template>

<script>
import { ref } from 'vue';
const newValue = ref(10)  
export default{
    name: 'CounterBody',
    data() {
        return {
            newValue
        }
    }
}
</script>

<style scoped>
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
}

</style>
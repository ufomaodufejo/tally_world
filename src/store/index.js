import { createStore } from "vuex";

export default createStore({
    state: {
        count: 0, 
    },
    mutations: {
        increaseCounter(state){
            state.count++
        },
        decreaseCounter(state){
            state.count--
        },
        resetCounter(state){
            state.count = 0
        },
        setValue(state, payload){
            state.count = payload
        }
    },
    actions: {

    },
    modules: {

    }
})
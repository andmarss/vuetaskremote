import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        showDanger: false,
    },
    mutations: {
        setDanger(state, {type, showDanger}){
            state[type] = showDanger;
        }
    },
    actions: {
        changeDanger({commit}, showDanger){
            commit('setDanger', {type: 'showDanger', showDanger});
        }
    },

    getters: {
        showDanger(store){
            return store.showDanger;
        }
    }
});
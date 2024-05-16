/**
 * vue2 中vuex配置
 * import Vue from 'vue'
 * import Vuex from 'vuex'
 * Vue.use(Vuex);
 * const store = new Vuex.Store({
 *  state:{
 *      key:value
 * },
 * getters{},
 * mutations:{
 *  f(state,paylod){
 *    state.key = paylod
 * }
 * },
 * actions:{
 *  f2(){
 *  setTimeout(()=>{
 * syore.commit('f',value2)
 * },5000)
 * }
 * }
 * })
 *
 */
import { createPinia } from "pinia";
import PersistPlugin from "pinia-plugin-persistedstate";

const store = createPinia();
store.use(PersistPlugin);

export default store;
//如何定义状态

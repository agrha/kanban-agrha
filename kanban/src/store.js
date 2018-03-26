import Vue from 'vue'
import Vuex from 'vuex'
import {tasksRef} from './firebase'

Vue.use(Vuex)

const state = {
  tasks: []
}

const getters = {
  tasks (state) {
    return state.tasks
  }
}

const actions = {
  addTask ({commit}, obj) {
    tasksRef.push(obj)
    commit('addTask', obj)
  },
  update ({commit}, payload) {
    console.log(payload)
    commit('update', payload)
  },
  delete ({commit}, payload) {
    commit('delete', payload)
  }
}

const mutations = {
  addTask (state, payload) {
    state.tasks.push(payload)
  },
  update (state, payload) {
    let index = state.tasks.findIndex(task => task.key === payload)
    state.tasks[index] = payload
  },
  delete (state, payload) {
    let index = state.tasks.findIndex(task => task.key === payload)
    state.tasks.splice(index, 1)
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})

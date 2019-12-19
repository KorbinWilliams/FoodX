import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let _sandbox = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/KorbinWilliams",
  timeout: 6000
})

let _api = axios.create({
  baseURL: "https://trackapi.nutritionix.com/v2/natural/nutrients",
  timeout: 3000,
  headers: {
    "x-app-key": "fca2502bf320258e862a78cbf85525d3",
    "x-app-id": "37d7f7fc"
  }
});

export default new Vuex.Store({
  state: {
    logs: [],
    activeLog: {},
    food: {}
  },
  mutations: {
    addFood(state, data) {
      state.food = data
    },
    setLogs(state, data) {
      state.logs = data
    },
    addLog(state, log) {
      state.logs.push(log)
    },
    setActiveLog(state, log) {
      state.activeLog = log
    }

  },
  actions: {
    async getLogs({ commit, dispatch }) {
      let res = await _sandbox.get("logs")
      commit("setLogs", res.data.data)
    },
    async createLog({ commit, dispatch }, log) {
      let res = await _sandbox.post("logs", log)
      commit("addLog", res.data.data)
    },
    async getLogById({ commit, dispatch }, id) {
      let res = await _sandbox.get("logs/" + id)
      commit("setActiveLog", res.data.data)
    },
    async createFood({ commit, dispatch }, query) {
      let res = await _api.post("", + query)
      commit("addFood", res.data)
    },

  },
  modules: {
  }
})

// // PUT
//  editLog '/api/:user/logs/:logId'
//  DELETE
//   removeFood '/api/:user/logs/:logId/foods/:foodId
//   removeLog '/api/:user/logs/:logId'


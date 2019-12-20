<template>
  <div class="food">
    <h1>What did you eat today?</h1>
    <form @submit.prevent="createFood">
      <input type="text" name="food" v-model="query" placeholder="What you ate" required />
      <button class="btn btn-success" type="submit"></button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Food",
  mounted() {},
  computed: {
    food() {
      return this.$store.state.food;
    }
  },
  data() {
    return {
      query: ""
    };
  },
  methods: {
    createFood() {
      let query = { query: this.query };
      dispatch("createFood", query);
    }
    //   createFood() {
    //     let food = {
    //     $store.dispatch("createFood", food);
    //   }
    // }
  }
};
</script>

<style>
</style>

 this.newLog = {
        date: ""
      };
<template>
  <div class="home container-fluid">
    <h1>Food Log</h1>
    <h3>What did you eat today?</h3>
    <form @submit.prevent="createLog">
      <input type="date" v-model="newLog.date" class="form-control" placeholder="date" name="date" />
    </form>
    <button type="submit">Make log</button>
  </div>
</template>

<script>
export default {
  name: "home",
  mounted() {
    this.$store.dispatch("getLogs")
  }
  components: {},
  computed: {
    Logs() {
      return this.$store.state.logs;
    }
  }
};
</script>

    <img alt="Vue logo" src="../assets/logo.png" />
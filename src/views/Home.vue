<template>
  <div class="home container-fluid">
    <h1>Food Log</h1>
    <form @submit.prevent="createLog">
      <div class="form-group">
        <input
          type="date"
          v-model="newLog.date"
          class="form-control"
          placeholder="date"
          name="date"
        />
        <button type="submit">Make log</button>
      </div>
    </form>
    <ul>
      <li v-for="log in logs" :key="log._id">
        <router-link :to="{ name: 'log', params: { id: log._id } }">
          {{
          log.date
          }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "home",
  mounted() {
    this.$store.dispatch("getLogs");
  },
  data() {
    return {
      newLog: {
        date: ""
      }
    };
  },
  methods: {
    createLog() {
      debugger;
      let log = { ...this.newLog };
      this.$store.dispatch("createLog", log);
      this.newLog = {
        date: ""
      };
    }
  },
  components: {},
  computed: {
    logs() {
      return this.$store.state.logs;
    }
  }
};
</script>

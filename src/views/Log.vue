<template>
  <div class="log container-fluid">
    <food-component />
  </div>
</template>

<script>
import FoodComponent from "../components/Food.vue";

export default {
  name: "log",
  mounted() {
    this.$store.dispatch("getLogById", this.$route.params.id);
  },
  computed: {
    log() {
      return this.$store.state.activeLog;
    }
  },
  components: {
    FoodComponent
  }
};
</script>

<style>
</style>
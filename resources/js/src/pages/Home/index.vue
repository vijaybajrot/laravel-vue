<script>
import { addModule } from "@app/store";
import homeModule from "./module";

addModule("home", homeModule);

export default {
  mounted() {
    console.log(this.$store);
    console.log("mounted");
  },
  created() {
    console.log("created");
  }
};
</script>

<template>
  <div>
    <h2>Home Page</h2>
    <pre>{{ JSON.stringify($store.state, null, 2) }}</pre>
  </div>
</template>
<template>
  <div>
    <h2>Home Page</h2>
    <pre>{{JSON.stringify($store.state)}}</pre>
  </div>
</template>

<script>
import { addModule } from "@app/store";

const homeModule = {
  state: {
    heading: "Home Page"
  }
};
addModule("home", homeModule);

export default {
  mounted() {
    console.log(this.$store);
  }
};
</script>
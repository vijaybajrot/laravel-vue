<template>
  <div>
    <app-header></app-header>
    <b-container>
      <b-row>
        <b-col>
          <div>
            <router-view></router-view>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Header from "@app/components/Header.vue";

export default {
  data() {
    return {
      msg: "Laravel Vuejs App"
    };
  },
  components: {
    "app-header": Header
  }
};
</script>
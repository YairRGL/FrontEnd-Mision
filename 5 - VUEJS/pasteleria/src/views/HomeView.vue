<template>
  <div class="content">
    <Navbar />
    <Principal />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/NavBar.vue";
import Principal from "@/components/Principal.vue";

export default {
  name: "HomeView",
  components: {
    Navbar,
    Principal,
  },
};
</script>

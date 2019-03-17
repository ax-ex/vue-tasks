<template>
  <div class="home">
    <img class="logo" alt="Vue logo" src="../assets/logo.png" @click="redirect" />
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    redirect() {
      this.$router.push('/users')
    }
  }
}
</script>

<style scoped>
.home {
  text-align: center;
}
.logo {
  cursor: pointer;
}
</style>

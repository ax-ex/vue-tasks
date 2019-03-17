<template>
  <div>
    <div v-if="!userData" class="alert alert-info" role="alert">
      Загрузка данных...
    </div>
    <user-form v-else :user-data="userData" @save="saveUser"></user-form>
  </div>
</template>

<script>
export default {
  name: 'UserEdit',
  components: {
    UserForm: () => import('@/components/UserForm.vue')
  },
  data: function() {
    return {
      userData: null
    }
  },
  computed: {
    userId() {
      return this.$route.params.id
    }
  },
  mounted() {
    this.loadUser()
  },
  methods: {
    loadUser() {
      this.axios
        .get('http://localhost:3000/users/' + this.userId)
        .then(response => response.data)
        .then(userData => {
          this.userData = userData
        })
    },
    saveUser() {
      this.axios.patch('http://localhost:3000/users/' + this.userId, this.userData).finally(() => {
        this.$router.push('/users')
      })
    }
  }
}
</script>

<style></style>

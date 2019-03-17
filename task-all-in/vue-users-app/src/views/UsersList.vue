<template>
  <div>
    <div v-if="!users.length" class="alert alert-info" role="alert">
      Загрузка списка пользователей...
    </div>
    <users-table v-else :users="users"></users-table>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    UsersTable: () => import('@/components/UsersTable.vue')
  },
  data: () => {
    return {
      users: []
    }
  },
  computed: {
    oddList: function() {
      return this.list.filter(function(item) {
        return item.id % 2 !== 0
      })
    }
  },
  watch: {
    list: 'listLoadAlert'
  },
  mounted() {
    this.loadUserData()
  },
  methods: {
    listLoadAlert() {
      console.log('list loaded')
    },
    loadUserData() {
      this.axios.get('http://localhost:3000/users').then(response => {
        this.users = response.data
      })
    }
  }
}
</script>

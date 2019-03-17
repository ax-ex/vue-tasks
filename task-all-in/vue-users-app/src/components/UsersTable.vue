<template>
  <div>
    <div class="row py-3">
      <div class="col">
        <h2 class="text-center">Список пользователей</h2>
      </div>
    </div>
    <div class="row justify-content-between align-items-center py-2">
      <div class="col col-6 text-left">Всего пользователей: {{ numberOfUsers }}</div>
      <div class="col col-6 text-right">
        <button
          v-tooltip.top-start="showListTooltip"
          type="button"
          class="btn btn-outline-success btn-sm"
          @click="toggleShowList"
        >
          {{ showListBtnText }}
        </button>
      </div>
    </div>
    <div class="row">
      <table class="table table-striped">
        <thead class="table-success">
          <tr>
            <th scope="col">#</th>
            <th scope="col"></th>
            <th scope="col">Имя</th>
            <th scope="col">Фамилия</th>
            <th scope="col text-center">Возраст</th>
            <th scope="col">Телефон</th>
            <th scope="col">Дата регистрации</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody v-show="showList">
          <tr v-for="user in users" :key="user.id">
            <th class="tb-first-col align-middle" scope="row">{{ user.id }}</th>
            <td class="align-middle">
              <img alt="" class="rounded-circle w-25" :src="user.icon_url || defaultImgUrl" />
            </td>
            <td class="align-middle">{{ user.name | toUpperCase }}</td>
            <td class="align-middle">
              <copy-button :text="user.surname" />
            </td>
            <td class="align-middle text-center">{{ user.age }}</td>
            <td class="align-middle text-center">{{ user.phone }}</td>
            <td class="align-middle text-center">{{ user.registered }}</td>
            <td class="align-middle">
              <router-link :to="'/edit/' + user.id">
                <button type="button" class="btn btn-info btn-sm">
                  Редактировать
                </button>
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UsersList',
  components: {
    CopyButton: () => import('@/components/CopyButton')
  },
  filters: {
    toUpperCase: function(value) {
      if (!value) return
      value = value.toString()
      return value.toUpperCase()
    }
  },
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  data: () => {
    return {
      showBtnText: 'Скрыть список',
      showList: true,
      showListTooltip: 'Показать/скрыть список',
      defaultImgUrl: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'
    }
  },
  computed: {
    numberOfUsers() {
      return this.users.length
    },
    showListBtnText() {
      return this.showList ? 'Скрыть список' : 'Показать список'
    }
  },
  methods: {
    toggleShowList() {
      this.showList = !this.showList
    }
  }
}
</script>

<style scope>
th:nth-child(n + 5):nth-child(-n + 7) {
  text-align: center;
}
tbody .tb-first-col {
  max-width: 100px !important;
}
</style>

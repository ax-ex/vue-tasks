<template>
  <div>
    <div class="row py-3">
      <div class="col">
        <h2 class="text-center">Редактирование пользователя</h2>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="jumbotron w-75">
        <form>
          <div class="form-group">
            <label>Имя</label>
            <input v-model="userData.name" type="text" class="form-control" />
          </div>
          <div class="form-group">
            <label>Фамилия</label>
            <input v-model="userData.surname" type="text" class="form-control" />
          </div>
          <div class="form-group">
            <label>Возраст</label>
            <input v-model="userData.age" type="text" class="form-control" />
          </div>
          <div class="form-group">
            <label>Телефон</label>
            <input v-model="userData.phone" type="text" class="form-control" />
          </div>
          <div class="form-group">
            <label>Дата регистрации</label>
            <input v-model="userData.registered" type="text" class="form-control" />
          </div>
          <button type="button" class="btn btn-primary" @click="saveUser(userData.id)">
            Сохранить
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserForm',
  props: {
    userData: {
      type: Object,
      required: true
    }
  },
  methods: {
    saveUser(id) {
      this.$emit('save', id)
    }
  }
}
</script>

<style></style>

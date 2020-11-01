<template>
  <div>
    <h1>User List</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        <b-link :to="{name:'UserDetail', params:{id:user.id, name: user.name}}">{{ user.name }}</b-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'UserList',
  data() {
    return {
      users: [
        {
          id: '1',
          name: 'Tom'
        },
        {
          id: '2',
          name: 'Jim'
        }
      ]
    }
  }
}
</script>

<style>

</style>

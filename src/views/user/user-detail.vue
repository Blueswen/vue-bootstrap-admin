<template>
  <div>
    <h1>Detail</h1>
    <p>User ID: {{ id }}</p>
    <p>User Name: {{ name }}</p>
  </div>
</template>

<script>
export default {
  name: 'UserDetail',
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>

</style>

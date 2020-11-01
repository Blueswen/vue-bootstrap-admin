<template>
  <div>
    <h1>
      Task Detail
    </h1>
    <p>Task ID: {{ id }}</p>
    <p>Task Title: {{ title }}</p>
  </div>
</template>

<script>
export default {
  name: 'TaskDetail',
  props: {
    id: { type: String, required: true },
    title: { type: String, default: '' }
  }
}
</script>

<style>

</style>

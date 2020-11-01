<template>
  <div>
    <h1>
      Task List
    </h1>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <b-link :to="{name:'TaskDetail', params:{id:task.id, title: task.title}}">{{ task.title }}</b-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TaskList',
  data() {
    return {
      tasks: [
        {
          id: '1',
          title: 'Buy Milk'
        },
        {
          id: '2',
          title: 'Buy Apple'
        }
      ]
    }
  }
}
</script>

<style>

</style>

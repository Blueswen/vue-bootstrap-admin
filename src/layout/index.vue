<template>
  <div>
    <NavBar />
    <b-container class="p-3">
      <b-row>
        <b-col>
          <router-view />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import NavBar from './components/NavBar'

export default {
  name: 'Layout',
  components: {
    NavBar
  }
}
</script>

<style>

</style>

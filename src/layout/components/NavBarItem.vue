<template>
  <div v-if="!item.hidden">
    <template v-if="hasOneShowingChild(item.children, item)">
      <b-nav-item :to="onlyOneChild.path" :class="activeDropdown?'router-link-active':''">{{ onlyOneChild.meta.title }}</b-nav-item>
    </template>
    <b-nav-item-dropdown v-else :class="activeDropdown?'router-link-active':''">
      <template v-slot:button-content>
        {{ item.meta.title }}
      </template>
      <template v-for="subItem in item.children">
        <b-dropdown-item v-if="!subItem.hidden" :key="subItem.path" :to="subItem.path">{{ subItem.meta.title }}</b-dropdown-item>
      </template>
    </b-nav-item-dropdown>
  </div>
</template>

<script>

export default {
  name: 'NavBarItem',
  components: {
    // NavBarDropdownItem
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      onlyOneChild: null
    }
  },
  computed: {
    activeDropdown() {
      const children = this.item.children || []
      return children.some(child => child.name === this.$route.name)
    }
  },
  methods: {
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false
        } else {
          // Temp set(will be used if only has one showing child)
          this.onlyOneChild = item
          return true
        }
      })

      // When there is only one child router, the child router is displayed by default
      if (showingChildren.length === 1) {
        return true
      }

      // Show parent if there are no child router to display
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ... parent, path: '', noShowingChildren: true }
        return true
      }

      return false
    }
  }
}
</script>

<style scoped>

.router-link-active{
  font-weight: bold;
  color: #dc3545 !important;
}

.router-link-active >>> .nav-link, .router-link-active >>> .router-link-active{
  font-weight: bold;
  color: #dc3545 !important;
}

</style>

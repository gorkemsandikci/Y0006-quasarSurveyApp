<template>
  <router-view />
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'BenceAnket',
  created() {
    this.$q.dark.set(true)
  }
})
</script>

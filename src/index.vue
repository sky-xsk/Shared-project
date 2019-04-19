<template>
  <div @androidback="back">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
    }
  },
  methods: {
    back() {
      this.$router.back();
    }
  }
}
</script>

<style scoped>
  .wrapper {}
</style>

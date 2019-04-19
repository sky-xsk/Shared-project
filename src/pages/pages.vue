<template>
    <div class='pages'>
      <div>
          <HeadersTop></HeadersTop>
      </div>
      <router-view />
    </div>
</template>

<script>
import HeadersTop from '../components/headers'
export default {
  name: 'pages',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

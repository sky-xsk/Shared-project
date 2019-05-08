<template>
  <div @androidback="back">
    <div class='headerTop'>
        <HeaderTop></HeaderTop>
    </div>
    <div class='contents'>
       <router-view/>
    </div>
    <div class='footerBottom'>
      <FooterBottom></FooterBottom>
    </div>

  </div>
</template>

<script>
import FooterBottom from './components/FooterBottom';
import HeaderTop from './components/HeaderTop';
export default {
  name: 'App',
  components: {FooterBottom, HeaderTop },
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
  .headerTop{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #FFFFFF;
  }
  .contents{
    position: absolute;
    top: 90px;
    bottom: 120px;
    width: 100%;
    background-color: #fbf8f8;
  }
  .footerBottom{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height:120px;
  }
</style>

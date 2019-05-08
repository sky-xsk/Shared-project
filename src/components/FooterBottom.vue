<template>
  <div class='footerBottom'>
    <wxc-tab-bar :tab-titles="tabTitles"
                  :tab-styles="tabStyles"
                  title-type="icon"
                  @wxcTabBarCurrentTabSelected="wxcTabBarCurrentTabSelected">
    </wxc-tab-bar>
  </div>
</template>

<script>
  import { WxcTabBar } from 'weex-ui';
  import Config from '../config'
  export default {
    components: { WxcTabBar },
    data: () => ({
      tabTitles: Config.tabTitles,
      tabStyles: Config.tabStyles
    }),
    created () {
    },
    methods: {
      wxcTabBarCurrentTabSelected (e) {
        const index = e.page;
        if(index === 0) {
          this.$router.push('home');
        } else if(index === 1) {
          this.$router.push('order');
        } else if(index === 2) {
          this.$router.push('mine');
        }
      }
    }
  };
</script>
<style scoped>
  .item-container {
    width: 750px;
    background-color: #f2f3f4;
    align-items: center;
    justify-content: center;
  }
  .footerBottom{
    height: 120px;
  }
</style>
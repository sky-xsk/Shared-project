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
      const tabPageHeight = '120px';
    },
    methods: {
      wxcTabBarCurrentTabSelected (e) {
        const index = e.page;
        // console.log(index);
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
</style>
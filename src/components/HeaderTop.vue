<template>
  <div class="container" :style="{ height: '44px' }">
    <div class="demo">
      <wxc-minibar 
          title="标题"
          background-color="#f7c242"
          text-color="#ffffff"
          right-text="更多"
          @wxcMinibarLeftButtonClicked="minibarLeftButtonClick"
          @wxcMinibarRightButtonClicked="minibarRightButtonClick">
      </wxc-minibar>
    </div>
  </div>
</template>
<script>
  import { WxcMinibar } from 'weex-ui';
  const modal = weex.requireModule('modal');
  export default {
    components: {
      WxcMinibar
    },
    methods: {
      minibarLeftButtonClick () {
      },
      minibarRightButtonClick () {
        modal.toast({ 'message': '点击了更多按钮', 'duration': 1 });
      }
    },
  }
</script>
<style>
*{
  padding: 0;
  margin: 0;
}
</style>


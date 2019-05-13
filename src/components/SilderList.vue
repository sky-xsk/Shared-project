<template>
  <div class="Silderontainer">
      <wxc-ep-slider 
        :slider-id="sliderId"
        :card-length='cardLength'
        :card-s="cardSize"
        :select-index="2"
        @wxcEpSliderCurrentIndexSelected="wxcEpSliderCurrentIndexSelected">
        <div v-for="(v,index) in [1,2,3,4,5]"
           :key="index"
           :slot="`card${index}_${sliderId}`"
           :class="['slider',`slider${index}`]">
        <text>这里是第{{index + 1}}个推荐或红包广告</text>
      </div>
      </wxc-ep-slider>
  </div>
</template>
<script>
  import { WxcEpSlider } from 'weex-ui';
  export default {
    components: {
      WxcEpSlider
    },
    data: () => ({
      sliderId: 1,
      cardLength: 5,
      cardSize: {
        width: 750,
        height: 200,
        spacing: 0,
        scale: 0.8
      }
    }),
    methods: {
      wxcEpSliderCurrentIndexSelected (e) {
        const index = e.currentIndex;
        console.log(index);
      }
    },
  }
</script>
<style scoped>
  .slider {
    width: 750px;
    height: 200px;
    background-color: #C3413D;
    align-items: center;
    justify-content: center;
  }

  .slider1 {
    background-color: #546E7A;
  }

  .slider2 {
    background-color: #546E7A;
  }

  .slider3 {
    background-color: #546E7A;
  }

  .slider4 {
    background-color: #546E7A;
  }
</style>


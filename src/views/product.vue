<template>
  <div class="layout">
    <Layout>
      <Navbar />
      <Slider />
      <div class="about">
        <div class="about-content">
          <h2>关于我们</h2>
          <p>广州佳邻网络科技有限公司成立于2017年12月，围绕科技引领新生活的理念，以邻里共享APP为核心产品，以线上+线下的社区模式为依托，整合社会力量、组织公共资源，为广大居民提供一个集“智能门禁、社区物业、居家购物、社区聊天“等于一体的便民的社区生活服务平台，努力为居民提供一个安全、舒适、便利的现代化、智慧化生活环境，构建共建共治共享的社区治理格局，创建文明广州。</p>
          <swiper :options="swiperOption">
            <swiper-slide>
              <img class="swiper-img" src="../assets/sl1.jpg" alt />
              <p>智能门禁</p>
            </swiper-slide>
            <swiper-slide>
              <img class="swiper-img" src="../assets/sl2.jpg" alt />
              <p>监控系统</p>
            </swiper-slide>
            <swiper-slide>
              <img class="swiper-img" src="../assets/sl3.jpg" alt />
              <p>物业服务</p>
            </swiper-slide>
            <swiper-slide>
              <img class="swiper-img" src="../assets/sl4.jpg" alt />
              <p>APP社区平台</p>
            </swiper-slide>
            <swiper-slide>
              <img class="swiper-img" src="../assets/sl5.jpg" alt />
              <p>手机购物</p>
            </swiper-slide>
            <swiper-slide>
              <img class="swiper-img" src="../assets/sl6.jpg" alt />
              <p>社区聊天</p>
            </swiper-slide>
          </swiper>
          <div class="swiper-button-prev swiper-button-black"></div><!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
          <div class="swiper-button-next swiper-button-black"></div><!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
        </div>
      </div>
      <Footer />
    </Layout>
  </div>
</template>
<style scoped>
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 89px;
}
.about-content {
  display: flex;
  flex-direction: column;
}
.about-content h2 {
  font-size: 36px;
  font-family: PingFang SC;
  font-weight: 800;
  color: rgba(0, 0, 0, 1);
  line-height: 24px;
  border-left: 10px solid #f4523d;
  text-indent: 19px;
  margin-bottom: 21px;
}
.about-content p {
  width: 998px;
  /* height:63px; */
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(102, 102, 102, 1);
  line-height: 24px;
}
/* .swiper-slide,.swiper-slide-active{
  display: flex;
  flex-direction: row
} */
.swiper-slide{
  width:999px;/*设为固定值*/
}
.swiper-slide p{
  font-size:16px;
  font-family:PingFang SC;
  font-weight:500;
  color:rgba(102,102,102,1);
  line-height:24px;
  margin-top: 9px;
  transform: translate( 6%, 0);
}
.swiper-container{
  width: 999px;
  margin: 58px 0 70px 0;
}
.swiper-button-prev{
  position: relative;
  bottom: 218px;
  left: -42px;
}
.swiper-button-next{
  position: relative;
  bottom: 245px;
  left: 1008px;
}
</style>
<script>
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Slider from '../components/slider'
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  data () {
    return {
      swiperOption: {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 4,
        autoplay: true,
        width: 999,
        spaceBetween: 39,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  components: {
    Navbar,
    Footer,
    Slider,
    swiper,
    swiperSlide
  }
}
</script>

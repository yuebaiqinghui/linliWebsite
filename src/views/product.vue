<template>
  <div class="layout">
    <Layout>
      <Navbar class="nav"/>
      <Slider />
      <div class="about">
        <div class="about-content animated fadeIn">
          <h2>产品中心</h2>
          <p>邻里共享APP是以“互联网+社区”为理念，智能门禁 + 监控系统 + 物业服务 + 互动共享 + APP社区平台；通过信息化技术整合社会力量、组织公共资源，为广大社区居⺠提供在线开门、社区物业、居家购物、社区聊天等便⺠的社区生活服务平台，致力于打造高效、舒适、安全的社区生活体验。</p>
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
.ivu-layout{
    background: #fff;
}
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
  transform: translate( 7%, 0);
}
.swiper-container{
  width: 999px;
  margin: 58px 0 70px 0;
}
.swiper-button-prev{
  position: relative;
  bottom: 218px;
  left: -42px;
  background-size: 20px 20px;
}
.swiper-button-next{
  position: relative;
  bottom: 245px;
  left: 1008px;
  background-size: 20px 20px;
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

<template>
<div class="layout">
    <Layout>
        <Navbar class="nav"/>
        <Slider />
        <div class="about">
          <div class="about-content animated fadeIn">
            <h2>关于我们</h2>
            <p>广州佳邻网络科技有限公司成立于2017年12月，围绕科技引领新生活的理念，以邻里共享APP为核心产品，以线上+线下的社区模式为依托，整合社会力量、组织公共资源，为广大居民提供一个集“智能门禁、社区物业、居家购物、社区聊天“等于一体的便民的社区生活服务平台，努力为居民提供一个安全、舒适、便利的现代化、智慧化生活环境，构建共建共治共享的社区治理格局，创建文明广州。</p>
            <div class="imgshow">
              <img src="../assets/picture_1.png" alt="" @mouseover="changeActive($event)" @mouseout="removeActive($event)">
              <img src="../assets/picture_2.png" alt="" @mouseover="changeActive($event)" @mouseout="removeActive($event)">
            </div>
            <div class="imgshow1">
              <img src="../assets/picture_3.png" alt="" @mouseover="changeActive($event)" @mouseout="removeActive($event)">
              <img src="../assets/picture_4.png" alt="" @mouseover="changeActive($event)" @mouseout="removeActive($event)">
            </div>
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
.about{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 89px;
}
.about-content{
  display: flex;
  flex-direction: column;
}
.about-content h2{
  font-size:36px;
  font-family:PingFang SC;
  font-weight:800;
  color:rgba(0,0,0,1);
  line-height:24px;
  border-left: 10px solid #F4523D;
  text-indent: 19px;
  margin-bottom: 21px
}
.about-content p{
  width:998px;
  /* height:63px; */
  font-size:14px;
  font-family:PingFang SC;
  font-weight:500;
  color:rgba(102,102,102,1);
  line-height:24px;
}
.imgshow{
  margin-top: 50px;
}
.imgshow1{
  margin-bottom: 62px;
}
.imgshow img:nth-child(1),
.imgshow1 img:nth-child(1){
  margin-right: 10px
}
</style>
<script>
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Slider from '../components/slider'
export default {
  methods: {
    changeActive ($event) {
      $event.currentTarget.className = 'animated pulse'
    },
    removeActive ($event) {
      $event.currentTarget.className = ''
    }
  },
  components: {
    Navbar,
    Footer,
    Slider
  }
}
</script>

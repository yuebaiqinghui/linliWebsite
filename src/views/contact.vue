<template>
  <div class="layout">
    <Layout>
      <Navbar />
      <Slider />
      <div class="about">
        <div class="about-content animated fadeIn">
          <h2>联系我们</h2>
          <div class="contact-card">
            <div class="information">
              <div class="info">
                <div class="info-tab">地址:</div>
                <div class="info-content">广东省广州市越秀区人民街大新路102号</div>
              </div>
              <div class="info">
                <div class="info-tab">电话:</div>
                <div class="info-content">17329908995</div>
              </div>
              <!-- <div class="info">
                <div class="info-tab">传真:</div>
                <div class="info-content">010xxxx8888</div>
              </div> -->
              <div class="info">
                <div class="info-tab">邮箱:</div>
                <div class="info-content">caizhiqiang@jialinkeji.com</div>
              </div>
            </div>
            <div class="form">
              <Form :model="form">
                <FormItem>
                  <Input v-model="form.title" class="input" placeholder="标题" />
                </FormItem>
                <FormItem>
                  <Input
                    v-model="form.content"
                    type="textarea"
                    :rows="4"
                    class="input"
                    placeholder="内容"
                  />
                </FormItem>
                <FormItem>
                  <Input v-model="form.mail" class="input" placeholder="电子邮件" />
                </FormItem>
                <FormItem>
                  <Input v-model="form.captcha" class="input" placeholder="验证码" />
                  <img src="../assets/GenerateLeavewordCaptcha.jpg" alt class="captcha" />
                </FormItem>
              </Form>
              <Button type="error" class="submit">提交</Button>
            </div>
          </div>
          <div id="container"></div>
        </div>
      </div>
      <Footer />
    </Layout>
  </div>
</template>
<style scoped>
#container {
  width:1002px;
  height: 495px;
  margin-top: -90px;
  margin-bottom: 70px;
}
.ivu-layout {
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
.contact-card {
  display: flex;
  margin-top: 12px;
  margin-bottom: 79px;
}
.contact-card .information {
  width: 385px;
  height: 422px;
}
.contact-card .information .info {
  background: transparent;
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: bold;
  color: #020000;
  display: flex;
  margin-left: 36px;
}
.contact-card .information .info:nth-child(1) {
  margin-top: 103px;
}
.contact-card .information .info {
  margin-top: 30px;
}

.contact-card .information div {
  background: transparent;
}
.info-tab {
  color: #f4523d;
}
.info-content {
  text-indent: 10px;
}
/* .contact-card .information div div{
    display: inline
} */
.contact-card .form {
  width: 621px;
  height: 422px;
}

.ivu-form-item {
  background: transparent;
  margin-left: 44px;
  margin-bottom: 10px;
}
.ivu-form-item:nth-child(1) {
  margin-top: 56px;
}
.captcha {
  position: absolute;
  top: 6px;
  right: 50px;
}
.submit {
  margin-left: 488px;
  width: 90px;
  height: 34px;
  font-size: 14px;
  padding: 0;
}
</style>
<style>
.ivu-input {
  width: 534px;
  height: 34px;
}
textarea.ivu-input {
  height: 136px;
  width: 534px;
}
</style>
<script>
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Slider from '../components/slider'
import AMap from '@/utils/AMap'
export default {
  data () {
    return {
      form: {
        title: '',
        content: '',
        mail: '',
        captcha: ''
      },
      map: null,
      // 宝箱位置
      lng: 113.261441,
      lat: 23.11656,

      // 新增
      resMap: null
    }
  },
  mounted () {
    this.initAMap()
  },
  methods: {
    async initAMap () {
      try {
        // 修改
        this.resMap = await AMap()
        this.map = new this.resMap.Map('container', {
          resizeEnable: true, // 是否监控地图容器尺寸变化
          zooms: [3, 19], // 设置地图级别范围
          zoom: 19, // 初始化地图层级
          zoomEnable: true, // 是否缩放
          scrollWheel: true, // 是否支持滚轮缩放
          dragEnable: true, // 是否支持鼠标拖拽平移
          jogEnable: true, // 是否支持缓动效果
          buildingAnimation: true, // 模块消失是否有动画效果
          center: [this.lng, this.lat] // 初始化地图中心点
        })
        this.addMarker()
      } catch (err) {
        console.error(err)
      }
    },
    addMarker () {
      this.marker = new this.resMap.Marker({
        icon: 'https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png',
        position: [this.lng, this.lat],
        title: '邻里共享e社区',
        offset: new this.resMap.Pixel(-13, -30)
      })
      this.map.add(this.marker)
      this.map.setFitView()
    }
  },
  components: {
    Navbar,
    Footer,
    Slider
  }
}
</script>

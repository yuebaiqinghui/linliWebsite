<template>
<div class="layout">
    <Layout>
        <!-- 顶部导航栏 -->
        <Navbar width="100%" class="nav"/>
        <!-- 轮播图 -->
        <Carousel loop dots="none" arrow="always" autoplay :autoplay-speed="10000">
            <CarouselItem>
                <div class="demo-carousel">
                    <img src="../assets/photo_1.jpg" width="100%" alt="">
                    <div class="carousel-card">
                        <p>INTELLIGENCE COMMUNITY</p>
                        <p>专注于智慧社区建设</p>
                        <p>邻里共享APP是以“互联网+社区”为理念，智能门禁 + 监控系统 + 物业服务 + 互动共享 + APP社区平台；通过信息化技术整合社会力量、组织公共资源，为广大社区居⺠提供在线开⻔、社区物业、居家购物、社区聊天等便⺠的社区生活服务平台</p>
                    </div>
                </div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel">
                    <img src="../assets/photo_2.jpg" width="100%" alt="">
                    <div class="carousel-card">
                        <p>INFORMATION TECHNOLOGY</p>
                        <p>信息化科技为您服务</p>
                        <p>经验丰富的专家团队,依托一套成熟的服务体和工作流程为客户提供高质量的软件系统顾问咨询，系统实施和售后维护等一系列服务 ，全面满足客户的需求。诚信经营,用心服务,在为客户创造价值的的过程中,不断提升企业自身的价值。</p>
                    </div>
                </div>
            </CarouselItem>
        </Carousel>
        <!-- 功能标签 -->
        <div class="tabs">
            <div class="tab">
                <img src="../assets/maintenance.png" alt="">
                <p class="tab-title">e维修</p>
                <div class="tab-line"></div>
                <p class="tab-content">e维修具有上门维修的功能，居民可以在线下单维修，最快半小时即有维修员上门维修，方便省心又可靠。</p>
            </div>
            <div class="tab">
                <img src="../assets/patrol.png" alt="">
                <p class="tab-title">e巡查</p>
                <div class="tab-line"></div>
                <p class="tab-content">e巡查是维护社区安全的主要功能，居民可以申请成为巡查员，做任务排除社区安全隐患。</p>
            </div>
            <div class="tab">
                <img src="../assets/lock.png" alt="">
                <p class="tab-title">手机开门</p>
                <div class="tab-line"></div>
                <p class="tab-content">手机开门是邻里共享APP的核心功能，居民开通门禁卡后即可登录注册使用手机开门功能。</p>
            </div>
            <div class="tab">
                <img src="../assets/Unmanned.png" alt="">
                <p class="tab-title">无人机</p>
                <div class="tab-line"></div>
                <p class="tab-content">邻里共享每周定期安排无人机进行社区巡查，减轻了社区居民的物业负担，实现智能化的社区管理。</p>
            </div>
        </div>
        <!-- 关于我们 -->
        <div class="about animated fadeInLeft">
            <img src="../assets/photo.png" alt="">
            <div class="about-content">
                <h2>关于我们</h2>
                <p>“邻里共享e社区”其实是一种创新型的社会治理项目。它借助“互联网+物业”的模式，打造可持续的共建共治共享社会治理新格局。简单地说，就是政府、居民、企业、物管多方利用“邻里共享”这一平台，参与社区治理，共同促进社区和谐氛围的形成。</p>
                <p>人民街党工委书记李剑怆说，为解决人员密集、房屋老旧、治安形势严峻等难题，街道也曾经引入传统物管服务，但由于无法实现物管公司自身“造血”功能，效果不理想。</p>
                <p>为破解濠畔小区治理难题，人民街党工委、办事处深入调查研究，多方探索，决定引入社会资源，建立“邻里共享e社区”。</p>
                <Button type="error" ghost to="/us">查看更多</Button>
            </div>
        </div>
        <!-- 产品中心 -->
        <div class="product animated fadeInRight">
            <h2>产品中心</h2>
            <p>为客户创造价值的过程中，不断提升企业自身的价值</p>
            <img src="../assets/separated.png" alt="">
            <div class="show">
                <div>
                    <img src="../assets/sl1.jpg" alt="">
                    <p>智能门禁</p>
                </div>
                <div>
                    <img src="../assets/sl2.jpg" alt="">
                    <p>监控系统</p>
                </div>
                <div>
                    <img src="../assets/sl3.jpg" alt="">
                    <p>物业服务</p>
                </div>
                <div>
                    <img src="../assets/sl4.jpg" alt="">
                    <p>APP社区平台</p>
                </div>
            </div>
            <Button type="error" ghost to="/product">查看更多</Button>
        </div>
        <!-- 联系我们 -->
        <div class="contact animated fadeInUp">
            <h2>联系我们</h2>
            <p>定制新科技，创造新社区</p>
            <img src="../assets/separated.png" alt="">
            <div class="contact-card">
                <div class="information">
                    <div class="info"><div class="info-tab">地址:</div><div class="info-content">广东省广州市越秀区人民街大新路</div></div>
                    <div class="info">102号</div>
                    <div class="info"><div class="info-tab">电话:</div><div class="info-content">17329908995</div></div>
                    <div class="info"><div class="info-tab">邮箱:</div><div class="info-content">caizhiqiang@jialinkeji.com</div></div>
                </div>
                <div class="form">
                    <Form :model="form">
                        <FormItem>
                            <Input v-model="form.title" class="input" placeholder="标题" />
                        </FormItem>
                        <FormItem>
                            <Input v-model="form.content" type="textarea" :rows="4" class="input" placeholder="内容" />
                        </FormItem>
                        <FormItem>
                            <Input v-model="form.mail" class="input" placeholder="电子邮件" />
                        </FormItem>
                        <FormItem>
                            <Input v-model="form.captcha" class="input" placeholder="验证码" />
                            <img src="../assets/GenerateLeavewordCaptcha.jpg" alt="" class="captcha">
                        </FormItem>
                    </Form>
                    <Button type="error" class="submit">提交</Button>
                </div>
            </div>
        </div>
        <!-- 底部 -->
        <Footer />
    </Layout>
</div>
</template>
<style>
.nav{
    position: fixed;
    top: 0;
    z-index: 9999;
    width: 100%
}
.ivu-carousel {
    margin-top: 76px;
}
.ivu-icon-ios-arrow-forward:before {
    font-size: 240%;
}
.ivu-icon-ios-arrow-back:before {
    font-size: 240%;
}
.ivu-input{
    width: 534px;
    height: 34px;
}
textarea.ivu-input{
    height: 136px;
    width: 534px
}
.ivu-carousel-arrow{
    width: 36px;
    height: 58px;
    border-radius: 0%;
    background-color: rgba(31,45,61,0.6);
}
</style>
<style scoped>
.ivu-layout{
    background: #fff;
}
.demo-carousel{
    position: relative;
}
.carousel-card{
    width:788px;
    height:288px;
    background:rgba(255,255,255,1);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
}
.carousel-card p:nth-child(1){
    font-size:28px;
    font-family:PingFang SC;
    font-weight:500;
    color:rgba(0,0,0,1);
    margin-top: 10px;
}
.carousel-card p:nth-child(2){
    font-size:65px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(0,0,0,1);
    margin-top: -2px;
}
.carousel-card p:nth-child(3){
    width:573px;
    margin-left: 110px;
    font-size:18px;
    font-family:PingFang SC;
    font-weight:500;
    color:rgba(0,0,0,1);
    line-height:30px;
}
.tabs{
    display: flex;
    justify-content: center;
    margin-top: 86px;
    border-bottom: 1px solid #E5E5E5
}
.tab{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 88px;
    padding-bottom: 66px
}
.tab:nth-child(4){
    margin-right: 0
}
.tab .tab-title{
    font-size:20px;
    font-family:PingFang SC;
    font-weight:400;
    color:#222;
    margin-top: 23px;
    margin-bottom: 15px;
}
.tab .tab-line{
    width:44px;
    height:2px;
    background:rgba(244,82,61,1);
    margin-bottom: 15px;
}
.tab .tab-content{
    width:183px;
    /* height:87px; */
    font-size:14px;
    font-family:PingFang SC;
    font-weight:500;
    color:rgba(102,102,102,1);
    line-height:24px;
    text-align: center;
    letter-spacing: 0.5px
}

.about{
    display: flex;
    justify-content: center;
    margin-top: 86px;
}
.about-content{
    margin-left: 50px
}
.about-content h2{
    font-size:36px;
    font-family:PingFang SC;
    font-weight:800;
    color:rgba(0,0,0,1);
    line-height:24px;
    border-left: 10px solid #F4523D;
    text-indent: 19px;
    margin-top: 21px
}
.about-content p{
    width:520px;
    /* height:207px; */
    font-size:14px;
    font-family:PingFang SC;
    font-weight:500;
    color:rgba(102,102,102,1);
    line-height:24px;
}
.about-content p:nth-child(2){
    margin-top: 21px;
}
.about-content p:nth-child(4){
    margin-bottom: 29px
}
.ivu-btn{
    border: 2px solid #F4523D;
    padding: 11px 52px 11px;
}

.product,.contact{
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    margin-top: 134px;
}
.contact{
    margin-top: 117px;
}
.product h2,.contact h2{
    font-size:36px;
    font-family:PingFang SC;
    font-weight:800;
    color:rgba(0,0,0,1);
    line-height:24px;
}
.product .show{
    display: flex;
    justify-content: center;
}
.product p,.contact p{
    font-size:14px;
    font-family:PingFang SC;
    font-weight:500;
    color:rgba(102,102,102,1);
    line-height:24px;
    margin: 15px 0 16px 0
}
.product img{
    margin-bottom: 41px
}
.product .show div{
    text-align: center;
    margin-right: 40px;
}
.product .show div:nth-child(4){
    margin-right: 0
}
.product .show div img{
    margin-bottom: 9px;
}
.product .show div p{
    margin: 0 0 44px 0
}

.contact-card{
    display: flex;
    margin-top: 40px;
    margin-bottom: 80px
}
.contact-card .information{
    width: 385px;
    height: 422px;
    background-image: url('../assets/Shape_1.png');
    margin-right: 9px
}
.contact-card .information .info{
    background: transparent;
    font-size:16px;
    font-family:PingFang SC;
    font-weight:bold;
    color:#020000;
    display: flex;
    margin-left: 44px
}
.contact-card .information .info:nth-child(1){
    margin-top: 103px
}
.contact-card .information .info:nth-child(2){
    margin-left: 90px
}
.contact-card .information .info:nth-child(3){
    margin-top: 19px
}
.contact-card .information .info:nth-child(4){
    margin-top: 39px
}
.contact-card .information div{
    background: transparent;
}
.info-tab{
    color: #F4523D
}
.info-content{
    text-indent: 10px
}
/* .contact-card .information div div{
    display: inline
} */
.contact-card .form{
    width: 621px;
    height: 422px;
    background-image: url('../assets/Shape_2.png')
}

.ivu-form-item{
    background: transparent;
    margin-left: 44px;
    margin-bottom: 10px
}
.ivu-form-item:nth-child(1){
    margin-top: 56px
}
.captcha{
    position: absolute;
    top: 6px;
    right: 50px;
}
.submit{
    margin-left: 488px;
    width: 90px;
    height: 34px;
    font-size: 14px;
    padding: 0;
}
</style>
<script>
import Navbar from '../components/navbar'
import Footer from '../components/footer'
export default {
  data () {
    return {
      form: {
        title: '',
        content: '',
        mail: '',
        captcha: ''
      }
    }
  },
  components: {
    Navbar,
    Footer
  }
}
</script>

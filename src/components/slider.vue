<template>
  <Carousel loop dots="none">
    <CarouselItem>
      <div class="demo-carousel">
        <img src="../assets/photo_01.jpg" width="100%" alt />
        <div class="carousel-card">
          <p>Intelligence community</p>
          <p>专注于智慧社区建设</p>
          <p>邻里共享APP是以"互联网+社区"为理念，智能门禁 + 监控系统 + 物业服务 + 互动共享 + APP社区平台；通过信息化技术整合社会力量、组织公共资源，为广大社区居⺠提供在线开⻔、社区物业、居家购物、社区聊天等便⺠的社区生活服务平台</p>
        </div>
      </div>
    </CarouselItem>
    <CarouselItem>
      <div class="demo-carousel">
        <img src="../assets/photo_02.jpg" width="100%" alt />
        <div class="carousel-card">
          <p>Information technology</p>
          <p>信息化科技为您服务</p>
          <p>经验丰富的专家团队,依托一套成熟的服务体和工作流程为客户提供高质量的软件系统顾问咨询，系统实施和售后维护等一系列服务 ，全面满足客户的需求。诚信经营,用心服务,在为客户创造价值的的过程中,不断提升企业自身的价值。</p>
        </div>
      </div>
    </CarouselItem>
  </Carousel>
</template>
<style>
.ivu-carousel-arrow{
    width: 36px;
    height: 58px;
    border-radius: 0%;
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
</style>

<template>
  <footer>
    <div class="copyright">
      <img src="../assets/icon_copyright.png" alt="">
      <span>版权所有：广州佳邻网络科技有限公司</span>
    </div>
    <div class="record">
      <img src="../assets/icon_shield.png" alt="">
      <span>备案：粤ICP备18043385号-1</span>
    </div>
    <div class="telephone">
      <img src="../assets/icon_phone.png" alt="">
      <span>电话：17329908995</span>
    </div>
  </footer>
</template>
<style>
footer{
  display: flex;
  justify-content: center;
  height:76px;
  background:rgba(32,32,32,1);
  line-height: 76px;
}
.copyright,.record,.telephone{
  display: flex;
  align-items: center
}
.copyright span,.record span,.telephone span{
  font-family:PingFang SC;
  font-weight:400;
  color:rgba(255,255,255,1);
  margin: 0 18px 0 9px;
}
</style>

<template>
  <div>
    <Row type="flex" justify="center" class="code-row-bg">
        <Col span="4"><img src="../assets/logo.png" alt="" class="logo"></Col>
        <Col span="12">
          <Menu mode="horizontal" :active-name="activeName">
            <MenuItem name="/" to="/">首页</MenuItem>
            <MenuItem name="/us" to="/us">关于我们</MenuItem>
            <MenuItem name="/product" to="/product">产品中心</MenuItem>
            <MenuItem name="/contact" to="/contact">联系我们</MenuItem>
          </Menu>
        </Col>
    </Row>
  </div>
</template>
<style scoped>
div {
  background:#fff
}
</style>
<style>

.code-row-bg{
  height: 76px;
}
.logo{
  height: 31px;
  width: 167px;
  margin-top: 32px;
}
.ivu-menu{
  margin-top: 16px;
}
.ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item:hover{
  color: #000000;
  border-bottom: 2px solid #000;
}
.ivu-menu-horizontal.ivu-menu-light:after{
  height: 0;
}
.ivu-menu-item{
  font-size: 15px;
}
.ivu-menu-horizontal .ivu-menu-item, .ivu-menu-horizontal .ivu-menu-submenu{
  padding: 0;
  margin: 0 50px;
}
.ivu-menu-horizontal{
  height: 45px;
}
</style>
<script>
export default {
  data () {
    return {
      activeName: this.$route.path
    }
  }
}
</script>

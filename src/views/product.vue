<template>
<div class="layout">
    <Layout>
        <Navbar />
        <Content>产品中心</Content>
        <Footer>Footer</Footer>
    </Layout>
</div>
</template>
<script>
import Navbar from '../components/navbar'
export default {
  components: {
    Navbar
  }
}
</script>

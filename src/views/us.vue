<template>
<div class="layout">
    <Layout>
        <Navbar />
        <Content>关于我们</Content>
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

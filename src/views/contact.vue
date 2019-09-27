<template>
<div class="layout">
    <Layout>
        <Navbar />
        <Slider />
        <Footer />
    </Layout>
</div>
</template>
<script>
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Slider from '../components/slider'
export default {
  components: {
    Navbar,
    Footer,
    Slider
  }
}
</script>

<template>
  <div class="home">
    <discount></discount>
    <shop></shop>
    <features></features>
    <products></products>
    <my-footer></my-footer>
  
  </div>
</template>

<script>
import Shop from '@/components/Shop'
import Discount from '../components/Discount.vue'
import Features from '../components/Features.vue'
import Products from '../components/Products.vue'
import MyFooter from '../components/MyFooter.vue'




export default {
  name: 'Home',

  components: {
    Shop,
    Discount,
    Features,
    Products,
    MyFooter,
  }
}

</script>

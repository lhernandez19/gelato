<template>
  <div class="home">
    <discount></discount>
    <shop></shop>
    <features></features>
    <products></products>
  
  </div>
</template>

<script>
// @ is an alias to /src
import Shop from '@/components/Shop'
import Discount from '../components/Discount.vue'
import Features from '../components/Features.vue'
import Products from '../components/Products.vue'




export default {
  name: 'Home',

  components: {
    Shop,
    Discount,
    Features,
    Products
  }
}

</script>

<template>
  <div class="home">
    <test></test>
    <discount></discount>
    <shop></shop>
  
  </div>
</template>

<script>
// @ is an alias to /src
import Test from '@/components/Test.vue'
import Shop from '@/components/Shop'
import Discount from '../components/Discount.vue'




export default {
  name: 'Home',

  components: {
    Test,
    Shop,
    Discount,
  }
}

</script>

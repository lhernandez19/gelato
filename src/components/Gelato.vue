<template>
  <div class="gelato">
    <h3 class="card-title">{{item.title}}</h3>
    <p class="card-text">Description: {{item.genre}}</p>
    <p class="card-text">Price: {{item.pages}}</p>
  </div>
</template>

<script>
import {Gelato} from "@/models/ShopItems";

export default {
  name: "Gelato",
  props: {
    item: Gelato
  },
}
</script>

<style scoped>

</style>
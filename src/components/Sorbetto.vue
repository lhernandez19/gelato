<template>
  <div class="sorbetto">
    <h3 class="card-title">{{item.title}}</h3>
    <p class="card-text">Artist: {{item.genre}}</p>
    <p class="card-text">Track Count: {{item.runningTime}}</p>
  </div>
</template>

<script>
import {Sorbetto} from "@/models/ShopItems";

export default {
  name: "Sorbetto",
  props: {
    item: Sorbetto
  },
}
</script>

<style scoped>

</style>
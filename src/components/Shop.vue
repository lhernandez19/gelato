<template>

	<div class="container d-flex flex-wrap justify-content-start">
		<shop-item
		v-for="(item, i) in shop"
		:item="item"

		:key="item.id"
		:forlater="i"
		></shop-item>
		<!-- <p >Checked Out: {{ shop.checkedOutItems().length }}</p> -->
	</div>

</template>

<script>
import ShopCollection from '@/models/ShopCollection'
import { Gelato, Sorbetto} from '@/models/ShopItems'
import ShopItem from '@/components/ShopItem'

export default {
	name: 'Shop',
	components: {
		ShopItem,
	},

	// props: {
	// 	addToBag: Function,
	// },

	data() {
		return {
			shop: new ShopCollection()
				.addItem(new Gelato('Vanilla', 'Really good chocolate dessert', 9.99))
				.addItem(new Sorbetto('Chocolate', 'Really good sorbetto dessert', 8.99))
				.addItem(new Gelato('Chocolate', 'Really good chocolate dessert', 9.99))
				.addItem(new Gelato('Chocolate', 'Really good chocolate dessert', 9.99))
				.addItem(new Gelato('Chocolate', 'Really good chocolate dessert', 9.99))
				.addItem(new Gelato('Chocolate', 'Really good chocolate dessert', 9.99)),
		}
	},
}
</script>

<style scoped></style>
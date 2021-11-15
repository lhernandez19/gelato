<template>
	<div>
		<p v-for="product in products" :key="product.id">{{product.name}}</p>
	</div>
</template>

<script>
import db from '../firebase/Firebase.js'
export default {
	name: 'MyInventory',

	data() {
		return {
			products: [],
		}
	},
	
	firestore: {
		products: db.collection('gelatos')
	},

	// created() {
	// 	db.collection('gelatos')
	// 		.onSnapshot(querySnapshot => {
	// 			querySnapshot.forEach(doc => {
	// 				const data = {
    //                     'id': doc.id,
    //                     'description': doc.data().description,
    //                     'name': doc.data().name,
    //                     'price': doc.data().price,
	// 				}
    //                 this.products.push(data)
	// 			})
	// 		})
	// },

	mounted() {},

	methods: {},
}
</script>

<style scoped></style>

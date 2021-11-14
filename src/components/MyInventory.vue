<template>
	<div></div>
</template>

<script>
import db from '../firebase/firebase.js'
export default {
	name: 'GelatoMyinventory',

	data() {
		return {
			products: [],
		}
	},
	created() {
		db.collection('gelatos')
			.get()
			.then(querySnapshot => {
				querySnapshot.forEach(doc => {
					const data = {
                        'description': doc.data().description,
                        'name': doc.data().name,
                        'price': doc.data().price,
					}
                    this.products.push(data)
				})
			})
	},

	mounted() {},

	methods: {},
}
</script>

<style scoped></style>

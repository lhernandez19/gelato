<template>
	<div>
		<b-container>
			<b-form>
				<b-form-input type="text" placeholder="Name" class="my-2">
				</b-form-input>
				<b-form-input type="text" placeholder="Flavor" class="my-2">
				</b-form-input>
				<b-form-input type="text" placeholder="Price" class="my-2">
				</b-form-input>
				<b-form-input type="text" placeholder="Quantity" class="my-2">
				</b-form-input>
				<b-form-input type="text" placeholder="Type" class="my-2">
				</b-form-input>
				<b-form-input type="text" placeholder="Description" class="my-2">
				</b-form-input>
				<b-button type="submit" variant="primary" class="my-2"
					>Add Product</b-button
				>
			</b-form>
		</b-container>
	</div>
</template>

<script>
export default {
	name: 'Products',

	data() {
		return {}
	},

	mounted() {},

	methods: {},
}
</script>

<style scoped></style>

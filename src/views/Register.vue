<template>
	<div>
		<div class="container d-flex justify-content-around mt-4 border shadow rounded p-5">
			<div class="col-6">
				<form class="col-10">
					<h1>Register</h1>
                    <div class="dropdown-divider col-4 mb-4"></div>
					<p class="text-muted">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos esse
						dignissimos alias accusamus illo qui ut fugiat.
					</p>
					<input type="text" class="form-control form-control-lg my-2" placeholder="Email" />
					<input type="text" class="form-control form-control-lg my-2" placeholder="Password" />
					<input
						type="text"
						class="form-control form-control-lg my-2"
						placeholder="Re-type password"
					/>
					<div class="form-group">
						<div class="form-check my-2">
							<input class="form-check-input" type="checkbox" id="gridCheck" />
							<label class="form-check-label" for="gridCheck">
								Agree our Terms and Conditions.
							</label>
						</div>
					</div>
					<button type="submit" class="btn btn-primary col-12 my-1">Register</button>
                    <p class="text-center">- or -</p>
				</form>
                <div>
                    <button type="submit" class="btn btn-primary col-10 my-1">Register with Google</button>
                    <button type="submit" class="btn btn-primary col-10 my-1">Register With Apple</button>
                    <button type="submit" class="btn btn-primary col-10 my-1">Register With Facebook</button>
                </div>
			</div>

			<div class="col-6">
				<h2 class="text-center">A BIG PICTURE WILL BE HERE</h2>
                <div class="dropdown-divider mb-4"></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Register',

	data() {
		return {}
	},

	mounted() {},

	methods: {},
}
</script>

<style scoped></style>

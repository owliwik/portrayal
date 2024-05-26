<script>
	import '../app.css';
	import Navbar from '$lib/components/navbar.svelte';
</script>

<div class="page-wrap">
	<Navbar />
	<div class="content-wrap">
		<slot />
	</div>
</div>

<style>
	.page-wrap {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	.content-wrap {
		flex: 1;
		display: flex;
	}
</style>

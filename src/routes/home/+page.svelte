<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import Input from '$lib/components/ui/input/input.svelte';
	import Switch from '$lib/components/ui/switch/switch.svelte';
	import Checkbox from '$lib/components/ui/checkbox/checkbox.svelte';
	import Label from '$lib/components/ui/label/label.svelte';
</script>

<main class="flex w-full min-h-full bg-red-50 items-center justify-center">
	<div class="flex flex-col items-center justify-center gap-4">
		<Input class="" />
		<Button class="">Hello ICer!</Button>

		<div class="flex items-center gap-2">
			<Switch id="clean" />
			<Label for="clean">Clean mode</Label>
		</div>
		<div class="flex items-center gap-2">
			<Checkbox id="accept-terms" />
			<Label for="accept-terms">Accept terms and conditions</Label>
		</div>
	</div>
</main>

<script lang="ts">
	import type { PageData } from './$types';
	import Checkbox from '$lib/components/ui/checkbox/checkbox.svelte';
	export let data: PageData;

	let showType = '';
</script>

<main>
	<h1>Our Clubs</h1>

	<div>
		<Checkbox onCheckedChange={() => (showType = showType === '项目式' ? '' : '项目式')} />
		<p>Showing: {showType}</p>
	</div>

	<div>
		{#if data.clubData}
			{#each data.clubData as club}
				{#if !showType || (club.tags && club.tags.includes(showType))}
					<div class="my-4">
						<h2>Club name: {club.name}</h2>
						<p>English name: {club.english_name}</p>
						<p>
							Classified as: {club.is_formal
								? 'ICCU Verified Formal Club'
								: 'ICCU Registered Interest Group'}
						</p>

						<p>Description: {club.club_description}</p>
						<p>Contact: {club.wechat_contact}</p>
					</div>
				{/if}
			{/each}
		{/if}
	</div>
</main>

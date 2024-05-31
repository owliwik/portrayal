<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<main>
	<h1>Our Clubs</h1>

	<div>
		{#if data.clubData}
			{#each data.clubData as club}
				<div class="my-4">
					<h2>Club name: {club.name}</h2>
					<p>English name: {club.english_name}</p>
          <p>Classified as: {club.is_formal ? 'ICCU Verified Formal Club' : 'ICCU Registered Interest Group'}</p>

					<p>Description: {club.club_description}</p>
					<p>Contact: {club.wechat_contact}</p>
				</div>
			{/each}
		{/if}
	</div>
</main>

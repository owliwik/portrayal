<script lang="ts">
	import { page } from '$app/stores';
	import Button from '$lib/components/ui/button/button.svelte';
	import { twJoin } from 'tailwind-merge';

	$: now = `/${$page.url.pathname.split('/')[1]}`;

	const onLinkClick = (to: string) => {
		now = to;
	};
</script>

<header class="header">
	<a href="/" class="logo">IC Meet&reg</a>

	<nav class="nav">
		<a
			href="/home"
			class={twJoin('nav-link link-animated', now === '/home' && 'active-link')}
			on:click={() => onLinkClick('/home')}
		>
			Home
		</a>
		<a
			href="/people"
			class={twJoin('nav-link link-animated', now === '/people' && 'active-link')}
			on:click={() => onLinkClick('/people')}
		>
			Our People
		</a>
		<a
			href="/clubs"
			class={twJoin('nav-link link-animated', now === '/clubs' && 'active-link')}
			on:click={() => onLinkClick('/clubs')}
		>
			Our Clubs
		</a>
		<a
			href="/about"
			class={twJoin('nav-link link-animated', now === '/about' && 'active-link')}
			on:click={() => onLinkClick('/about')}
		>
			About
		</a>
		<a
			href="/resource"
			class={twJoin('nav-link link-animated', now === '/resource' && 'active-link')}
			on:click={() => onLinkClick('/resource')}
		>
			Resource
		</a>
	</nav>

	<a href="/auth">
		<Button variant="outline">My Profile</Button>
	</a>
</header>

<style>
	.header {
		width: 100%;
		max-width: 1400px;
		align-self: center;
		padding: 1rem 2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.logo {
		font-size: 1.5rem;
		font-weight: bold;
	}

	.nav {
		display: flex;
		justify-content: center;
		width: 60%;
		max-width: 40rem;
	}

	.nav-link {
		margin: 0 2%;
		font-size: 1.1rem;
		font-weight: 300;
	}

	.active-link::after {
		left: 0;
		width: 100%;
	}
</style>

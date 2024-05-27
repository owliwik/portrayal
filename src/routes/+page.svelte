<script lang="ts">
	import { twJoin } from 'tailwind-merge';

	let heroWords = [
		'Artists',
		'Inventors',
		'Hackers',
		'Athletes',
		'Singers',
		'Debaters',
		'Gamers',
		'Historians'
	];

	//time in ms
	const timeEachChar = 100;
	const waitTime = 2000;

	let index = 0;
	const next = () => {
		index = (index + 1) % heroWords.length;
	};

	const sleep = (time: number) => {
		return new Promise((resolve) => setTimeout(resolve, time));
	};

	let current = '';
	let isBlinking = false;

	const typeHero = async () => {
		while (true) {
      isBlinking = false;
			if (current !== '') {
				const len = current.length;
				for (let i = 0; i < len; i++) {
					current = current.substring(0, len - 1 - i);
					await sleep(timeEachChar);
				}
			}

			for (let c of heroWords[index]) {
				current += c;
				await sleep(timeEachChar);
			}

      isBlinking = true;
			next();
			await sleep(waitTime);
		}
	};

	typeHero();
</script>

<main>
	<div class="hero">
		<div class="hero-aux">Here at IC Meet</div>
		<h1 class="hero-main">
			We Thrive Together As <span class={twJoin("typed", isBlinking && "typed-blink")}>{current}</span>
		</h1>
	</div>
</main>

<style>
	main {
		width: 100%;
		min-height: 100%;
	}

	.hero {
		background-color: blanchedalmond;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.hero-aux {
		font-size: 2rem;
	}

	.hero-main {
		font-size: 3rem;
		font-weight: bold;
	}

	.typed {
		position: relative;
		color: cadetblue;
	}

	.typed::before {
		width: 4px;
		height: 80%;
		content: '';
		position: absolute;
		top: 50%;
		left: calc(100% + 2px);
		transform: translateY(-50%);
		background-color: currentColor;
	}

	@keyframes blink {
		0% {
			opacity: 100%;
		}

		10% {
			opacity: 0%;
		}

		/* Lengthen the fully visible duration */
		40% {
			opacity: 0%;
		}

		/* Shorten the opacity back to 100% duration */
		50% {
			opacity: 100%;
		}

		100% {
			opacity: 100%;
		}
	}

	.typed-blink::before {
		animation: blink 1s linear infinite;
	}
</style>

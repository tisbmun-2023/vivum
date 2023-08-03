<script>
	import '../app.postcss';
	import '$lib/css/fonts.css';
	import '$lib/css/global.css';
	import Header from '../lib/components/Header.svelte';
	import { email } from '$lib/config/indexPage';
</script>

<svelte:head>
	<style>
		@import url('https://fonts.googleapis.com/css?family=Nunito%20Sans&display=swap');
		@import url('https://fonts.googleapis.com/css?family=Oxygen&display=swap');
	</style>
</svelte:head>

<div class="flex min-h-screen flex-col justify-between overflow-x-hidden bg-[#011f59] text-white ">
	<Header />

	<main>
		<slot />
	</main>
	<footer class="mb-auto bg-black">
		<h2 class="text-xl">
			VIVUM 2023
		</h2>
		<h3 class="text-center">
			Contact us at <a class="font-bold hover:opacity-80" href="mailto:{email}">{email}</a>
		</h3>
	</footer>
</div>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>

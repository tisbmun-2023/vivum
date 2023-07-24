<script>
	import Link from '$lib/components/Link.svelte';
	import '../app.postcss';
	import '$lib/css/fonts.css';
	import Header from '../lib/components/Header.svelte';
</script>

<svelte:head>
	<style>
		@import url('https://fonts.googleapis.com/css?family=Nunito%20Sans&display=swap');
	</style>
</svelte:head>

<div class="flex min-h-screen flex-col justify-between overflow-x-hidden bg-[#001f5b] text-white">
	<Header />

	<main>
		<slot />
	</main>
	<footer class="mb-auto bg-black">
		<p>
			VIVUM 2023. Made by
			<Link href="https://github.com/cheesycod">
				<strong>cheesycod</strong>!
			</Link>
		</p>
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

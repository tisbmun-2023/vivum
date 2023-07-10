<script>
	import Link from "$lib/components/Link.svelte";
	import "../app.postcss";
	import "../root.postcss"
    import Header from '../lib/components/Header.svelte';
</script>

<div class="flex flex-col h-screen justify-between text-white overflow-x-hidden bg-gradient-to-b from-blue-900 to-blue-700">
	<article id="root">
		<Header></Header>

		<main>
			<slot></slot>
		</main>
	</article>
	<footer class="mb-auto bg-black">
		<p>VIVUM 2023. Made by 
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
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
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

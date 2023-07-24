<script lang="ts">
	import { nav } from '$lib/config/nav';
	import tisb from '$lib/images/tisb.png';

	function onClickMenu() {
		console.log('clicked');

		const menu = document.getElementById('menu');

		if (menu) {
			menu.classList.toggle('hidden');
		}
	}
</script>

<nav class="rounded border-gray-200 px-2 sm:px-4">
	<div class="mx-auto flex flex-wrap">
		<a href="/" class="flex items-center">
			<img src={tisb} class="mr-3 h-6 sm:h-9" alt="TISB Logo" />
			<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
				>VIVUM 2023</span
			>
		</a>
		<div class="hidden w-full md:block md:w-auto" id="navbar-default">
			<ul
				class="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:text-sm md:font-medium md:dark:bg-gray-900"
			>
				{#each nav as link}
					<li>
						<a
							href={link?.url}
							class="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
							>{link?.name}</a
						>
					</li>
				{/each}
			</ul>
		</div>
		<button
			on:click={onClickMenu}
			type="button"
			class="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
			aria-controls="navbar-default"
			aria-expanded="false"
		>
			<span class="sr-only">Open main menu</span>
			<svg
				class="h-6 w-6"
				aria-hidden="true"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				><path
					fill-rule="evenodd"
					d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
					clip-rule="evenodd"
				/></svg
			>
		</button>
	</div>
</nav>

<!--Menu for mobile users-->

<div id="menu" class="hidden">
	<div class="space-y-1 px-2 pb-3 pt-2 sm:px-3">
		<a
			href="/"
			class="block rounded-md px-3 py-2 text-base font-medium text-violet-600 hover:bg-gray-50 hover:text-gray-900 dark:text-amber-400 dark:hover:bg-gray-700 dark:hover:text-white"
			>Home</a
		>

		{#each nav as link}
			<a
				href={link?.url}
				class="block rounded-md px-3 py-2 text-base font-medium text-violet-600 hover:bg-gray-50 hover:text-gray-900 dark:text-amber-400 dark:hover:bg-gray-700 dark:hover:text-white"
				>{link?.name}</a
			>
		{/each}
	</div>
</div>

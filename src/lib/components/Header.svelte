<script>
	import { page } from '$app/stores';
	import { socialMedia } from '$lib/config/sm';
	import { nav } from '$lib/config/nav';
	import tisb from '$lib/images/tisb.png';
	import Icon from '@iconify/svelte';
	import Dropdown from './Dropdown.svelte';
	import DropdownMobile from './DropdownMobile.svelte';

	let mobileOpen = false;
</script>

<header class="mb-3 h-10 p-2 text-xl">
	<div class="mx-auto flex items-center justify-between">
		<div class="flex items-center space-x-6">
			<a href="/" class="flex items-center">
				<img src={tisb} class="mr-3 h-6 sm:h-9" alt="TISB Logo" />
				<span class="mr-3 self-center whitespace-nowrap text-xl font-semibold dark:text-white"
					>VIVUM 2023</span
				>
			</a>
			<nav>
				<ul class="hidden items-center space-x-4 lg:flex">
					{#each nav as navItem}
						<li aria-current={navItem.isOnPage($page.url.pathname) ? 'page' : undefined}>
							<a class="hover:text-amber-300" href={navItem?.url}>{navItem?.name}</a>
							{#if navItem.isOnPage($page.url.pathname)}
								<hr class="w-full h-0.5 bg-amber-300" />
							{/if}
						</li>
					{/each}
					<Dropdown />
				</ul>
			</nav>
		</div>
		<div class="relative flex items-center space-x-2">
			{#each socialMedia as sm}
				<a class="hover:opacity-80" href={sm?.url} id={sm?.id + '-icon'} aria-details={sm?.name} >
					<span class="text-lg">
						<Icon icon={sm?.icon} class="inline-block mr-1" /><span class="sr-only">{sm?.tag}</span>
					</span>
				</a>
			{/each}

			<button
				on:click={() => (mobileOpen = !mobileOpen)}
				type="button"
				class="ml-3 items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 sm:inline-flex md:hidden"
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
	</div>
</header>

{#if mobileOpen}
	<div id="mobile-menu" class="md:hidden">
		<div class="space-y-1 px-2 pb-3 pt-2 sm:px-3">
			{#each nav as link}
				<a
					href={link?.url}
					class="block rounded-md px-3 py-2 text-base font-medium text-slate-50 hover:bg-gray-50 hover:text-gray-900 dark:text-amber-400 dark:hover:bg-gray-700 dark:hover:text-white"
					>{link?.name}</a
				>
			{/each}

			<DropdownMobile />

			<button
				on:click={() => (mobileOpen = !mobileOpen)}
				class="block w-full rounded-md px-3 py-2 text-left text-base font-medium text-slate-50 hover:bg-gray-50 hover:text-gray-900 dark:text-amber-400 dark:hover:bg-gray-700 dark:hover:text-white"
				>Close Menu</button
			>
		</div>
	</div>
{/if}

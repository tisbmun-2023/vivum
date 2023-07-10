<script>
	import { page } from '$app/stores';
	import { socialMedia } from '$lib/config/sm';
	import { nav } from '$lib/config/nav';
	import tisb from '$lib/images/tisb.png';
	import Icon from '@iconify/svelte';
</script>

<header class="top-0 h-10 p-2">
	<div class="max-w-7xl mx-auto flex items-center justify-between">
		<div class="flex items-center space-x-6">
			<a href="/" class="flex items-center">
				<img src={tisb} class="mr-3 h-6 sm:h-9" alt="TISB Logo" />
				<span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">VIVUM 2023</span>
			</a>
			<nav>
				<ul class="hidden lg:flex items-center space-x-4">
					{#each nav as navItem}
						<li aria-current={navItem.isOnPage($page.url.pathname) ? 'page' : undefined}>
							<a class="hover:text-amber-50" href={navItem?.url}>{navItem?.name}</a>
						</li>
					{/each}
				</ul>
			</nav>
		</div>
		<div class="flex items-center space-x-2 relative">
			{#each socialMedia as sm}
				<a class="text-xl" href={sm?.url} id={sm?.id + "-icon"}>
					<Icon icon={sm?.icon} inline={true} />
				</a>
			{/each}
		</div>
	</div>
</header>

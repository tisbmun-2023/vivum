<script>
	import { page } from '$app/stores';
	import { socialMedia } from '$lib/config/sm';
	import { nav } from '$lib/config/nav';
	import tisb from '$lib/images/tisb.png';
	import Icon from '@iconify/svelte';

    function onClickMenu() {
      console.log("clicked");
  
      const menu = document.getElementById("menu");
  
      if (menu) {
        menu.classList.toggle("hidden");
      }
    }
</script>

<header class="mb-3 h-10 p-2 text-xl">
	<div class="mx-auto flex items-center justify-between">
		<div class="flex items-center space-x-6">
			<a href="/" class="flex items-center">
				<img src={tisb} class="mr-3 h-6 sm:h-9" alt="TISB Logo" />
				<span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white mr-3">VIVUM 2023</span>
			</a>
			<nav>
				<ul class="hidden lg:flex items-center space-x-4">
					{#each nav as navItem}
						<li aria-current={navItem.isOnPage($page.url.pathname) ? 'page' : undefined}>
							<a class="hover:text-amber-300" href={navItem?.url}>{navItem?.name}</a>
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

			<button on:click={onClickMenu} type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
				<span class="sr-only">Open main menu</span>
				<svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
			</button>			
		</div>
	</div>
</header>

<div id="menu" class="hidden bg-">
	<div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">  
		{#each nav as link}
			<a href={link?.url} class="block px-3 py-2 text-base font-medium text-violet-600 rounded-md hover:text-gray-900 hover:bg-gray-50 dark:text-amber-400 dark:hover:text-white dark:hover:bg-gray-700">{link?.name}</a>
		{/each}

		<button on:click={onClickMenu} class="w-full text-left block px-3 py-2 text-base font-medium text-violet-600 rounded-md hover:text-gray-900 hover:bg-gray-50 dark:text-amber-400 dark:hover:text-white dark:hover:bg-gray-700">Close Menu</button>
	</div>
</div>	


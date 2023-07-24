<!--
    AnimatedBox is a box/card element that flips/animates when it becomes visible
-->

<script lang="ts">
	interface Button {
		text: string;
		href: string;
	}

	export let title: string;
	export let button: Button | null = null;
</script>

<div class="card md:w-[1/2] lg:w-1/3 mb-5 mr-3 rounded-lg border border-purple-500 p-6 shadow dark:border-purple-500 bg-[#100159]">
	<h5 class="mb-2 text-2xl font-bold tracking-tight p-3">{title}</h5>
		<p class="mb-3 h-[20rem] overflow-y-scroll font-normal text-stone-400 p-3">
			<slot />
		</p>
		{#if button}
			<a
				href={button?.href}
				class="inline-flex items-center justify-end rounded-md bg-blue-700 px-3 py-2 text-center font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			>
				{button?.text}
				<svg
					class="ml-2 h-3.5 w-3.5"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 14 10"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M1 5h12m0 0L9 1m4 4L9 9"
					/>
				</svg>
			</a>
    {/if}
</div>

<style>
::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
}
::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: #c0c5e5;
    box-shadow: 0 0 1px rgba(255,255,255,.5);
}

::-webkit-scrollbar-thumb:active { 
    background-color: rgb(168 85 247 / var(--tw-text-opacity));
}  
</style>
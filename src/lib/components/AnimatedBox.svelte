<!--
    AnimatedBox is a box/card element that flips/animates when it becomes visible
-->

<script lang="ts">
	import ButtonLink from "./ButtonLink.svelte";

	interface Button {
		text: string;
		href: string;
		disabled?: boolean;
	}

	export let title: string;
	export let button: Button | null = null;

	// 			class="inline-flex items-center justify-end rounded-md bg-blue-700 px-3 py-2 text-center font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
</script>

<div
	class="card mb-5 mr-3 rounded-lg border border-purple-500 bg-[#100159] p-6 shadow dark:border-purple-500 md:w-[1/2] lg:w-1/3"
>
	<h5 class="mb-2 p-3 text-2xl font-bold tracking-tight">{title}</h5>
	<p class="mb-3 h-[20rem] overflow-y-scroll p-3 font-normal text-stone-400">
		<slot />
	</p>
	{#if button}
		<ButtonLink
			href={button?.href}
			disabled={button?.disabled}
			showArrow={true}
		>
			{button?.text}
		</ButtonLink>
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
		box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
	}

	::-webkit-scrollbar-thumb:active {
		background-color: rgb(168 85 247 / var(--tw-text-opacity));
	}
</style>

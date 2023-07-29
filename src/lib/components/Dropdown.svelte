<script lang="ts">
	import { page } from '$app/stores';
	import { eventList } from '$lib/config/events';
	import DropdownInner from './DropdownInner.svelte';

	export let open: boolean = false;
</script>

{#if $page.url.pathname == "/"}
	<span class="z-50 overflow-hidden">
		<button on:click={() => (open = !open)} class="hover:text-amber-300">
			Events

			<svg
				class="inline h-2.5 w-2.5"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 10 6"
			>
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="m1 1 4 4 4-4"
				/>
			</svg>
		</button>
		<!-- Dropdown menu -->
		{#if open}
			<DropdownInner />
		{/if}
	</span>
{/if}
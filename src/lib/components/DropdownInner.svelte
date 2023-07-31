<script lang="ts">
	import { eventList } from '$lib/config/events';

	export let onClick: () => void;
</script>

<div
	id="dropdown"
	class="absolute z-10 divide-y divide-gray-100 rounded-lg border-gray-700 bg-sky-800 shadow"
>
	<ul class="py-2 text-sm text-white" aria-labelledby="dropdownDefaultButton">
		<li>
			{#each eventList as event}
				<a on:click={() => onClick()} href={event?.id} class="block px-4 py-2 font-bold hover:bg-sky-600 hover:text-white"
					>{event?.name}</a
				>
			{/each}
		</li>
	</ul>
</div>

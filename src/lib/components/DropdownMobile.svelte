<script lang="ts">
	import { eventList } from "$lib/config/events";
	import DropdownInner from "./DropdownInner.svelte";

    export let open: boolean = false;
</script>
<span class="z-50 overflow-hidden">
    <button on:click={() => open = !open} class="block w-full rounded-md px-3 py-2 text-left text-base font-medium text-slate-50 hover:bg-gray-50 hover:text-gray-900 dark:text-amber-400 dark:hover:bg-gray-700 dark:hover:text-white">
        Events

        <svg class="inline w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
        </svg>
    </button>    
    <!-- Dropdown menu -->
    {#if open}
        <DropdownInner />
    {/if}
</span>

<!--
    AnimatedBox is a box/card element that flips/animates when it becomes visible
-->

<script lang="ts">
	import { onMount } from "svelte";

    export let title: string;

    onMount(() => {
        const inViewport: IntersectionObserverCallback = (entries, observer) => {
            entries.forEach(entry => {
                console.log("AnimatedBox: isInViewPort triggered")
                entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
            });
        };

        const Obs = new IntersectionObserver(inViewport);

        // Attach observer to every [data-inviewport] element:
        const ELs_inViewport = document.querySelectorAll('[data-inviewport]');
        ELs_inViewport.forEach(EL => {
            Obs.observe(EL);
        });
    })
</script>

<div data-inviewport="fade-rotate" class="card w-96 max-h-[26rem] p-6 mb-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" data->
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        <slot />
    </p>
</div>

<style>
/* inViewport */

:global([data-inviewport="scale-in"]) { 
  transition: 2s;
  transform: scale(0.1);
}
:global([data-inviewport="scale-in"].is-inViewport) { 
  transform: scale(1);
}

:global([data-inviewport="fade-rotate"]) { 
  transition: 2s;
  opacity: 0;
}
:global([data-inviewport="fade-rotate"].is-inViewport) { 
  transform: rotate(180deg);
  opacity: 1;
}
</style>
<script lang="ts">
	export let id: string;
    export let name: string;
    export let allowBlack: boolean = false;
</script>

<div class="text-center">
    {#if !allowBlack}
        <img src={`/sponsors/${id}.webp`} alt={name} class="bg-white w-[6rem] h-[6rem] object-contain m-auto" />
    {:else}
        <img src={`/sponsors/${id}.webp`} alt={name} class="bg-black w-[6rem] h-[6rem] object-contain m-auto" />
    {/if}

    <h4 class="text-2xl text-center mt-4"><strong>{name}</strong></h4>    
</div>

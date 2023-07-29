<script lang="ts">
	import SponsorInner from "./SponsorInner.svelte";

	export let id: string;
    export let name: string;
    export let href: string;
    export let allowBlack: boolean = false;

    let classList = "sponsor card mb-5 mr-3 rounded-lg border border-purple-500 p-6 shadow dark:border-purple-500 w-[18rem] bg-[#100159]"
</script>

{#if href}
    <a href={href} class={classList} id={id}>
        <SponsorInner id={id} name={name} allowBlack={allowBlack}/>
    </a>
{:else}
    <span class={classList} id={id}>
        <SponsorInner id={id} name={name} allowBlack={allowBlack} />
    </span>
{/if}
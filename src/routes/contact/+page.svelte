<script>
	import Link from "$lib/components/Link.svelte";
	import ListItem from "$lib/components/ListItem.svelte";
	import UnorderedList from "$lib/components/UnorderedList.svelte";
	import { email } from "$lib/config/indexPage";
	import { socialMedia } from "$lib/config/sm";
</script>

<svelte:head>
	<title>Contact VIVUM2023</title>
	<meta name="description" content="Welcome to VIVUM2023, Bangalore's largest student-run fest" />
</svelte:head>

<article class="m-4 px-2">
	<h3 class="text-center text-6xl font-semibold lg:text-9xl">
		VIVUM 2023
	</h3>
	<h2 class="text-4xl text-center font-bold">Please contact us if you have any questions or concerns</h2>
	<hr class="my-5" />
	<p class="mb-5 text-2xl font-bold">
        You can contact us by the following means:
    </p>
    <div class="text-xl">
        <UnorderedList>
            <ListItem>
                Email: <Link href="mailto:{email}">{email}</Link>
            </ListItem>
            {#each socialMedia as sm}
                <ListItem>
                    {sm?.name}: <Link href={sm?.url}>{sm?.tag}</Link>
                </ListItem>
            {/each}
        </UnorderedList>
    </div>
</article>
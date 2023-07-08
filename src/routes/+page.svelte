<script>
	import { dates, time } from "$lib/config/indexPage";
	import Icon from "@iconify/svelte";

</script>
<svelte:head>
	<title>VIVUM 2023</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<article>
	<h1 class="text-8xl font-bold text-center">TISB</h1>
	<h2 class="text-4xl font-semibold text-center">PRESENTS</h2>
	<div class="mt-7 mb-7"></div>
	<h3 id="event-name" class="text-6xl lg:text-9xl font-semibold text-center">VIVUM 2023</h3>
	<div class="mb-36"></div>
	<p id="event-date" class="text-2xl lg:text-3xl font-semibold">
		<Icon icon="mdi:calendar-month-outline" class="inline" inline={true}/>
		Date: {dates}
	</p>
	<p id="event-date" class="text-2xl lg:text-3xl font-semibold">
		<Icon icon="mdi:clock" class="inline" inline={true}/>
		Time: {time}
	</p>
	
</article>

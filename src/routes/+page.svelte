<script>
	import AnimatedBox from "$lib/components/AnimatedBox.svelte";
	import FlexedArea from "$lib/components/FlexedArea.svelte";
import { dates, time } from "$lib/config/indexPage";
	import Icon from "@iconify/svelte";

</script>
<svelte:head>
	<title>VIVUM 2023</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<article>
	<h1 class="text-8xl font-bold text-center">Welcome to</h1>
	<div class="mt-7 mb-7"></div>
	<h3 id="event-name" class="text-6xl lg:text-9xl font-semibold text-center animate-pulse">VIVUM 2023</h3>
	<div class="mb-18"></div>
	<h4 id="registration" class="text-2xl font-semibold text-center opacity-70">To register, please contact your school for more information</h4>
	<div class="mb-18"></div>
	<h4 id="save-the-datesh" class="text-4xl font-semibold text-center underline p-3 mt-10">Save The Dates!</h4>
	<p id="event-date" class="text-2xl lg:text-3xl font-semibold text-center">
		<Icon icon="mdi:calendar-month-outline" class="inline" inline={true}/>
		Date: {dates}
	</p>
	<p id="event-date" class="text-2xl lg:text-3xl font-semibold text-center">
		<Icon icon="mdi:clock" class="inline" inline={true}/>
		Time: {time}
	</p>
	<div class="mb-48"></div>
	<FlexedArea>
		<AnimatedBox title="Test">
			Hello world
		</AnimatedBox>
		<AnimatedBox title="Test">
			Hello world
		</AnimatedBox>
		<AnimatedBox title="Test">
			Hello world
		</AnimatedBox>
		<AnimatedBox title="Test">
			Hello world
		</AnimatedBox>
		<AnimatedBox title="Test">
			Hello world
		</AnimatedBox>
		<AnimatedBox title="Test">
			Hello world
		</AnimatedBox>
	</FlexedArea>
</article>

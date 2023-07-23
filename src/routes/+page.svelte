<script>
	import AnimatedBox from "$lib/components/AnimatedBox.svelte";
	import FlexedArea from "$lib/components/FlexedArea.svelte";
	import Section from "$lib/components/Section.svelte";
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
	<Section title="Music Events">
		<FlexedArea>
			<AnimatedBox 
				title="Battle of the Bands"
				button={{
					text: "Register Now",
					href: "https://forms.office.com/r/mxT6FpdQ55"
				}}
			>
				Bands representing their schools from all over the city will perform songs 
				on stage to get the highest score from our judges, who consist of talented 
				and knowledgeable musicians. The bands will be judged on their stage presence, 
				crowd participation, fluency and song choice, and the winner takes all!

				<ul class="mt-4 list-disc list-inside">
					<li class="mb-2">
						Teams consisting of four to eight members
					</li>
					<li class="mb-2">
						Bands have 15 minutes, including set-up time, to perform.
					</li>
					<li class="mb-2">
						Four teams will advance to our finals
					</li>
					<li class="mb-2">
						Teams must play for 10 minutes, excluding set-up time
					</li>
				</ul>
			</AnimatedBox>
			<AnimatedBox 
				title="Beatbox Battle"
				button={{
					text: "Register Now",
					href: "https://forms.office.com/r/CV1zSBs3aj"
				}}
			>
				Similar to the rap battle, this event showcases students facing off and flaunting 
				their talents, creating the most complex beat possible solely with their mouth to 
				triumph over their opponent. The winner will be decided by the cheers of the crowd 
				and the intricacy of their sounds. 
			</AnimatedBox>
			<AnimatedBox title="Test">
				Hello world
			</AnimatedBox>
			<AnimatedBox title="Test">
				Hello world
			</AnimatedBox>
		</FlexedArea>	
	</Section>
</article>

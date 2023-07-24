<script>
	import AnimatedBox from '$lib/components/AnimatedBox.svelte';
	import FlexedArea from '$lib/components/FlexedArea.svelte';
	import Section from '$lib/components/Section.svelte';
	import { dates, time } from '$lib/config/indexPage';
	import Icon from '@iconify/svelte';
</script>

<svelte:head>
	<title>VIVUM 2023</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<article>
	<h1 class="text-center text-8xl font-bold">Welcome to</h1>
	<div class="mb-7 mt-7" />
	<h3 id="event-name" class="animate-pulse text-center text-6xl font-semibold lg:text-9xl">
		VIVUM 2023
	</h3>
	<div class="mb-18" />
	<h4 id="registration" class="text-center text-2xl font-semibold opacity-70">
		To register, please contact your school for more information
	</h4>
	<div class="mb-18" />
	<h4 id="save-the-datesh" class="mt-10 p-3 text-center text-4xl font-semibold underline">
		Save The Dates!
	</h4>
	<p id="event-date" class="text-center text-2xl font-semibold lg:text-3xl">
		<Icon icon="mdi:calendar-month-outline" class="inline" inline={true} />
		Date: {dates}
	</p>
	<p id="event-date" class="text-center text-2xl font-semibold lg:text-3xl">
		<Icon icon="mdi:clock" class="inline" inline={true} />
		Time: {time}
	</p>
	<Section title="Music Events">
		<FlexedArea>
			<AnimatedBox
				title="Battle of the Bands"
				button={{
					text: 'Register Now',
					href: 'https://forms.office.com/r/mxT6FpdQ55'
				}}
			>
				Bands representing their schools from all over the city will perform songs on stage to get
				the highest score from our judges, who consist of talented and knowledgeable musicians. The
				bands will be judged on their stage presence, crowd participation, fluency and song choice,
				and the winner takes all!	

				<ul class="mt-4 list-inside list-disc">
					<li class="mb-2">Teams consisting of four to eight members</li>
					<li class="mb-2">Bands have 15 minutes, including set-up time, to perform.</li>
					<li class="mb-2">Four teams will advance to our finals</li>
					<li class="mb-2">Teams must play for 10 minutes, excluding set-up time</li>
					<li class="mb-2">
						We will provide a five-piece drum set-up, two guitar amps, one bass amp, one keyboard
						amp, a grand piano, and five mics that can be used.
					</li>
					<li class="mb-2">
						Any additional instruments or accessories needed (such as processors/pedals for
						guitarists or extra cymbals for drummers) must be brought by participants, only after
						prior notice is given to the organizing committee.
					</li>
					<li class="mb-2"><strong>Location: Main Auditorium</strong></li>
				</ul>
			</AnimatedBox>
			<AnimatedBox
				title="Beatbox Battle"
				button={{
					text: 'Register Now',
					href: 'https://forms.office.com/r/CV1zSBs3aj'
				}}
			>
				Similar to the rap battle, this event showcases students facing off and flaunting their
				talents, creating the most complex beat possible solely with their mouth to triumph over
				their opponent. The winner will be decided by the cheers of the crowd and the intricacy of
				their sounds.

				<ul class="mt-4 list-inside list-disc">
					<li class="mb-2">
						Only six teams will be allowed to participate on a first-come-first-serve basis, so
						reserve your spot quickly!
					</li>
					<li class="mb-2"><strong>Location: Radio Shack</strong></li>
				</ul>
			</AnimatedBox>
			<AnimatedBox title="Test">Hello world</AnimatedBox>
			<AnimatedBox title="Test">Hello world</AnimatedBox>
		</FlexedArea>
	</Section>
</article>

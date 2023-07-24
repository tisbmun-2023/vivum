<script>
	import AnimatedBox from '$lib/components/AnimatedBox.svelte';
	import FlexedArea from '$lib/components/FlexedArea.svelte';
	import Section from '$lib/components/Section.svelte';
	import { dates, time } from '$lib/config/indexPage';
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
		Date: {dates}
	</p>
	<p id="event-date" class="text-center text-2xl font-semibold lg:text-3xl">
		Time: {time}
	</p>

	<Section title="Music" id="music">
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
			<AnimatedBox 
				title="Rap battle"
				button={{
					text: "Register Now",
					href: "https://forms.office.com/r/e55rpGYYii"
				}}
			>
				Many believe that rap is poetry. What can you do with your words? Prompting creativity and delivery at only a moment's 
				notice, the Rap Battle has become a participant favourite at VIVUM.

				<ul class="mt-4 list-inside list-disc">
					<li class="mb-2">No restriction on number of participants per school</li>
					<li class="mb-2">Two participants will be pitted against each other each round</li>
				</ul>
				<p class="mt-3">
					Ingenuity, spontaneity, and passion for rap are core components of this freestyle battle, yet, in true street 
					fashion, there are no set judges: the crowd determines the winners.
				</p>
			</AnimatedBox>
		</FlexedArea>
	</Section>

	<Section title="Dance" id="dance">
		<FlexedArea>
			<AnimatedBox 
				title="Dance Off"
				button={{
					text: "Register Now",
					href: "https://forms.office.com/Pages/ResponsePage.aspx?id=jgbSOiU_hk2ePRxkXvnrgKnoHWCifQ1PoXhIAqDbClxUOVUyUjA4S1QxRE5OSzJYWUVRS0NWODJZUy4u"
				}}
			>
				Get the crowd roaring. Every year, hundreds of students come to watch passionate dancers fight it out in a small circle, 
				as they display their exquisite skills.
	
				<ul class="mt-4 list-inside list-disc">
					<li class="mb-2">
						This competition works on a knock-out basis
					</li>
					<li class="mb-2">
						One team per school, 6 participants max
					</li>
					<li class="mb-2">
						Matched in pairs to dance-off in a crowd-generated circle
					</li>

					Participants have 50 seconds to show off their dance skills as much as they can. The judging criterion is simple: the more hyped the crowd is, the better you score.
					
				</ul>
			</AnimatedBox>
			<AnimatedBox title = "Shake it up" button={{
				text: "Register Now",
				href: "https://forms.office.com/Pages/ResponsePage.aspx?id=jgbSOiU_hk2ePRxkXvnrgKnoHWCifQ1PoXhIAqDbClxUNlBNN0FBUDY2V1ZHTlJJTzE5VTIwVVRORC4u"
			}}>
				
			
				Merge 3 different dance forms! In this new addition to VIVUM’23 dancers get to express their expertise in diverse dance forms (such as salsa, contemporary, classical, hiphop, etc)
				<ul class="mt-4 list-inside list-disc">
					<li class="mb-2">One team consisting of 4 - 8 participants</li>
					<li class="mb-2">Round 1: Shake It Up ( The Tri-dance fusion) - each team gets to pick any 3 songs from any genre to merge 3 different dance forms in 3 mins. If you’re lucky to make it to…
					</li>
					<li class="mb-2">Round 2: the Bollywood Era Switch, you will have to use 3 different eras of bollywood songs, consisting of one song from each range:
						<ol class="ml-4 mt-4 list-inside list-decimal text-center border border-purple-500 bg-[#011f59] rounded-md" >
							<li class="mb-2"> 1980 - 2000</li>
							<li class="mb-2"> 2000 - 2010</li>
							<li class="mb-2">2010 - 2023</li>

						</ol>
					</li>
				</ul>
					
				
			</AnimatedBox>	
		</FlexedArea>
	</Section>
</article>

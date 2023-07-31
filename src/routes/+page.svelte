<script>
	import EventCard from '$lib/components/EventCard.svelte';
	import FlexedArea from '$lib/components/FlexedArea.svelte';
	import ListItem from '$lib/components/ListItem.svelte';
	import OrderedList from '$lib/components/OrderedList.svelte';
	import Group from '$lib/components/Group.svelte';
	import UnorderedList from '$lib/components/UnorderedList.svelte';
	import SponsorPage from '$lib/components/SponsorPage.svelte';
	import Countdown from '$lib/components/Countdown.svelte';

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
	<h2 class="text-4xl text-center font-bold">Rise with the Tide</h2>
	<div class="mb-18" />
	<h4 id="registration" class="text-center text-2xl font-semibold opacity-70">
		To register, please contact your school for more information
	</h4>
	<div class="mb-18" />

	<Countdown />

	<Group title="Music" id="music">
		<FlexedArea>
			<EventCard
				title="Battle of the Bands"
				button={{
					text: 'Register Now',
					href: 'https://forms.office.com/r/mxT6FpdQ55'
				}}
				location="Main Auditorium"
			>
				Bands representing their schools from all over the city will perform songs on stage to get
				the highest score from our judges, who consist of talented and knowledgeable musicians. The
				bands will be judged on their stage presence, crowd participation, fluency and song choice,
				and the winner takes all!

				<UnorderedList>
					<ListItem>Teams consisting of four to eight members</ListItem>
					<ListItem>Bands have 15 minutes, including set-up time, to perform.</ListItem>
					<ListItem>Four teams will advance to our finals</ListItem>
					<ListItem>Teams must play for 10 minutes, excluding set-up time</ListItem>
					<ListItem>
						We will provide a five-piece drum set-up, two guitar amps, one bass amp, one keyboard
						amp, a grand piano, and five mics that can be used.
					</ListItem>
					<ListItem>
						Any additional instruments or accessories needed (such as processors/pedals for
						guitarists or extra cymbals for drummers) must be brought by participants, only after
						prior notice is given to the organizing committee.
					</ListItem>
				</UnorderedList>
			</EventCard>
			<EventCard
				title="Beatbox Battle"
				button={{
					text: 'Register Now',
					href: 'https://forms.office.com/r/CV1zSBs3aj'
				}}
				location="Radio Shack"
			>
				Similar to the rap battle, this event showcases students facing off and flaunting their
				talents, creating the most complex beat possible solely with their mouth to triumph over
				their opponent. The winner will be decided by the cheers of the crowd and the intricacy of
				their sounds.

				<UnorderedList>
					<ListItem>
						Only six teams will be allowed to participate on a first-come-first-serve basis, so
						reserve your spot quickly!
					</ListItem>
				</UnorderedList>
			</EventCard>
			<EventCard
				title="Rap battle"
				button={{
					text: 'Register Now',
					href: 'https://forms.office.com/r/e55rpGYYii'
				}}
				location="Radio Shack"
			>
				Many believe that rap is poetry. What can you do with your words? Prompting creativity and
				delivery at only a moment's notice, the Rap Battle has become a participant favourite at
				VIVUM.

				<UnorderedList>
					<ListItem>No restriction on number of participants per school</ListItem>
					<ListItem>Two participants will be pitted against each other each round</ListItem>
				</UnorderedList>
				<p class="mt-3">
					Ingenuity, spontaneity, and passion for rap are core components of this freestyle battle,
					yet, in true street fashion, there are no set judges: the crowd determines the winners.
				</p>
			</EventCard>
		</FlexedArea>
	</Group>

	<Group title="Dance" id="dance">
		<FlexedArea>
			<EventCard
				title="Dance Off"
				button={{
					text: 'Register Now',
					href: 'https://forms.office.com/Pages/ResponsePage.aspx?id=jgbSOiU_hk2ePRxkXvnrgKnoHWCifQ1PoXhIAqDbClxUOVUyUjA4S1QxRE5OSzJYWUVRS0NWODJZUy4u'
				}}
				location = "Radio Shack"
			>
				Get the crowd roaring. Every year, hundreds of students come to watch passionate dancers
				fight it out in a small circle, as they display their exquisite skills.

				<UnorderedList>
					<ListItem>This competition works on a knock-out basis</ListItem>
					<ListItem>One team per school, 6 participants max</ListItem>
					<ListItem>Matched in pairs to dance-off in a crowd-generated circle</ListItem>

					Participants have 50 seconds to show off their dance skills as much as they can. The
					judging criterion is simple: the more hyped the crowd is, the better you score.
				</UnorderedList>
			</EventCard>
			<EventCard
				title="Shake it up"
				button={{
					text: 'Register Now',
					href: 'https://forms.office.com/Pages/ResponsePage.aspx?id=jgbSOiU_hk2ePRxkXvnrgKnoHWCifQ1PoXhIAqDbClxUNlBNN0FBUDY2V1ZHTlJJTzE5VTIwVVRORC4u'
				}}
				location = "Small Auditorium"
			>
				Merge 3 different dance forms! In this new addition to VIVUM'23 dancers get to express their
				expertise in diverse dance forms (such as salsa, contemporary, classical, hiphop, etc)
				<UnorderedList>
					<ListItem>One team consisting of 4 - 8 participants</ListItem>
					<ListItem
						>Round 1: Shake It Up ( The Tri-dance fusion) - each team gets to pick any 3 songs from
						any genre to merge 3 different dance forms in 3 mins. If you're lucky to make it to...</ListItem
					>
					<ListItem>
						Round 2: the Bollywood Era Switch, you will have to use 3 different eras of bollywood
						songs, consisting of one song from each range:
						<OrderedList>
							<ListItem>1980 - 2000</ListItem>
							<ListItem>2000 - 2010</ListItem>
							<ListItem>2010 - 2023</ListItem>
						</OrderedList>
					</ListItem>
				</UnorderedList>
			</EventCard>
		</FlexedArea>
	</Group>
	<Group title="Drama" id="drama">
		<FlexedArea>
			<EventCard
				title="Stand-up comedy"
				button={{
					text: 'Register Now',
					href: 'https://forms.office.com/r/Vwy9hNdjzz'
				}}
				location = "Amphitheatre"
			>
				So, you think you're funny? Solo comics, it's your time to shine and make your audiences
				laugh with your original sets and witty jokes.

				<UnorderedList>
					<ListItem>Maximum of 2 participants from each school</ListItem>
					<ListItem>Round 1 is a seven-minute set on the topic of 'filter'</ListItem>
					<ListItem>Five participants will advance to the finals.</ListItem>
				</UnorderedList>
			</EventCard>
			<EventCard
				title="Film"
				button={{
					text: 'Register Now',
					href: 'https://forms.office.com/r/VnNQtMaNHb'
				}}
				location = "Small Auditorium"
			>
				Lights, camera, action! In this event, filmmakers get to tell a story and show it to the
				masses.

				<UnorderedList>
					<ListItem
						>Schools can send one team consisting of 4-5 people to participate in this event.</ListItem
					>
					<ListItem>
						Each team will get one of 6 topics:

						<OrderedList>
							<ListItem>Let the trees breathe.</ListItem>
							<ListItem>Helpline!</ListItem>
							<ListItem>The Grass Isn't Always Greener</ListItem>
							<ListItem>Eyes Have A Language of Their Own</ListItem>
							<ListItem>Men don't cry</ListItem>
							<ListItem>I'm fine</ListItem>
						</OrderedList>

						Films can only be shot within the boundaries of the campus.
						Participants have all of to film. Every piece must be original.
					</ListItem>
					<ListItem>Five participants will advance to the finals.</ListItem>
				</UnorderedList>
			</EventCard>
			<EventCard
				title="Lipsync Battle"
				button={{
					text: "Register Now",
					href: "https://forms.office.com/Pages/ResponsePage.aspx?id=jgbSOiU_hk2ePRxkXvnrgAoKTYgiu2FBv46toYfPvNZUQlUyQTZXTzNESkNFR0VFUEk2VlZDWVM1Si4u"
				}}
				location = "Main auditorium"
			>
				In this event, participants will compete against each other in pairs, performing a lip sync to popular songs from a pre-selected list. 
				<br/><br/>
				The audience will judge the performances, and the winners will be chosen based on their overall performance and entertainment value.
			</EventCard>
			<EventCard
				title="Vivum Multiverse"
				button={{
					text: "Register Now",
					href: "https://forms.office.com/Pages/ResponsePage.aspx?id=jgbSOiU_hk2ePRxkXvnrgAoKTYgiu2FBv46toYfPvNZUMlRRTTY1WE00MTBGNFlLOEMyRTdEQUNPNi4u"
				}}
				location = "Main auditorium"
			>
				This event is a role-playing game where the participants act out scenes from famous Bollywood and Hollywood movies. 
				<br/><br/>
				
				Participants will be given chits with a specific character and scene, and they will have to act out the character's actions and dialogue in a humorous and entertaining way.	

				<UnorderedList>
					<ListItem>Maximum of 2 participants from each school</ListItem>
					<ListItem>Round 1 is a seven-minute set on the topic of 'filter'</ListItem>
					<ListItem>Five participants will advance to the finals.</ListItem>
				</UnorderedList>

				They will have the chance to deliver a 10-minute set on a topic of their choice. All content must be PG- 13.
			</EventCard>
		</FlexedArea>
	</Group>
	<Group title="Fashion" id="fashion">
		<FlexedArea>
			<EventCard
				title="Fashion Show"
				button={{
					text: "Register Now",
					href: "https://forms.office.com/Pages/ResponsePage.aspx?id=jgbSOiU_hk2ePRxkXvnrgAoKTYgiu2FBv46toYfPvNZURUs5SkdJTVQ3T0RDVlRZQU01Uk4xRFkxVS4u"
				}}
				location = "Main auditorium"
			>
				This event features students showing off their creative fashion sense on the runway. 
				<br/><br/>

				Participants will design and model their own outfits, and a panel of judges will choose the winners based on their originality and creativity.

				<UnorderedList>
					<ListItem>Each school can send two pairs</ListItem>
					<ListItem>30 participants will walk in pairs</ListItem>
					<ListItem>Judges will decide on one of these two looks.</ListItem>
					<ListItem>25 people will progress to the next round, and put into groups of 5, with 2 winning.</ListItem>
					<ListItem>Round 3 will have 10 people left, describing their outfit, the relevance to the theme, and their inspiration</ListItem>
				</UnorderedList>
			</EventCard>
		</FlexedArea>
	</Group>
	<Group title="Media" id="media">
		<FlexedArea>
			<EventCard
				title="Jaws Out"
				button={{
					text: "Register Now",
					href: "https://forms.office.com/Pages/ResponsePage.aspx?id=jgbSOiU_hk2ePRxkXvnrgAoKTYgiu2FBv46toYfPvNZUMVYyQzhYMVBQMEFOTEs0NUY0SDFZV1gyWC4u"
				}}
				location = "Main auditorium"
			>
				This event is a social media-based competition where participants leave funny comments on celebrity posts anonymously. The winner will be chosen based on the number of likes they receive. 

				<br/><br/>

				The event also features a designated "wet zone" where people can throw around water for fun.
			</EventCard>
		</FlexedArea>
	</Group>
	<Group title="Other" id="other">
		<FlexedArea>
			<EventCard
				title="Shark Tank With A Twist"
				button={{
					text: "Register Now",
					href: "https://forms.office.com/Pages/ResponsePage.aspx?id=jgbSOiU_hk2ePRxkXvnrgAoKTYgiu2FBv46toYfPvNZURjNYS0M4SE1NRDc3VlA0VVlMOFE1NzRLSC4u"
				}}
				location = "Main auditorium"
			>
			This event puts a humorous spin on the popular TV show Shark Tank. 

			<br/><br/>

			Participants will pitch their useless and absurd ideas to a group of judges and the audience.
			
			<br /><br />
			
			The group with the most unique and entertaining idea, as determined by the judges and audience votes, will be declared the winner.
			</EventCard>
			<EventCard
				title="Wonder Woman/Iron man challenge"
				button={{
					text: "On-spot registration only",
					href: "#",
					disabled: true
				}}
				location = "Main auditorium"
			>
				Test your physical limits and push your body further than you thought possible in this intense, all-out test of physical prowess.

				<br/><br/>
				From group events to IVI, this mini-event tests participants' physical strength and willpower. Participants will exercise until they can't handle it anymore or until they drop down with exhaustion.

			</EventCard>	
			<EventCard
				title="Canvas Painting"
				button={{
					text: "On-spot registration only",
					href: "#",
					disabled: true
				}}
				location = "Near Game Stalls"
			>
				Participants will work together to create a large canvas painting during the event, adding their unique touch to a masterpiece in the making.

				<br/><br/>
			</EventCard>
			<EventCard
				title="Paparazzi"
				button={{
					text: "On-spot registration only",
					href: "#",
					disabled: true
				}}
				location = "Near Game Stalls"
			>
				Pose for the camera!

				<br/><br/>

				A designated photographer will be walking around VIVUM'23 to capture the best moments. 
				
				<br/><br/>

				We want to see the best poses you can come up with when suddenly faced with the camera. 

				<br /><br/>

				<em>Location: Near game stalls</em>
			</EventCard>	
			<EventCard
				title="Shark Scanveger Hunt"
				button={{
					text: "On-spot registration only",
					href: "#",
					disabled: true
				}}
				location = "Near Game Stalls"
			>
				Participants will search for sharks hidden throughout the school, and those who find them will receive rewards such as coupons or raffle tickets.
			</EventCard>						
		</FlexedArea>
	</Group>

	<hr />

	<h2 class="text-4xl font-bold mb-3 m-4">Our sponsors</h2>
	<h3 class="ml-4 text-2xl font-semibold">
		Thank you to all of our sponsors who have made VIVUM 2023 possible!
	</h3>	
	<SponsorPage />
</article>

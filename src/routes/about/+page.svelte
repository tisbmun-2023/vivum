<script>
	import Link from '$lib/components/Link.svelte';
	import { dates } from '$lib/config/indexPage';
</script>

<article class="m-4 px-2">
	<h3 class="text-center text-6xl font-semibold lg:text-9xl">
		VIVUM 2023
	</h3>
	<h2 class="text-4xl text-center font-bold">VIVUM is a home for Bangalore's students to showcase their unique talents.</h2>
	<hr class="my-5" />

	<p class="mb-5 text-2xl font-bold">
		Rooted in Latin, VIVUM means to live. It is a celebration of sports, academics, and the arts,
		hosted annually by The International School Bangalore. Through the myriad of events in store for
		participants at VIVUM '23, every student will find something that caters to their passions.
	</p>
	<h2 class="text-3xl font-semibold">What we are!</h2>
	<ul class="mb-5 list-inside list-disc">
		<li>To Athletes: It is the city's premier</li>
		<li>To Artists: It is one of India's most vibrant student-run cultural fests.</li>
		<li>To Students: It is a once in a lifetime opportunity</li>
	</ul>
	<h2 class="text-3xl font-bold">Student Lead</h2>
	<p class="mb-5">
		VIVUM is a wholly student-run charitable initiative which aims to empower, encourage, and
		motivate students from diverse backgrounds to push the envelope and discover something entirely
		unique across all the interdisciplinary events on offer. Join us for a two-day inter-school fest
		celebrating achievements in the classroom, on stage, and on the field, in the true spirit of
		VIVUM '23.
	</p>
	<h2 class="text-3xl font-bold">Whats On Offer?</h2>
	<p class="mb-5">
		We have several events available right now. 
		<br/>
		<br/>
		Please see <Link href="/">Events</Link>
		for more information on whats cooking and how to register!
	</p>
	<hr class="mb-3 mt-3" />
	<h2 class="text-3xl font-semibold">Save The Date!</h2>
	<p class="mb-5">
		Vivum takes place on <em>{dates}</em>, so be sure to add it to your calendar NOW. You don't want
		to miss all the events that are on store for this year!
	</p>

	<hr class="mb-3 mt-3" />

	<h2 class="text-3xl font-semibold">About TISB</h2>
	<p class="mb-5">
		The International School Bangalore (TISB) was one of the first IB boarding schools in the
		country and has quickly risen in prestige, claiming a seat as one of the top five international
		schools in the world (The Good Schools Guide, UK). As an international school, TISB stimulates
		intercultural relations and provides a platform for its students to become global citizens. TISB
		is the home of some of the best faculty in the nation, and their guidance has helped create a
		melting pot, where academic excellence meets character development. In short, a holistic
		approach to education and life is what TISB stands for. TISB's multiple facilities provide
		endless opportunities for the expression of any skill a student may wish to explore.
	</p>

	<h2 class="text-3xl">Credits</h2>
	<p class="mb-5">
		This site was made by
			<Link href="https://github.com/cheesycod">
				<strong>cheesycod</strong>
			</Link> and
			<Link href="https://github.com/SpectreZ7">SpectreZ7</Link>
		of the VIVUM 2023 team!
	</p>
</article>

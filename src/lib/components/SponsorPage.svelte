<script lang="ts">
	import FlexedArea from "./FlexedArea.svelte";
	import Group from "./Group.svelte";
	import Sponsor from "./Sponsor.svelte";


</script>

<h3 class="text-md ml-4">
	We would like to thank all of our sponsors who have made VIVUM 2023 possible!
</h3>

<article>
	<Group title="Platinum Sponsors" id="platinum-sponsor">
		<FlexedArea>
			<Sponsor id="thebodyshop" name="The Body Shop" href="https://www.thebodyshop.in" />
			<Sponsor id="thirdwavecofee" name="Third Wave Coffee" href="https://www.thirdwavecoffeeroasters.com" />
			<Sponsor id="nivia" name="Nivia" href="https://www.niviasports.com" />
		</FlexedArea>
	</Group>
	<Group title="Gold Sponsors" id="gold-sponsor">
		<FlexedArea>
			<Sponsor id="dclp" name="DCLP" href="" />
		</FlexedArea>
	</Group>
</article>

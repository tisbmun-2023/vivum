<script lang="ts">
	import FlexedArea from "./FlexedArea.svelte";
	import Group from "./Group.svelte";
	import Sponsor from "./Sponsor.svelte";


</script>

<article>
	<Group title="Platinum Sponsors" id="platinum-sponsor">
		<FlexedArea>
			<Sponsor id="thebodyshop" name="The Body Shop" href="https://www.thebodyshop.in/" />
			<Sponsor id="thirdwavecofee" name="Third Wave Coffee" href="https://www.thirdwavecoffeeroasters.com/" />
			<Sponsor id="nivia" name="Nivia" href="https://www.niviasports.com/" />
		</FlexedArea>
	</Group>
	<Group title="Gold Sponsors" id="gold-sponsor">
		<FlexedArea>
			<Sponsor id="ion" name="I-ON" href="" />
			<Sponsor id="shingora" name="Shingora" href="https://shingora.net/" allowBlack={true} />
			<Sponsor id="champions-group" name="Champions Group" href="https://www.championsgroup.com/" />
			<Sponsor id="rawpressery" name="Raw Pressery" href="https://www.rawpressery.com/" />
			<Sponsor id="dailyhunt" name="DailyHunt" href="https://m.dailyhunt.in/" />
		</FlexedArea>	
	</Group>
	<Group title="Silver Sponsors" id="silver-sponsor">
		<FlexedArea>
			<Sponsor id="kangaro" name="Kangaro" href="https://kangarokgoc.com/" />
			<Sponsor id="impelsys" name="Impelsys" href="https://www.impelsys.com/" />
			<Sponsor id="rajsuperwhite" name="Raj Super White" href="http://www.rajsuperwhite.com/" />
			<Sponsor id="redrhino" name="Red Rhino" href="https://redrhino.co.in/" />

		</FlexedArea>
	</Group>
</article>

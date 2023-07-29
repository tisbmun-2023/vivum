<script lang="ts">
	import FlexedArea from "./FlexedArea.svelte";
	import Group from "./Group.svelte";
	import Sponsor from "./Sponsor.svelte";


</script>

<h3 class="ml-4 text-2xl font-semibold">
	Thank you to all of our sponsors who have made VIVUM 2023 possible!
</h3>

<article>
	<Group title="Platinum Sponsors" id="platinum-sponsor">
		<FlexedArea>
			<Sponsor id="thebodyshop" name="The Body Shop" href="https://www.thebodyshop.in/?referrer=vivum" />
			<Sponsor id="thirdwavecofee" name="Third Wave Coffee" href="https://www.thirdwavecoffeeroasters.com/?referrer=vivum" />
			<Sponsor id="nivia" name="Nivia" href="https://www.niviasports.com/?referrer=vivum" />
		</FlexedArea>
	</Group>
	<Group title="Gold Sponsors" id="gold-sponsor">
		<FlexedArea>
			<Sponsor id="dclp" name="DCLP" href="" />
			<Sponsor id="shingora" name="Shingora" href="https://shingora.net/?referrer=vivum" allowBlack={true} />
			<Sponsor id="champions-group" name="Champions Group" href="https://www.championsgroup.com/" />
		</FlexedArea>	
	</Group>
	<Group title="Silver Sponsors" id="silver-sponsor">
		<FlexedArea>
			<Sponsor id="kangaro" name="Kangaro" href="https://kangarokgoc.com/" />
			<Sponsor id="implesys" name="Implesys" href="https://www.implesys.com/" /> <!--Placeholder-->
			<Sponsor id="bhashyamgroup" name="Bhashyam Group" href="https://www.bhashyam.in//" /> <!--Placeholder-->
			<Sponsor id="rajsuperwhite" name="Raj Super White" href="http://www.rajsuperwhite.com/" />
			<Sponsor id="redrhino" name="Redrhino" href="https://redrhino.co.in/" />

		</FlexedArea>
	</Group>
</article>

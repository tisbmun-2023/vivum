<script lang="ts">
	export let id: string;
    export let name: string;
    export let href: string;
</script>

<a href={href} class="sponsor card mb-5 mr-3 rounded-lg border border-purple-500 p-6 shadow dark:border-purple-500 w-[18rem] bg-[#100159]" id={id}>
    <div class="text-center">
        <img src={`/sponsors/${id}.png`} alt={name} class="bg-white w-[5rem] h-[5rem] object-contain rounded-[50%] m-auto" />
        <h4 class="text-xl text-center mt-2"><strong>{name}</strong></h4>    
    </div>
</a>

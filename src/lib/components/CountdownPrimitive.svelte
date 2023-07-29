<script lang="ts">
    export let type: string;
    export let value: string | number;
</script>

<section class="countdown-primitive w-[7rem] mt-3 rounded-sm border border-purple-500 p-6 shadow dark:border-purple-500 bg-[#100159]">
    <div class="text-center m-auto">
        <p class="text-4xl">{value}</p>
        <p class="m-auto">{type}</p>    
    </div>
</section>
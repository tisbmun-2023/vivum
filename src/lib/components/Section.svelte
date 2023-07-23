<script lang="ts">
    export let title: string;
</script>

<fieldset class="section text-purple-500 p-2 m-auto">
    <legend class="text-2xl font-bold p-3">{title}</legend>
    <div class="content">
        <slot />
    </div>
</fieldset>

<style>
    .section {
        display: grid; 
    }

    fieldset {
        border: 10px solid transparent; 
        border-color: rgb(168 85 247 / var(--tw-text-opacity));;
        box-sizing: border-box; 
        grid-area: 1 / 1; /* first row, first column */
        padding: 20px; 
        width: inherit; 
    }

</style>
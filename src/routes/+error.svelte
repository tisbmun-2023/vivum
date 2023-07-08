<script>
    import { page } from '$app/stores';
</script>

<h1 class="text-3xl font-semibold">{$page.status}: {$page?.error?.message}</h1>
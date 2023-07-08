<script lang="ts">
    export let href: string;
</script>

<a href="{href}">
    <slot></slot>
</a>

<style>
a {
    color: #0eff02;
    text-decoration: none;
    background-color: transparent;
}

a:hover {
    color: #28c946;
    text-decoration: underline;
}
</style>
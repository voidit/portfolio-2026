<script lang="ts">
    import { onMount } from 'svelte';
    import p5 from 'p5';

    export let script: (p: p5) => void;
    let container: HTMLElement;

    onMount(() => {
        // Attach the p5 sketch to the container div
        new p5(script, container);
    });
</script>

<div bind:this={container} class="w-full h-96 border rounded-lg overflow-hidden">
</div>
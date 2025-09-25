<script lang="ts">
    import { onMount } from 'svelte';
    import * as d3 from 'd3';

    export let data: number[] = [4, 8, 15, 16, 23, 42];
    let container: HTMLElement;

    onMount(() => {
        const svg = d3.select(container)
            .append('svg')
            .attr('width', '100%')
            .attr('height', 200);

        svg.selectAll('rect')
            .data(data)
            .enter()
            .append('rect')
            .attr('x', (d, i) => i * 45)
            .attr('y', d => 200 - d * 4)
            .attr('width', 40)
            .attr('height', d => d * 4)
            .attr('fill', 'teal');
    });
</script>

<div bind:this={container} class="w-full border rounded-lg p-4">
</div>
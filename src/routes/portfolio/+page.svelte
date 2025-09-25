<script lang="ts">
    import ProjectCard from '$lib/components/ProjectCard.svelte';
    export let data; // Data comes from +page.server.js (or your data source)
</script>

<div class="container mx-auto px-4 py-12">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each data.latestProjects as project}
            <ProjectCard {project} />
        {/each}
    </div>
</div>
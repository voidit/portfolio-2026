<script lang="ts">
    import FeaturedSlider from '$lib/components/FeaturedSlider.svelte';
    import ProjectCard from '$lib/components/ProjectCard.svelte';
    import type { PageData } from './$types';

    export let data: PageData;

    const { featuredProjects, latestProjects } = data;
</script>

<div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4">Portfolio</h1>

    {#if featuredProjects.length > 0}
        <section class="mb-8">
            <h2 class="text-2xl font-bold mb-4">Featured Projects</h2>
            <FeaturedSlider projects={featuredProjects} />
        </section>
    {/if}

    <section>
        <h2 class="text-2xl font-bold mb-4">Latest Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {#each latestProjects as project}
                <ProjectCard {project} />
            {/each}
        </div>
    </section>
</div>
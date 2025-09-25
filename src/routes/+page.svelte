<script lang="ts">
    import FeaturedSlider from '$lib/components/FeaturedSlider.svelte';
    import ProjectCard from '$lib/components/ProjectCard.svelte';
    import type { PageData } from './$types';

    export let data: PageData;

    // The data now comes from the new +page.server.js
    const { featuredProjects, latestProjects } = data;
</script>

<div class="container mx-auto p-4">
    <div class="text-center p-10">
        <h1 class="text-4xl font-bold">Welcome to My Portfolio</h1>
        <p class="mt-4">Explore my featured and latest work below.</p>
    </div>

    {#if featuredProjects && featuredProjects.length > 0}
        <section class="mb-12">
            <h2 class="text-2xl font-bold mb-4 text-center">Featured Projects</h2>
            <FeaturedSlider projects={featuredProjects} />
        </section>
    {/if}

    <section>
        <h2 class="text-2xl font-bold mb-4 text-center">Latest Projects</h2>
        {#if latestProjects && latestProjects.length > 0}
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {#each latestProjects as project}
                    <ProjectCard {project} />
                {/each}
            </div>
        {:else}
            <p class="text-center text-gray-500">No recent projects to display.</p>
        {/if}
    </section>
</div>
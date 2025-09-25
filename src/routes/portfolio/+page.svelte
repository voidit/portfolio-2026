<script lang="ts">
    import type { PageData } from './$types';
    export let data: PageData;
    const { project, caseStudies } = data;
</script>

<div class="container mx-auto p-8">
    <h1 class="text-4xl font-bold">{project.projectName}</h1>
    <p class="text-gray-500">{project.date} - {project.client}</p>

    <div class="mt-8">
        <h2 class="text-2xl font-bold">Project Overview</h2>
        <p>{project.overview}</p>
    </div>

    <div class="mt-8">
        <h2 class="text-2xl font-bold">Tools Used</h2>
        <p>{project.tools}</p>
    </div>

    {#if caseStudies.length > 0}
        <div class="mt-12">
            <h2 class="text-3xl font-bold">Case Studies</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                {#each caseStudies as study}
                    <div class="border p-4 rounded-lg">
                        <h3 class="text-xl font-bold">{study.caseStudyName}</h3>
                        <p>{study.overview}</p>
                    </div>
                {/each}
            </div>
        </div>
    {/if}
</div>
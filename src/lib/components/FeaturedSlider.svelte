<script lang="ts">
    import type { Project } from '$lib/types';

    export let projects: Project[];
    let current = 0;

    function next() {
        current = (current + 1) % projects.length;
    }

    function prev() {
        current = (current - 1 + projects.length) % projects.length;
    }
</script>

<div class="relative">
    <div class="overflow-hidden">
        <div class="flex transition-transform duration-500" style="transform: translateX(-{current * 100}%)">
            {#each projects as project (project.slug)}
                <div class="w-full flex-shrink-0">
                    <a href={`/portfolio/${project.slug}`} class="block p-4 bg-gray-200">
                        <h3 class="text-2xl font-bold">{project.projectName}</h3>
                        <p>{project.overview}</p>
                    </a>
                </div>
            {/each}
        </div>
    </div>

    <button on:click={prev} class="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
        &#10094;
    </button>
    <button on:click={next} class="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
        &#10095;
    </button>
</div>
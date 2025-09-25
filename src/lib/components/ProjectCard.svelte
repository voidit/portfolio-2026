<script lang="ts">
    import type { Project } from '$lib/types';
    export let project: Project;
</script>

<a href={`/portfolio/${project.slug}`} class="block border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
    <div class="p-4">
        <h3 class="text-xl font-bold">{project.projectName}</h3>
        <p class="text-gray-600">{project.date}</p>
        <p class="mt-2">{project.overview}</p>
    </div>
</a>
<script lang="ts">
    import type { Project } from '$lib/types';
    export let project: Project;
</script>

<a href={`/portfolio/${project.slug}`} class="group block">
    <div class="overflow-hidden rounded-lg mb-4">
        <img
                src={project.imageUrl || 'https://via.placeholder.com/600x400'}
                alt={project.projectName}
                class="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
    </div>
    <h3 class="text-xl font-serif font-bold text-gray-900">{project.projectName}</h3>
    <p class="text-gray-600">{project.client || ''}</p>
</a>
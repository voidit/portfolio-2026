// src/lib/components/ProjectCard.svelte
<script lang="ts">
    import type { Post } from '$lib/types';
    import { base } from '$app/paths'; // Import base
    export let project: Post;
</script>

<a href="{base}/portfolio/{project.slug}" class="group relative block overflow-hidden">
    <img
            src={project.imageUrl || 'https://via.placeholder.com/600x800'}
            alt={project.title}
            class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
    />
    <div
            class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center
           opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"
    >
        <h3 class="text-white text-2xl font-serif">{project.title}</h3>
    </div>
</a>
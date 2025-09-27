// src/lib/components/FeaturedSlider.svelte
<script lang="ts">
    import { Carousel } from 'flowbite-svelte';
    import type { Post } from '$lib/types';
    import { base } from '$app/paths'; // Import base
    export let projects: Post[];

    const items = projects.map((p, i) => ({
        id: i.toString(),
        title: p.title,
        img: {
            src: p.imageUrl || `https://flowbite.s3.amazonaws.com/docs/gallery/featured/image-0${i + 1}.jpg`,
            alt: p.title
        },
        href: `${base}/portfolio/${p.slug}` // Add base here
    }));
</script>

<Carousel images={items} class="rounded-lg" />
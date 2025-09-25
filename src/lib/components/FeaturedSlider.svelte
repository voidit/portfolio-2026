<script lang="ts">
    import { Carousel } from 'flowbite-svelte';
    import type { Project } from '$lib/types';

    export let projects: Project[];

    // We need to format the data for the Carousel component
    const items = projects.map((p, i) => ({
        id: i.toString(),
        title: p.projectName,
        img: {
            // You'll need to add an 'imageUrl' column to your Google Sheet
            src: p.imageUrl || `https://flowbite.s3.amazonaws.com/docs/gallery/featured/image-0${i + 1}.jpg`,
            alt: p.projectName,
        },
        href: `/portfolio/${p.slug}`
    }));
</script>

<Carousel images={items} class="rounded-lg" />
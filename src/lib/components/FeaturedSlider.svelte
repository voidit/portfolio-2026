// src/lib/components/FeaturedSlider.svelte
<script lang="ts">
    import { Carousel } from 'flowbite-svelte';
    import type { Post } from '$lib/types'; // Changed from Project to Post
    export let projects: Post[]; // Changed from Project to Post

    // We need to format the data for the Carousel component
    const items = projects.map((p, i) => ({
        id: i.toString(),
        title: p.title, // Changed from p.projectName to p.title
        img: {
            // You'll need to add an 'imageUrl' column to your Google Sheet
            src: p.imageUrl || `https://flowbite.s3.amazonaws.com/docs/gallery/featured/image-0${i + 1}.jpg`,
            alt: p.title, // Changed from p.projectName to p.title
        },
        href: `/portfolio/${p.slug}`
    }));
</script>

<Carousel images={items} class="rounded-lg" />
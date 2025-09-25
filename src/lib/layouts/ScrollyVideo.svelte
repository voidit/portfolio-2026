<script lang="ts">
    import { onMount } from 'svelte';
    import ScrollyVideo from 'scrolly-video/dist/ScrollyVideo.svelte';

    export let src: string; // URL to the video
</script>

<div class="relative h-[300vh] w-full">
    <div class="sticky top-0 h-screen w-full overflow-hidden">
        <ScrollyVideo {src} />
    </div>
</div>
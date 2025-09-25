<script lang="ts">
    export let src: string; // The embed URL
    export let title: string = 'Embedded Media';
</script>

<div class="relative w-full overflow-hidden" style="padding-top: 56.25%;">
    <iframe
            {src}
            {title}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            class="absolute top-0 left-0 w-full h-full"
    />
</div>
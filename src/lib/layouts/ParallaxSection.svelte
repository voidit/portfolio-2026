<script lang="ts">
    export let imageUrl: string;
</script>

<div
        class="min-h-[50vh] bg-cover bg-fixed bg-center flex items-center justify-center"
        style="background-image: url({imageUrl});"
>
    <div class="bg-black bg-opacity-50 p-8 rounded-lg">
        <slot />
    </div>
</div>
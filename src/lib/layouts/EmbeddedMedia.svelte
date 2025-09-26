<script lang="ts">
    /**
     * The full HTML embed code from a trusted service like YouTube or Vimeo.
     * WARNING: Svelte does not sanitize this code.
     * Only use embed codes from sources you trust to avoid security risks.
     */
    export let embedCode: string;
</script>

<div class="embed-container relative w-full overflow-hidden" style="padding-top: 56.25%;">
    {@html embedCode}
</div>

<style>
    /*
      The :global() modifier allows us to style the raw iframe tag
      that gets injected by the {@html} directive above.
    */
    .embed-container :global(iframe) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 0;
    }
</style>
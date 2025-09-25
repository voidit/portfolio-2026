<script lang="ts">
    import ContactForm from './ContactForm.svelte';
    let showContactForm = false;
</script>

<footer class="bg-gray-800 text-white p-4 text-center mt-auto">
    <p>your.email@example.com | 555-555-5555</p>
    <div class="py-2">
        <a href="#" class="px-2 hover:text-gray-400">Twitter</a>
        <a href="#" class="px-2 hover:text-gray-400">LinkedIn</a>
        <a href="#" class="px-2 hover:text-gray-400">GitHub</a>
    </div>
    <button
            on:click={() => (showContactForm = true)}
            class="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
        Contact Me
    </button>
</footer>

{#if showContactForm}
    <div
            class="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
            on:click|self={() => (showContactForm = false)}
    >
        <ContactForm on:close={() => (showContactForm = false)} />
    </div>
{/if}

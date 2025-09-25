<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
</script>

<div class="bg-white p-8 rounded-lg shadow-xl text-black relative">
    <button
            on:click={() => dispatch('close')}
            class="absolute top-2 right-2 text-2xl font-bold">&times;</button
    >
    <h2 class="text-2xl font-bold mb-4">Contact Me</h2>
    <form>
        <div class="mb-4">
            <label for="email" class="block text-gray-700">Your Email</label>
            <input
                    type="email"
                    id="email"
                    class="w-full mt-1 p-2 border border-gray-300 rounded-md"
            />
        </div>
        <div class="mb-4">
            <label for="message" class="block text-gray-700">Message</label>
            <textarea
                    id="message"
                    rows="4"
                    class="w-full mt-1 p-2 border border-gray-300 rounded-md"
            />
        </div>
        <div class="mb-4">
            <label class="inline-flex items-center">
                <input type="checkbox" class="form-checkbox" />
                <span class="ml-2 text-gray-700">Subscribe to the mailing list</span>
            </label>
        </div>
        <button
                type="submit"
                class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
            Send
        </button>
    </form>
</div>
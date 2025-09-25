<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	// We have removed onMount and initFlowbite as they are not needed
	// for flowbite-svelte components and can cause conflicts.
</script>

<div class="flex flex-col min-h-screen bg-gray-50 text-gray-800">
	<Header />

	<main class="flex-grow">
		<slot />
	</main>

	<Footer />
</div>
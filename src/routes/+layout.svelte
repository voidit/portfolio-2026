<script lang="ts">
	// This line links your stylesheet to every page
	import '../app.css';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="flex flex-col min-h-screen bg-white text-gray-800 font-sans">
	<Header />
	<main class="flex-grow">
		<slot />
	</main>
	<Footer />
</div>
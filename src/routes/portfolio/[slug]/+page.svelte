<script lang="ts">
    import { User, Calendar, Wrench } from 'lucide-svelte';
    import { base } from '$app/paths'; // Import base
    export let data;
    const { post, caseStudies } = data;
</script>

<div class="container mx-auto px-4 py-16 max-w-4xl">
    {#if post.postType === 'project'}
        {#if caseStudies && caseStudies.length > 0}
            <div class="mt-24">
                <h2 class="text-4xl font-serif font-bold text-center mb-12">Related Case Studies</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {#each caseStudies as study}
                        <a href="{base}/portfolio/{study.slug}" class="block border border-gray-200 p-6 rounded-lg hover:shadow-lg">
                            <h3 class="text-2xl font-serif font-bold">{study.title}</h3>
                            <p class="mt-2 text-gray-600">{@html study.content1}</p>
                        </a>
                    {/each}
                </div>
            </div>
        {/if}
    {/if}
</div>
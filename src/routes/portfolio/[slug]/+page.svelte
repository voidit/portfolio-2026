<script lang="ts">
    import { User, Calendar, Wrench } from 'lucide-svelte';
    export let data;
    // The data is now more generic
    const { post, caseStudies } = data;
</script>

<div class="container mx-auto px-4 py-16 max-w-4xl">
    {#if post.postType === 'project'}
        <div class="text-center mb-12">
            <h1 class="text-5xl md:text-7xl font-serif font-bold text-gray-900">{post.title}</h1>
        </div>

        <div class="flex flex-wrap justify-center gap-x-8 gap-y-4 text-gray-600 mb-12">
            <div class="flex items-center space-x-2">
                <User size={18} />
                <span>{post.content1 || 'Personal Project'}</span>
            </div>
            <div class="flex items-center space-x-2">
                <Calendar size={18} />
                <span>{new Date(post.date).getFullYear()}</span>
            </div>
            {#if post.tags}
                <div class="flex items-center space-x-2">
                    <Wrench size={18} />
                    <span>{post.tags}</span>
                </div>
            {/if}
        </div>

        <div class="prose lg:prose-xl mx-auto">
            {@html post.content2}
        </div>

        {#if caseStudies && caseStudies.length > 0}
            <div class="mt-24">
                <h2 class="text-4xl font-serif font-bold text-center mb-12">Related Case Studies</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {#each caseStudies as study}
                        <a href={`/portfolio/${study.slug}`} class="block border border-gray-200 p-6 rounded-lg hover:shadow-lg">
                            <h3 class="text-2xl font-serif font-bold">{study.title}</h3>
                            <p class="mt-2 text-gray-600">{@html study.content1}</p>
                        </a>
                    {/each}
                </div>
            </div>
        {/if}

    {:else if post.postType === 'case-study'}
        <div class="text-center mb-12">
            <h1 class="text-5xl md:text-7xl font-serif font-bold text-gray-900">{post.title}</h1>
            <p class="text-gray-500 mt-2">Case Study</p>
        </div>

        <div class="prose lg:prose-xl mx-auto">
            {@html post.content1}
        </div>

        {#if post.beforeImageUrl && post.afterImageUrl}
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div>
                    <h3 class="text-2xl font-serif text-center mb-4">Before</h3>
                    <img src={`https://drive.google.com/uc?id=${post.beforeImageUrl}`} alt="Before" class="rounded-lg shadow-md" />
                </div>
                <div>
                    <h3 class="text-2xl font-serif text-center mb-4">After</h3>
                    <img src={`https://drive.google.com/uc?id=${post.afterImageUrl}`} alt="After" class="rounded-lg shadow-md" />
                </div>
            </div>
        {/if}
    {/if}
</div>
// Import the 'error' function correctly from '@sveltejs/kit'
import { error } from '@sveltejs/kit';
import { getContent } from '$lib/server/database';
import type { Post } from '$lib/types';

export const prerender = true;

/** @type {import('./$types').EntryGenerator} */
export async function entries() {
    const allContent = await getContent(fetch);
    const items = allContent.filter(
        (post) => post.postType === 'project' || post.postType === 'case-study'
    );
    return items.map((item) => ({ slug: item.slug }));
}

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, fetch }) {
    const { slug } = params;
    const allContent = await getContent(fetch);

    const post = allContent.find((p) => p.slug === slug);

    if (!post) {
        // Now the 'error' function can be used correctly
        throw error(404, 'Item not found');
    }

    let caseStudies: Post[] = [];
    if (post.postType === 'project') {
        caseStudies = allContent.filter(
            (p) => p.postType === 'case-study' && p.caseStudyFor === post.id
        );
    }

    return {
        post,
        caseStudies,
    };
}
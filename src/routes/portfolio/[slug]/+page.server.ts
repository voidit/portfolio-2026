import { getContent } from '$lib/server/database';
import { error } from '@sveltejs/kit';
import type { Post } from '$lib/types';

export const prerender = true;

// This function tells SvelteKit which pages to generate for this dynamic route
/** @type {import('./$types').EntryGenerator} */
export async function entries() {
    const allContent = await getContent(fetch);
    const projects = allContent.filter((post) => post.postType === 'project');
    return projects.map((project) => ({ slug: project.slug }));
}

// This function loads the data for a single project
/** @type {import('./$types').PageServerLoad} */
export async function load({ params, fetch }) {
    const { slug } = params;
    const allContent = await getContent(fetch);

    const project = allContent.find((post) => post.slug === slug && post.postType === 'project');

    if (!project) {
        throw error(404, 'Project not found');
    }

    // Find any case studies that belong to this project
    const caseStudies = allContent.filter(
        (post) => post.postType === 'case-study' && post.caseStudyFor === project.id
    );

    return {
        project,
        caseStudies,
    };
}
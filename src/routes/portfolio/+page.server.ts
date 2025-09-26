import { getContent } from '$lib/server/database';
import type { Post } from '$lib/types';

// This tells SvelteKit to pre-render this page at build time.
export const prerender = true;

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
    // Use the event.fetch provided by SvelteKit.
    const allContent: Post[] = await getContent(fetch);

    // Filter for 'project' posts.
    const allProjects = allContent.filter((post) => post.postType === 'project');

    // Sort the projects by date, newest first.
    const sortedProjects = allProjects.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    // Return the complete list of projects.
    return {
        latestProjects: sortedProjects,
    };
}
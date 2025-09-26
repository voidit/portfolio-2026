import { getContent } from '$lib/server/database';
import type { Post } from '$lib/types';

// This tells SvelteKit to pre-render this page at build time.
export const prerender = true;

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	// Use the event.fetch provided by SvelteKit and pass it to our database function.
	const allContent: Post[] = await getContent(fetch);

	// Filter the content to get only the items marked as 'project'.
	const allProjects = allContent.filter((post) => post.postType === 'project');

	// Sort all projects by date, with the newest ones first.
	const sortedProjects = allProjects.sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
	);

	// Create a list of featured projects from the sorted list.
	const featuredProjects = sortedProjects.filter((project) => project.isFeatured);

	// Return the featured projects and the latest projects for the page to use.
	return {
		featuredProjects,
		latestProjects: sortedProjects,
	};
}
import Papa from 'papaparse';
import type { Project } from '$lib/types';
export const prerender = true;

const PROJECTS_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTL9ADcfbcaxjsw03oJXaaORuG_1HAinhnbWNSNlvvgQm9CU8B8mvcU-jS9wwek4etGmp8bJ4Mb4v9U/pubhtml?gid=0&single=true';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	try {
		const response = await fetch(PROJECTS_URL);
		if (!response.ok) {
			throw new Error(`Failed to fetch CSV: ${response.statusText}`);
		}
		const csvText = await response.text();

		const parsed = Papa.parse(csvText, {
			header: true,
			dynamicTyping: true,
		});

		const allProjects: Project[] = (parsed.data as any[])
			.filter(p => p && p.slug)
			.map(p => ({
				...p,
				isFeatured: String(p.isFeatured).toUpperCase() === 'TRUE',
			}));

		const featuredProjects = allProjects.filter(p => p.isFeatured);

		const latestProjects = allProjects
			.filter(p => !p.isFeatured)
			.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
			.slice(0, 10);

		return {
			featuredProjects,
			latestProjects,
		};
	} catch (error) {
		console.error('Error loading homepage data:', error);
		return {
			featuredProjects: [],
			latestProjects: [],
		};
	}
}
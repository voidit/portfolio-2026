import Papa from 'papaparse';
import type { Project } from '$lib/types'; // Import the Project type

const PROJECTS_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTL9ADcfbcaxjsw03oJXaaORuG_1HAinhnbWNSNlvvgQm9CU8B8mvcU-jS9wwek4etGmp8bJ4Mb4v9U/pubhtml?gid=0&single=true';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
    const response = await fetch(PROJECTS_URL);
    const csvText = await response.text();

    // Parse the CSV text
    const parsed = Papa.parse(csvText, {
        header: true,
        dynamicTyping: true,
    });

    // Cast the parsed data to our Project[] type and clean it up
    const allProjects: Project[] = (parsed.data as any[])
.filter(p => p.slug) // Ensure we only process rows that have a slug
        .map(p => ({
            ...p,
            // Papaparse's dynamicTyping might miss 'TRUE'/'FALSE', so we ensure it's a boolean
            isFeatured: String(p.isFeatured).toUpperCase() === 'TRUE',
        }));

    // Get all featured projects
    const featuredProjects = allProjects.filter(p => p.isFeatured);

    // Get all non-featured projects, sort by date, and take the latest 10
    const latestProjects = allProjects
        .filter(p => !p.isFeatured)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 10);

    return {
        featuredProjects,
        latestProjects,
    };
}
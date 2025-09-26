import Papa from 'papaparse';
import { error } from '@sveltejs/kit';
import type { Project, CaseStudy } from '$lib/types'; // Import both types
export const prerender = true;

const PROJECTS_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTL9ADcfbcaxjsw03oJXaaORuG_1HAinhnbWNSNlvvgQm9CU8B8mvcU-jS9wwek4etGmp8bJ4Mb4v9U/pubhtml?gid=0&single=true';
const CASE_STUDIES_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTL9ADcfbcaxjsw03oJXaaORuG_1HAinhnbWNSNlvvgQm9CU8B8mvcU-jS9wwek4etGmp8bJ4Mb4v9U/pubhtml?gid=1124761545&single=true';

async function fetchAndParse<T>(url: string, fetch: any): Promise<T[]> {
    const response = await fetch(url);
    const csvText = await response.text();
    const parsed = Papa.parse(csvText, { header: true, dynamicTyping: true });
    return parsed.data as T[];
}

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params }) {
    const { slug } = params;

    const allProjects = await fetchAndParse<Project>(PROJECTS_URL, fetch);
    const allCaseStudies = await fetchAndParse<CaseStudy>(CASE_STUDIES_URL, fetch);

    const project = allProjects.find(p => p.slug === slug);

    if (!project) {
        throw error(404, 'Project not found');
    }

    const caseStudies = allCaseStudies.filter(cs => cs.projectSlug === slug);

    return {
        project,
        caseStudies
    };
}
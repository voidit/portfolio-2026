import Papa from 'papaparse';
import { error } from '@sveltejs/kit';
import type { Project, CaseStudy } from '$lib/types'; // Import both types

const PROJECTS_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTL9ADcfbcaxjsw03oJXaaORuG_1HAinhnbWNSNlvvgQm9CU8B8mvcU-jS9wwek4etGmp8bJ4Mb4v9U/pubhtml?gid=0&single=true';
const CASE_STUDIES_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTL9ADcfbcaxjsw03oJXaaORuG_1HAinhnbWNSNlvvgQm9CU8B8mvcU-jS9wwek4etGmp8bJ4Mb4v9U/pubhtml?gid=1124761545&single=true';

async function fetchAndParse<T>(url: string, fetch): Promise<T[]> {
    const response = await fetch(url);
    const csvText = await response.text();
    const parsed = Papa.parse(csvText, { header: true, dynamicTyping: true });
    return parsed.data as T[];
}

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params }) {
    const { slug } = params;

    // Fetch all projects and case studies with their correct types
    const allProjects = await fetchAndParse<Project>(PROJECTS_URL, fetch);
    const allCaseStudies = await fetchAndParse<CaseStudy>(CASE_STUDIES_URL, fetch);

    // Find the specific project by its slug
    const project = allProjects.find(p => p.slug === slug);

    // If the project doesn't exist, throw a 404 error
    if (!project) {
        throw error(404, 'Project not found');
    }

    // Find all case studies that belong to this project
    const caseStudies = allCaseStudies.filter(cs => cs.projectSlug === slug);

    return {
        project,
        caseStudies
    };
}}
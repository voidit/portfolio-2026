// Defines the structure for a single project
export interface Project {
    slug: string;
    projectName: string;
    isFeatured: boolean;
    date: string; // Keep as string for simplicity, or we can convert to Date object
    overview: string;
    client?: string; // Optional property
    roles?: string;
    tools?: string;
    process?: string;
    sketches?: string;
    photos?: string;
    videos?: string;
    outcome?: string;
    feedback?: string;
}

// Defines the structure for a single case study
export interface CaseStudy {
    caseStudySlug: string;
    projectSlug: string;
    caseStudyName: string;
    before?: string;
    after?: string;
    overview?: string;
    process?: string;
    outcome?: string;
}
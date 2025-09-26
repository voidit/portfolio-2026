// A single interface for all content types
export interface Post {
    id: number;
    slug: string;
    postType: 'project' | 'case-study' | 'photo' | 'text' | 'link' | 'audio' | 'video' | 'quote';
    title: string;
    date: string;
    isFeatured?: boolean;
    tags?: string;
    content1?: string;
    content2?: string;
    embedCode?: string;
    driveFolderId?: string;
    caseStudyFor?: number;
    beforeImageUrl?: string;
    afterImageUrl?: string;
}
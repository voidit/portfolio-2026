import Papa from 'papaparse';
import type { Post } from '$lib/types';

const DATABASE_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTruVxzV2UByby7wb8g4Q_-4g7qdsJWR_CNJqg_85wTzvxo__Vgm7km9SRzGyFFn2wQCmpCHBGsz9tQ/pub?output=csv';

// The function now ACCEPTS the 'fetch' function as its first argument
export async function getContent(fetch: typeof globalThis.fetch): Promise<Post[]> {
    // It now uses the PASSED-IN fetch, not the global one
    const response = await fetch(DATABASE_URL);

    if (!response.ok) {
        // It's good practice to handle potential errors
        console.error('Failed to fetch database:', response.status, response.statusText);
        return []; // Return an empty array to prevent the page from crashing
    }

    const csvText = await response.text();

    const parsed = Papa.parse(csvText, {
        header: true,
        dynamicTyping: true,
    });

    return (parsed.data as any[]).filter(p => p.id);
}
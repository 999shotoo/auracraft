'use server';


export async function fetchSearch(pageParam?: number, Search?: string) {
    try {
        const response = await fetch(`${process.env.AuraCraft_API}/api/wallhaven/search?search=${Search || ""}&page=${pageParam || 1}`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.error("Error fetching home data:", error);
        throw error;
    }
}
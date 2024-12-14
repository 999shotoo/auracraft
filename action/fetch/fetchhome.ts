'use server';

export async function fetchHome(pageParam?: number) {
    try {
        const response = await fetch(`${process.env.AuraCraft_API}/api/wallhaven/home?page=${pageParam || 1}`);

        // Log the response status
        console.log("Response status:", response.status);

        // Check if the response is OK (status code 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Response data:", data); // Log the response data
        return data; // Ensure this returns the expected structure
    } catch (error) {
        console.error("Error fetching home data:", error);
        throw error; // Rethrow the error for handling in the calling function
    }
}
'use server';

export async function fetchHome() {

    try {
        const response = await fetch(`${process.env.AuraCraft_API}/api/wallhaven/home`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}
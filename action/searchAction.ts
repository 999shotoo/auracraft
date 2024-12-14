'use server';

import { redirect } from "next/navigation";

export async function searchAction(data: FormData) {
    return redirect("/search?q=" + data.get("q"));
};
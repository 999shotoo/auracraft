import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { WallpaperCard } from "@/components/wallpaper-card";
import { fetchSearch } from "@/action/fetch/fetchsearch";
import { redirect } from "next/navigation";
import { searchAction } from "@/action/searchAction";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) {
  const searchvalue = (await searchParams).q || "";
  const searchedData = await fetchSearch(1, searchvalue);
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-6">
        <h1 className="text-3xl font-bold text-white mb-4">
          Search Wallpapers
        </h1>
        <form action={searchAction}>
          <div className="flex items-center space-x-2">
            <Input
              type="search"
              placeholder="Search for wallpapers or artists..."
              className="flex-1 bg-white/20 border-white/30 text-white placeholder-white/70"
              name="q"
            />
            <Button type="submit" variant="secondary">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
        </form>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {searchedData.data.map((wallpaper: any) => (
          <WallpaperCard key={wallpaper.id} {...wallpaper} />
        ))}
      </div>
    </div>
  );
}

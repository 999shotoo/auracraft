import Link from "next/link";
import { WallpaperCard } from "@/components/wallpaper-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Sparkles, TrendingUp, Clock } from "lucide-react";
import { ThemeToggle } from "@/components/buttons/themetoggle";
import { fetchHome } from "@/action/fetch/fetchhome";
import LoadMore from "@/components/home/loadmore";

export default async function Home() {
  const homedata = await fetchHome();
  return (
    <div className="space-y-8">
      <section className="text-center py-12 px-2 bg-gradient-to-r bg-primary rounded-lg  text-white">
        <h1 className="text-2xl font-bold mb-4">Welcome to AuraCraft</h1>
        <p className="text-xl mb-6">Discover and share stunning wallpapers</p>
        <div className="flex items-center justify-center space-x-2 max-w-md mx-auto">
          <Input
            type="search"
            placeholder="Search wallpapers..."
            className="text-white placeholder:text-white"
          />
          <Button type="submit" variant="secondary">
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Sparkles className="h-6 w-6 mr-2 text-yellow-500" />
          Featured Wallpapers
        </h2>
        <div className="grid gap-6 grid-cols-2 lg:grid-cols-4">
          {homedata.data.map((wallpaper: any) => (
            <WallpaperCard key={wallpaper.id} {...wallpaper} />
          ))}
        </div>
      </section>
      <LoadMore />
      <ThemeToggle />
    </div>
  );
}

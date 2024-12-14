import Link from "next/link";
import { WallpaperCard } from "@/components/wallpaper-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Sparkles, TrendingUp, Clock } from "lucide-react";
import { ThemeToggle } from "@/components/buttons/themetoggle";

const featuredWallpapers = [
  {
    id: "1",
    title: "Neon City",
    artist: "CyberArtist",
    imageUrl:
      "https://th.wallhaven.cc/lg/vq/vq85mp.jpg?height=225&width=400&text=Neon+City",
    likes: 1200,
  },
  {
    id: "2",
    title: "Serene Forest",
    artist: "NatureLover",
    imageUrl:
      "https://th.wallhaven.cc/lg/vq/vq85mp.jpg?height=225&width=400&text=Serene+Forest",
    likes: 980,
  },
  {
    id: "3",
    title: "Abstract Waves",
    artist: "ModernArtist",
    imageUrl:
      "https://th.wallhaven.cc/lg/vq/vq85mp.jpg?height=225&width=400&text=Abstract+Waves",
    likes: 1500,
  },
  {
    id: "4",
    title: "Cosmic Journey",
    artist: "SpaceExplorer",
    imageUrl:
      "https://th.wallhaven.cc/lg/vq/vq85mp.jpg?height=225&width=400&text=Cosmic+Journey",
    likes: 2200,
  },
];

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="text-center py-12 bg-gradient-to-r bg-primary rounded-lg  text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to AuraCraft</h1>
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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredWallpapers.map((wallpaper) => (
            <WallpaperCard key={wallpaper.id} {...wallpaper} />
          ))}
        </div>
      </section>

      <div className="grid gap-8 sm:grid-cols-2">
        <section>
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <TrendingUp className="h-6 w-6 mr-2 text-green-500" />
            Top Rated
          </h2>
          <div className="grid gap-4">
            {featuredWallpapers.slice(0, 2).map((wallpaper) => (
              <WallpaperCard key={wallpaper.id} {...wallpaper} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Clock className="h-6 w-6 mr-2 text-blue-500" />
            Latest Uploads
          </h2>
          <div className="grid gap-4">
            {featuredWallpapers.slice(2, 4).map((wallpaper) => (
              <WallpaperCard key={wallpaper.id} {...wallpaper} />
            ))}
          </div>
        </section>
      </div>

      <section className="text-center py-8 bg-muted rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Join Our Community</h2>
        <p className="mb-6">
          Upload your own wallpapers and get inspired by others
        </p>
        <Button size="lg" asChild>
          <Link href="/register">Sign Up Now</Link>
        </Button>
      </section>
      <ThemeToggle />
    </div>
  );
}

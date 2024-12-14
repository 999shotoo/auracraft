import Image from "next/image";
import Link from "next/link";
import { Heart, Download } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface WallpaperCardProps {
  id: string;
  title: string;
  path: string;
  thumbs: {
    large: string;
    small: string;
    original: string;
  };
  likes: number;
}

export function WallpaperCard({
  id,
  title,
  path,
  thumbs,
  likes,
}: WallpaperCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-md transition-all hover:shadow-lg">
      <Link href={`/wallpaper/${id}`}>
        <Image
          src={thumbs.large}
          alt={title}
          width={400}
          height={225}
          className="aspect-video w-full object-cover transition-transform group-hover:scale-105"
        />
      </Link>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-opacity group-hover:opacity-100">
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <div className="absolute right-2 top-2 flex space-x-2">
        <Button
          size="icon"
          variant="ghost"
          className={cn(
            "h-8 w-8 rounded-full bg-white/10 text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100",
            "hover:bg-white/20 hover:text-white"
          )}
        >
          <Heart className="h-4 w-4" />
          <span className="sr-only">Like</span>
        </Button>
        <Button
          size="icon"
          variant="ghost"
          className={cn(
            "h-8 w-8 rounded-full bg-white/10 text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100",
            "hover:bg-white/20 hover:text-white"
          )}
        >
          <Download className="h-4 w-4" />
          <span className="sr-only">Download</span>
        </Button>
      </div>
      <div className="absolute left-2 top-2 rounded-full bg-white/10 px-2 py-1 text-xs text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
        {likes} likes
      </div>
    </div>
  );
}

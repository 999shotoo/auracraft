"use client";

import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { fetchHome } from "@/action/fetch/fetchhome";
import { WallpaperCard } from "../wallpaper-card";
import { Loader } from "lucide-react"; // Importing Loader from lucid-react

function LoadMore() {
  const { ref, inView } = useInView();
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true); // Track if there are more pages to load

  useEffect(() => {
    if (inView && !isLoading && hasMore) {
      console.log("Fetching data for page:", page);
      setIsLoading(true);

      fetchHome(page)
        .then((response) => {
          console.log("Fetched data:", response);
          if (response && response.data) {
            setData((prevData) => [...prevData, ...response.data]);
            setPage((prevPage) => prevPage + 1);
            // Check if we've reached the last page
            if (page >= response.meta.last_page) {
              setHasMore(false); // No more pages to load
            }
          } else {
            console.error("No data found in response");
            setHasMore(false); // No more data available
          }
        })
        .catch((error) => {
          console.error("Error fetching wallpapers:", error);
          setError("Failed to load wallpapers. Please try again.");
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [inView, isLoading, page, hasMore]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {data.length > 0 ? (
          data.map((wallpaper: any) => (
            <WallpaperCard key={wallpaper.id} {...wallpaper} />
          ))
        ) : (
          <h1>No wallpapers available.</h1> // Empty state
        )}
      </div>
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          {isLoading && (
            <div className="flex justify-center items-center">
              <Loader className="animate-spin h-12 w-12 m-5 text-primary" />
            </div>
          )}
          {error && <h1 className="text-red-500">{error}</h1>}
          {!hasMore && !isLoading && (
            <h1 className="text-gray-500">You have reached the last page.</h1>
          )}
        </div>
      </section>
      {data.length > 0 && !isLoading && !error && !hasMore && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-blue-500 text-white p-2 rounded shadow-lg"
        >
          Go to Top
        </button>
      )}
    </>
  );
}

export default LoadMore;

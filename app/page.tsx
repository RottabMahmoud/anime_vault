// page.tsx

// REMOVE THIS LINE: import { fetchAnime } from "./action";

import LoadMore from "../components/LoadMore";
import AnimeCard from "../components/AnimeCard"; // <--- You will likely need this or a similar component

// Convert to a synchronous function and return placeholder data
function Home() {
  const placeholderData = Array(8).fill(
    <AnimeCard
      anime={{
        id: 0,
        name: "Placeholder",
        image: "/placeholder.png",
        kind: "tv",
        episodes: 12,
        score: 9.0,
      }}
      index={0}
      key={0}
    />
  );

  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      <h2 className="text-3xl text-white font-bold">Explore Anime</h2>

      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {placeholderData} {/* Use placeholder data instead of {data} */}
      </section>
      <LoadMore />
    </main>
  );
}

export default Home;

// pages/page.tsx (or app/page.tsx)

import LoadMore from "../components/LoadMore";
import AnimeCard from "../components/AnimeCard"; // ASSUMING THIS IS THE CORRECT PATH TO YOUR COMPONENT
import { AnimeProp } from "../components/AnimeCard"; // ASSUMING AnimeProp is exported from AnimeCard

// --- TEMPORARY STATIC DATA TO TEST DEPLOYMENT ---
const placeholderAnime: AnimeProp = {
  id: "temp-1",
  name: "Static Placeholder Anime",
  image: {
    original: "/system/animes/original/1.jpg", // Use a placeholder image path that is allowed (must be on shikimori.one or next.config.js configured)
  },
  kind: "tv",
  episodes: 12,
  episodes_aired: 12,
  score: "8.5",
};

const placeholderData = Array(8)
  .fill(0)
  .map((_, index) => (
    <AnimeCard
      anime={{ ...placeholderAnime, id: `temp-${index}` }}
      index={index}
      key={index}
    />
  ));
// --------------------------------------------------

// Removed 'async' and 'await fetchAnime' for testing
function Home() {
  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      <h2 className="text-3xl text-white font-bold">Explore Anime</h2>

      {/* RENDER STATIC PLACEHOLDER DATA */}
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {placeholderData}
      </section>

      <LoadMore />
    </main>
  );
}

export default Home;

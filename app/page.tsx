// pages/page.tsx (or app/page.tsx)

import LoadMore from "../components/LoadMore";
import AnimeCard from "../components/AnimeCard"; // ASSUMING THIS IS THE CORRECT PATH TO YOUR COMPONENT
import { AnimeProp } from "../components/AnimeCard"; // ASSUMING AnimeProp is exported from AnimeCard
import { fetchAnime } from "./action";

const animeList: AnimeProp[] = await fetchAnime(1); // first page

function Home() {
  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      <h2 className="text-3xl text-white font-bold">Explore Anime</h2>

      {/* RENDER STATIC PLACEHOLDER DATA */}
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {animeList}
      </section>

      <LoadMore />
    </main>
  );
}

export default Home;

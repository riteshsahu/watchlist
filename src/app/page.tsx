import AddMovie from "@/components/AddMovie";
import MovieList from "@/components/MovieList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AddMovie />
      <MovieList />
    </main>
  );
}

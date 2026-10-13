
import { useEffect, useState } from "react";

function App() {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api/jokes")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch jokes");
        }
        return res.json();
      })
      .then((data) => setJokes(data))
      .catch(() => setError("Could not load jokes. Please try again."))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 px-5 py-12 text-white">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
            A little dose of laughter
          </p>

          <h1 className="text-4xl font-extrabold sm:text-6xl">
            Joke <span className="text-violet-400">Hub</span> 😂
          </h1>

          <p className="mt-4 text-slate-400">
            Take a break and enjoy some funny jokes!
          </p>
        </header>

        {loading && (
          <p className="text-center text-violet-300">
            Loading jokes...
          </p>
        )}

        {error && (
          <p className="text-center text-red-400">{error}</p>
        )}

        {!loading && !error && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {jokes.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-violet-500 hover:shadow-violet-500/10"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="rounded-full bg-violet-500/15 px-3 py-1 text-sm font-medium text-violet-300">
                    {item.title}
                  </span>

                  <span className="text-2xl">😂</span>
                </div>

                <p className="text-lg leading-8 text-slate-200">
                  {item.joke}
                </p>

                <div className="mt-6 border-t border-slate-700 pt-4 text-sm text-slate-500">
                  Joke #{item.id}
                </div>
              </div>
            ))}
          </div>
        )}

        <footer className="mt-12 text-center text-sm text-slate-500">
          Made with ❤️ and React
        </footer>
      </div>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Tour from "./Tour";

const URL = "https://course-api.com/react-tours-project";

export default function Tours() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const [error, setError] = useState("");

  const fetchTours = async () => {
    setLoading(true);
    try {
      const res = await fetch(URL);
      if (!res.ok) {
        throw new Error("Failed to fetch tour data");
      }
      const data = await res.json();
      setTours(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const removeTour = (id) => {
    setTours((prev) => prev.filter((tour) => tour.id !== id));
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) return <Loading />;

  if (error) return <h1>{error}</h1>;

  if (tours.length === 0) {
    return (
      <main>
        <h2>No Tours Left</h2>
        <button onClick={fetchTours}>Refetch</button>
      </main>
    );
  }

  return (
    <main>
      <section>
        <h1>Our Tours</h1>
        {tours.map((tour) => (
          <Tour key={tour.id} {...tour} removeTour={removeTour} />
        ))}
      </section>
    </main>
  );
}

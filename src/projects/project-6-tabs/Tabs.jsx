import { useEffect, useState } from "react";
import "./Tabs.css";

const URL = "https://course-api.com/react-tabs-project";

export default function Tabs() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState("");
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const res = await fetch(URL);
      if (!res.ok) {
        throw new Error("Failed to fetch jobs data");
      }
      const data = await res.json();
      setJobs(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) return <h1>Loading...</h1>;

  if (error) return <h1>{error}</h1>;

  const { company, dates, duties, title } = jobs[value];

  const buttons = jobs.map(({ company }, index) => (
    <button
      onClick={() => setValue(index)}
      key={index}
      className={`job-btn ${index === value && "active-btn"}`}
    >
      {company}
    </button>
  ));

  return (
    <section>
      <h1>Experience</h1>
      <div>{buttons}</div>
      <h2>{title}</h2>
      <h3>{company}</h3>
      <h4>{dates}</h4>
      <ul>
        {duties.map((duty, index) => (
          <li key={index}>{duty}</li>
        ))}
      </ul>
    </section>
  );
}

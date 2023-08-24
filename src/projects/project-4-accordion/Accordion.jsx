import { useState } from "react";
import data from "./data.js";
import Question from "./Question";

export default function Accordion() {
  const [questions, setQuestions] = useState(data);

  return (
    <section>
      <h2>Questions and Answers About Login</h2>
      <div>
        {questions.map((q) => (
          <Question key={q.id} {...q} />
        ))}
      </div>
    </section>
  );
}

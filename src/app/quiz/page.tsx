import { Suspense } from "react";
import QuizContent from "./QuizContent";

export default function QuizPage() {
  return (
    <Suspense fallback={<QuizLoading />}>
      <QuizContent />
    </Suspense>
  );
}

function QuizLoading() {
  return (
    <main className="quiz-page">
      <div className="quiz-container">
        <div
          style={{
            minHeight: "300px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "18px",
          }}
        >
          Loading quiz...
        </div>
      </div>
    </main>
  );
}
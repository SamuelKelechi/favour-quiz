"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { questions } from "@/data/questions";

type Answers = Record<number, string>;

export default function ResultPage() {
  const [answers, setAnswers] = useState<Answers>({});
  const [score, setScore] = useState(0);
  const [timeUsed, setTimeUsed] = useState(0);

  useEffect(() => {
    const storedAnswers = sessionStorage.getItem(
      "quizAnswers"
    );

    const storedScore = sessionStorage.getItem(
      "quizScore"
    );

    const storedTime = sessionStorage.getItem(
      "quizTimeUsed"
    );

    if (storedAnswers) {
      setAnswers(JSON.parse(storedAnswers));
    }

    if (storedScore) {
      setScore(Number(storedScore));
    }

    if (storedTime) {
      setTimeUsed(Number(storedTime));
    }
  }, []);

  const percentage =
    (score / questions.length) * 100;

  const minutes = Math.floor(timeUsed / 60);

  const seconds = timeUsed % 60;

  const formattedTime =
    `${String(minutes).padStart(2, "0")}:` +
    `${String(seconds).padStart(2, "0")}`;

  let grade = "";

  let message = "";

  if (percentage >= 80) {
    grade = "A";
    message = "Excellent work, Favour! 🎉";
  } else if (percentage >= 70) {
    grade = "B";
    message = "Very good work, Favour! 👏";
  } else if (percentage >= 60) {
    grade = "C";
    message = "Good effort. Keep practising! 💪";
  } else if (percentage >= 50) {
    grade = "D";
    message = "You passed, but there is room for improvement.";
  } else {
    grade = "F";
    message = "Keep studying, Favour. You can do better! 📚";
  }

  return (
    <main className="result-page">

      <section className="result-card">

        <div className="result-icon">
          🎉
        </div>

        <p className="result-label">
          QUIZ COMPLETED
        </p>

        <h1>
          Well done, Favour!
        </h1>

        <p className="result-message">
          {message}
        </p>

        <div className="score-circle">
          <strong>{score}</strong>
          <span>
            / {questions.length}
          </span>
        </div>

        <p className="percentage">
          {percentage.toFixed(2)}%
        </p>

        <div className="result-summary">

          <div>
            <span>Grade</span>
            <strong>{grade}</strong>
          </div>

          <div>
            <span>Time Used</span>
            <strong>{formattedTime}</strong>
          </div>

          <div>
            <span>Questions</span>
            <strong>{questions.length}</strong>
          </div>

        </div>

        <div className="result-actions">

          <Link
            href="/quiz"
            className="try-again-button"
          >
            Try Again
          </Link>

          <Link
            href="/"
            className="home-button"
          >
            Back Home
          </Link>

        </div>

      </section>

      {/* ANSWER REVIEW */}

      <section className="review-section">

        <div className="review-header">
          <p className="result-label">
            ANSWER REVIEW
          </p>

          <h2>
            Review Your Answers
          </h2>

          <p>
            See which questions you answered
            correctly and learn from your mistakes.
          </p>
        </div>

        <div className="review-list">

          {questions.map((question) => {

            const userAnswer =
              answers[question.id];

            const isCorrect =
              userAnswer === question.answer;

            return (
              <article
                key={question.id}
                className={`review-card ${
                  isCorrect
                    ? "review-correct"
                    : "review-wrong"
                }`}
              >

                <div className="review-top">

                  <span>
                    Question {question.id}
                  </span>

                  <strong>
                    {isCorrect
                      ? "✓ Correct"
                      : "✕ Incorrect"}
                  </strong>

                </div>

                <h3>
                  {question.question}
                </h3>

                <p>
                  <strong>Your answer:</strong>{" "}
                  {userAnswer
                    ? `${userAnswer}. ${
                        question.options
                          .find((option) =>
                            option.startsWith(
                              userAnswer
                            )
                          )
                          ?.substring(3)
                      }`
                    : "Not answered"}
                </p>

                {!isCorrect && (
                  <p>
                    <strong>
                      Correct answer:
                    </strong>{" "}
                    {question.answer}.{" "}
                    {question.options
                      .find((option) =>
                        option.startsWith(
                          question.answer
                        )
                      )
                      ?.substring(3)}
                  </p>
                )}

                <div className="explanation">
                  <strong>
                    Explanation:
                  </strong>

                  <p>
                    {question.explanation}
                  </p>
                </div>

              </article>
            );
          })}

        </div>

      </section>

    </main>
  );
}
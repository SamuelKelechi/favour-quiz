import Link from "next/link";
import "./globals.css";

export default function Home() {

  
  return (
    <main className="home-page">
      <section className="hero-card">
        <div className="python-icon">🐍</div>

        <p className="eyebrow">PYTHON PROGRAMMING</p>

        <h1>
          Favour&apos;s
          <span> Python Quiz</span>
        </h1>

        <p className="description">
          Test your understanding of Python programming through
          20 carefully selected questions.
        </p>

        <div className="quiz-info">
          <div className="info-card">
            <strong>20</strong>
            <span>Questions</span>
          </div>

          <div className="info-card">
            <strong>20</strong>
            <span>Minutes</span>
          </div>
        </div>

        <Link
            href="/quiz?new=true"
            className="start-button"
          >
            Start Quiz
            <span>→</span>
        </Link>

        <p className="instruction">
          Make sure you are ready before starting.
          The timer begins immediately.
        </p>
      </section>
    </main>
  );
}
"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  useRouter,
  useSearchParams,
} from "next/navigation";

import { questions } from "@/data/questions";

const QUIZ_DURATION = 20 * 60;

export default function QuizContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const isNewQuiz =
    searchParams.get("new") === "true";

  const [currentQuestion, setCurrentQuestion] =
    useState(0);

  const [selectedAnswers, setSelectedAnswers] =
    useState<Record<number, string>>({});

  const answersRef =
    useRef<Record<number, string>>({});

  const [timeLeft, setTimeLeft] =
    useState(QUIZ_DURATION);

  const [quizStarted, setQuizStarted] =
    useState(false);

  const [showSubmitModal, setShowSubmitModal] =
    useState(false);

  const question = questions[currentQuestion];

  /*
   * =========================
   * LOAD SAVED QUIZ
   * =========================
   */

  useEffect(() => {
    /*
     * If this is a NEW quiz,
     * clear the previous attempt.
     */

    if (isNewQuiz) {
      sessionStorage.removeItem(
        "quizAnswers"
      );

      sessionStorage.removeItem(
        "currentQuestion"
      );

      sessionStorage.removeItem(
        "quizStartTime"
      );

      sessionStorage.removeItem(
        "quizScore"
      );

      sessionStorage.removeItem(
        "quizTimeUsed"
      );

      answersRef.current = {};

      setSelectedAnswers({});

      setCurrentQuestion(0);

      const startTime = Date.now();

      sessionStorage.setItem(
        "quizStartTime",
        startTime.toString()
      );

      setTimeLeft(QUIZ_DURATION);

      setQuizStarted(true);

      return;
    }

    /*
     * Otherwise, restore the
     * existing quiz.
     */

    const savedAnswers =
      sessionStorage.getItem(
        "quizAnswers"
      );

    const savedQuestion =
      sessionStorage.getItem(
        "currentQuestion"
      );

    const savedStartTime =
      sessionStorage.getItem(
        "quizStartTime"
      );

    if (savedAnswers) {
      try {
        const parsedAnswers =
          JSON.parse(savedAnswers);

        setSelectedAnswers(
          parsedAnswers
        );

        answersRef.current =
          parsedAnswers;
      } catch (error) {
        console.error(
          "Failed to restore quiz answers:",
          error
        );
      }
    }

    if (savedQuestion) {
      setCurrentQuestion(
        Number(savedQuestion)
      );
    }

    if (savedStartTime) {
      const startTime =
        Number(savedStartTime);

      const elapsed = Math.floor(
        (Date.now() - startTime) /
          1000
      );

      const remaining =
        QUIZ_DURATION - elapsed;

      if (remaining <= 0) {
        setTimeLeft(0);
      } else {
        setTimeLeft(remaining);
      }

      setQuizStarted(true);
    } else {
      const startTime = Date.now();

      sessionStorage.setItem(
        "quizStartTime",
        startTime.toString()
      );

      setQuizStarted(true);
    }
  }, [isNewQuiz]);

  /*
   * =========================
   * TIMER
   * =========================
   */

  useEffect(() => {
    if (!quizStarted) {
      return;
    }

    if (timeLeft <= 0) {
      submitQuiz();
      return;
    }

    const timer = setInterval(() => {
      const startTime =
        sessionStorage.getItem(
          "quizStartTime"
        );

      if (!startTime) {
        return;
      }

      const elapsed = Math.floor(
        (Date.now() -
          Number(startTime)) /
          1000
      );

      const remaining =
        QUIZ_DURATION - elapsed;

      if (remaining <= 0) {
        setTimeLeft(0);
      } else {
        setTimeLeft(remaining);
      }
    }, 1000);

    return () =>
      clearInterval(timer);
  }, [quizStarted, timeLeft]);

  /*
   * =========================
   * FORMAT TIME
   * =========================
   */

  const minutes = Math.floor(
    timeLeft / 60
  );

  const seconds = timeLeft % 60;

  const formattedTime =
    `${String(minutes).padStart(
      2,
      "0"
    )}:` +
    `${String(seconds).padStart(
      2,
      "0"
    )}`;

  /*
   * =========================
   * SELECT ANSWER
   * =========================
   */

  const handleAnswer = (
    answer: string
  ) => {
    const updatedAnswers = {
      ...answersRef.current,
      [question.id]: answer,
    };

    answersRef.current =
      updatedAnswers;

    setSelectedAnswers(
      updatedAnswers
    );

    sessionStorage.setItem(
      "quizAnswers",
      JSON.stringify(
        updatedAnswers
      )
    );
  };

  /*
   * =========================
   * GO TO QUESTION
   * =========================
   */

  const goToQuestion = (
    index: number
  ) => {
    setCurrentQuestion(index);

    sessionStorage.setItem(
      "currentQuestion",
      index.toString()
    );
  };

  /*
   * =========================
   * NEXT
   * =========================
   */

  const handleNext = () => {
    if (!selectedAnswers[question.id]) {
      return;
    }

    if (
      currentQuestion <
      questions.length - 1
    ) {
      goToQuestion(
        currentQuestion + 1
      );
    } else {
      setShowSubmitModal(true);
    }
  };

  /*
   * =========================
   * PREVIOUS
   * =========================
   */

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      goToQuestion(
        currentQuestion - 1
      );
    }
  };

  /*
   * =========================
   * SUBMIT
   * =========================
   */

  function submitQuiz() {
    let score = 0;

    questions.forEach(
      (question) => {
        if (
          answersRef.current[
            question.id
          ] === question.answer
        ) {
          score++;
        }
      }
    );

    const timeUsed =
      QUIZ_DURATION -
      timeLeft;

    sessionStorage.setItem(
      "quizScore",
      score.toString()
    );

    sessionStorage.setItem(
      "quizTimeUsed",
      timeUsed.toString()
    );

    router.push("/result");
  }

  /*
   * =========================
   * ANSWERED COUNT
   * =========================
   */

  const answeredCount =
    Object.keys(
      selectedAnswers
    ).length;

  const unansweredCount =
    questions.length -
    answeredCount;

  /*
   * =========================
   * PAGE
   * =========================
   */

  return (
    <main className="quiz-page">

      <div className="quiz-container">

        {/* HEADER */}

        <header className="quiz-header">

          <div>
            <p className="quiz-label">
              PYTHON QUIZ
            </p>

            <h1>
              Favour&apos;s Quiz
            </h1>
          </div>

          <div
            className={`timer ${
              timeLeft <= 60
                ? "timer-warning"
                : ""
            }`}
          >
            <span>⏱</span>

            {formattedTime}
          </div>

        </header>


        {/* QUESTION NAVIGATOR */}

        <section className="question-navigator">

          <div className="navigator-header">

            <div>
              <strong>
                Questions
              </strong>

              <span>
                {answeredCount} answered
              </span>
            </div>

            <span>
              {unansweredCount} remaining
            </span>

          </div>


          <div className="question-numbers">

            {questions.map(
              (item, index) => {

                const answered =
                  Boolean(
                    selectedAnswers[
                      item.id
                    ]
                  );

                const active =
                  index ===
                  currentQuestion;

                return (
                  <button
                    key={item.id}
                    onClick={() =>
                      goToQuestion(index)
                    }
                    className={`
                      question-number-button
                      ${
                        answered
                          ? "answered"
                          : ""
                      }
                      ${
                        active
                          ? "active"
                          : ""
                      }
                    `}
                  >
                    {item.id}
                  </button>
                );
              }
            )}

          </div>


          <div className="navigator-legend">

            <span>
              <i className="legend-current" />
              Current
            </span>

            <span>
              <i className="legend-answered" />
              Answered
            </span>

            <span>
              <i className="legend-unanswered" />
              Unanswered
            </span>

          </div>

        </section>


        {/* PROGRESS */}

        <div className="progress-section">

          <div className="progress-text">

            <span>
              Question{" "}
              {currentQuestion + 1}{" "}
              of {questions.length}
            </span>

            <span>
              {Math.round(
                ((currentQuestion + 1) /
                  questions.length) *
                  100
              )}
              %
            </span>

          </div>

          <div className="progress-bar">

            <div
              className="progress-fill"
              style={{
                width: `${
                  ((currentQuestion + 1) /
                    questions.length) *
                  100
                }%`,
              }}
            />

          </div>

        </div>


        {/* QUESTION CARD */}

        <section className="question-card">

          <p className="question-number">
            QUESTION {question.id}
          </p>

          <h2>
            {question.question}
          </h2>


          <div className="options">

            {question.options.map(
              (option) => {

                const letter =
                  option.charAt(0);

                const text =
                  option.substring(3);

                const isSelected =
                  selectedAnswers[
                    question.id
                  ] === letter;

                return (
                  <button
                    key={option}
                    onClick={() =>
                      handleAnswer(
                        letter
                      )
                    }
                    className={`
                      option
                      ${
                        isSelected
                          ? "option-selected"
                          : ""
                      }
                    `}
                  >

                    <span className="option-letter">
                      {letter}
                    </span>

                    <span className="option-text">
                      {text}
                    </span>

                  </button>
                );
              }
            )}

          </div>


          {/* NAVIGATION */}

          <div className="quiz-navigation">

            <button
              className="previous-button"
              onClick={
                handlePrevious
              }
              disabled={
                currentQuestion === 0
              }
            >
              ← Previous
            </button>

            <button
              className="next-button"
              onClick={handleNext}
              disabled={
                !selectedAnswers[
                  question.id
                ]
              }
            >
              {currentQuestion ===
              questions.length - 1
                ? "Finish Quiz"
                : "Next Question"}

              <span>→</span>
            </button>

          </div>

        </section>

      </div>


      {/* SUBMIT MODAL */}

      {showSubmitModal && (
        <div className="modal-overlay">

          <div className="submit-modal">

            <div className="modal-icon">
              📝
            </div>

            <h2>
              Submit Quiz?
            </h2>

            <p>
              You have answered{" "}
              <strong>
                {answeredCount}
              </strong>{" "}
              out of{" "}
              <strong>
                {questions.length}
              </strong>{" "}
              questions.
            </p>

            {unansweredCount > 0 && (
              <p className="modal-warning">
                You still have{" "}
                <strong>
                  {unansweredCount}
                </strong>{" "}
                unanswered question
                {unansweredCount > 1
                  ? "s"
                  : ""}.
              </p>
            )}

            <div className="modal-actions">

              <button
                className="cancel-button"
                onClick={() =>
                  setShowSubmitModal(
                    false
                  )
                }
              >
                Continue Quiz
              </button>

              <button
                className="confirm-button"
                onClick={submitQuiz}
              >
                Submit Quiz
              </button>

            </div>

          </div>

        </div>
      )}

    </main>
  );
}
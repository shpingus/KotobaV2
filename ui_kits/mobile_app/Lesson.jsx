// Kotoba — Lesson on the path. Lessons run through the shared ChallengeEngine
// (the same exercise UIs used by practice drills): multiple choice, sentence
// building and listening, mixed. Exposes window.Lesson.

const Lesson = function Lesson({ onExit, onDone }) {
  const Engine = window.ChallengeEngine;
  return <Engine preset="lesson" sensei completeTitle="Lesson complete!" onExit={onExit} onDone={onDone} />;
};

Object.assign(window, { Lesson });

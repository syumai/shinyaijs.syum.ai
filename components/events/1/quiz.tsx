"use client";

import { useState, useCallback, FormEventHandler } from "react";
import { Button } from "@/components/ui/button";
import Question1 from "./Question1";
import Question2 from "./Question2";
import Question3 from "./Question3";
import Question4 from "./Question4";
import Result from "../../QuizResult";
import { submitEvents1Answers } from "@/app/actions";

export type Answers = Partial<
  [string[], 0 | 1 | 2 | 3 | 4, "A" | "B", "A" | "B" | "C" | "D"]
>;

const isEmpty = (value: string[] | number | string | undefined): boolean => {
  if (value === undefined) {
    return true;
  }
  if (Array.isArray(value)) {
    return value.some((v) => v === "");
  }
  return false;
};

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Answers>([
    undefined,
    undefined,
    undefined,
    undefined,
  ]);
  const [result, setResult] = useState<
    Awaited<ReturnType<typeof submitEvents1Answers>> | undefined
  >(undefined);

  const handleAnswer = useCallback(
    (answer: Answers[number]) => {
      setAnswers((prev) => {
        const newAnswers = { ...prev };
        newAnswers[currentQuestion] = answer;
        return newAnswers;
      });
    },
    [currentQuestion, setAnswers]
  );

  const handleSubmit: FormEventHandler = async (e) => {
    e.preventDefault();
    if (currentQuestion < 3) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      const result = await submitEvents1Answers(answers);
      setResult(result);
    }
  };

  const questions = [
    <Question1 key={0} onAnswer={handleAnswer} answer={answers[0]} />,
    <Question2 key={1} onAnswer={handleAnswer} answer={answers[1]} />,
    <Question3 key={2} onAnswer={handleAnswer} answer={answers[2]} />,
    <Question4 key={3} onAnswer={handleAnswer} answer={answers[3]} />,
  ];

  if (result) {
    return <Result result={result} eventId={1} />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">
        Shinyai.js 第1回 JavaScriptクイズ {currentQuestion + 1}/4
      </h1>
      <form onSubmit={handleSubmit}>
        {questions[currentQuestion]}
        <Button className="mt-4" disabled={isEmpty(answers[currentQuestion])}>
          {currentQuestion < 3 ? "次へ" : "回答を送信"}
        </Button>
      </form>
    </div>
  );
}

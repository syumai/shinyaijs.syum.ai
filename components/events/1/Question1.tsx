import { useState, useEffect, useCallback } from "react";
import { Input } from "@/components/ui/input";
import { Answers } from "./quiz";

type Props = {
  onAnswer: (answer: Answers[0]) => void;
  answer: Answers[0];
};

const defaultAnswer = ["", "", "", ""];

export default function Question1({ onAnswer, answer = defaultAnswer }: Props) {
  const handleChange = (index: number, value: string) => {
    const newAnswer = [...answer];
    newAnswer[index] = value;
    onAnswer(newAnswer);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">問題1</h2>
      <p className="mb-4">以下の4つの入力欄に回答を入力してください。</p>
      {answer.map((input, index) => (
        <Input
          key={index}
          value={input}
          onChange={(e) => handleChange(index, e.target.value)}
          placeholder={`回答 ${index + 1}`}
          className="mb-2"
        />
      ))}
    </div>
  );
}

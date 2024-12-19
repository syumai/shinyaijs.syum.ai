import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle } from "lucide-react";

type Props = {
  result: Result;
  eventId: number;
};

type Result = {
  results: boolean[];
  score: number;
};

const answerUrls: Record<number, string> = {
  1: "https://blog.syum.ai/entry/2024/12/19/094136",
};

export default function Result({ result, eventId }: Props) {
  const url = `https://x.com/intent/tweet?url=https://shinyaijs.syum.ai/events/${eventId}&text=私のShinyai.js第${eventId}回のJavaScriptクイズのスコアは${result.score}/${result.results.length}でした！&hashtags=shinyaijs`;
  const answerUrl = answerUrls[eventId];
  return (
    <div className="container mx-auto px-4 py-8 text-center space-y-4 max-w-md">
      <h1 className="text-2xl font-bold">クイズ結果</h1>
      <p className="text-xl">あなたのスコア: {result.score} / 4</p>

      <ul className="space-y-2">
        {result.results.map((isCorrect, i) => (
          <li
            key={i}
            className="flex items-center space-x-2 p-2 bg-secondary rounded-lg"
          >
            {isCorrect ? (
              <CheckCircle2 className="text-green-500" />
            ) : (
              <XCircle className="text-red-500" />
            )}
            <span>
              問題 {i + 1}: {isCorrect ? "正解" : "不正解"}
            </span>
          </li>
        ))}
      </ul>

      <Button asChild>
        <a href={url} target="_blank" rel="noopener noreferrer">
          結果をXでシェアする
        </a>
      </Button>

      {answerUrl && (
        <div>
          <a
            href={answerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            解答・解説を読む
          </a>
        </div>
      )}
    </div>
  );
}

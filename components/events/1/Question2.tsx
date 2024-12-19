import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Answers } from "./quiz";
import { Card } from "@/components/ui/card";
import { CodeBlock } from "@/components/codeblock";

type Props = {
  onAnswer: (answer: Answers[1]) => void;
  answer: Answers[1];
};

const options = [0, 1, 2, 3, 4] as const;
const isOption = (value: number): value is (typeof options)[number] =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options.includes(value as any);

export default function Question2({ onAnswer, answer }: Props) {
  const onValueChange = (value: string) => {
    const num = Number(value);
    if (!isOption(num)) {
      return;
    }
    onAnswer(num);
  };
  return (
    <div className="space-y-4">
      <Card className="p-4 space-y-4">
        <h1 className="text-2xl font-bold">Question 2</h1>
        <p>
          以下のclass宣言について、有効なもの（ランタイムエラーが発生しないもの）はいくつあるでしょうか？
        </p>
        <CodeBlock lang="javascript">
          {`new class extends (function () {}) {};
new class extends (() => {}) {};
new class extends (async function () {}) {};
new class extends ({}.toString) {};`}
        </CodeBlock>
      </Card>
      <RadioGroup
        onValueChange={onValueChange}
        value={answer !== undefined ? String(answer) : undefined}
      >
        {options.map((num) => (
          <div key={num} className="flex items-center space-x-2">
            <RadioGroupItem value={num.toString()} id={`q2-${num}`} />
            <Label htmlFor={`q2-${num}`}>{num}</Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}

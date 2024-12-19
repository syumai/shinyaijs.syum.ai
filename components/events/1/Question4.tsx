import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Answers } from "./quiz";
import { Card } from "@/components/ui/card";
import { CodeBlock } from "@/components/codeblock";
import { Code } from "@/components/ui/code";

type Props = {
  onAnswer: (answer: Answers[3]) => void;
  answer: Answers[3];
};

const options = ["A", "B", "C", "D"] as const;
const isOption = (value: string): value is (typeof options)[number] =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options.includes(value as any);

export default function Question4({ onAnswer, answer }: Props) {
  const onValueChange = (value: string) => {
    if (!isOption(value)) {
      return;
    }
    onAnswer(value);
  };
  return (
    <div className="space-y-4">
      <Card className="p-4 space-y-4">
        <h1 className="text-2xl font-bold">Question 4</h1>
        <p>
          以下のコードの出力結果は以下の選択肢 A, B, C, D のうちどれでしょうか？
        </p>
        <CodeBlock lang="javascript">
          {`const a = 010;
const b = Number("010");
const c = Number("0010");
console.log(a, b, c);`}
        </CodeBlock>
        <p>
          A: <Code>10 10 10</Code>
        </p>
        <p>
          B: <Code>8 10 10</Code>
        </p>
        <p>
          C: <Code>8 8 10</Code>
        </p>
        <p>
          D: <Code>8 8 8</Code>
        </p>
      </Card>
      <RadioGroup onValueChange={onValueChange} value={answer}>
        {["A", "B", "C", "D"].map((option) => (
          <div key={option} className="flex items-center space-x-2">
            <RadioGroupItem value={option} id={`q4-${option}`} />
            <Label htmlFor={`q4-${option}`}>{option}</Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}

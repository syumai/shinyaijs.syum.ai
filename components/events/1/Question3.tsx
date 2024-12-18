import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Answers } from "./quiz";
import { Card } from "@/components/ui/card";
import { CodeBlock } from "@/components/codeblock";
import { Code } from "@/components/ui/code";

type Props = {
  onAnswer: (answer: Answers[2]) => void;
  answer: Answers[2];
};

const options = ["A", "B"] as const;
const isOption = (value: string): value is (typeof options)[number] =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options.includes(value as any);

export default function Question3({ onAnswer, answer }: Props) {
  const onValueChange = (value: string) => {
    if (!isOption(value)) {
      return;
    }
    onAnswer(value);
  };
  return (
    <div className="space-y-4">
      <Card className="p-6 space-y-4">
        <h1 className="text-2xl font-bold">Question 3</h1>
        <p>
          以下のコードの出力結果は以下の選択肢 A, B のうちどちらでしょうか？
        </p>
        <CodeBlock lang="javascript">
          {`let a = 0;
let b = 0;
let c = 0;
a
++
b
++
c
console.log(a, b, c);`}
        </CodeBlock>
        <p>
          A: <Code>1 1 0</Code>
        </p>
        <p>
          B: <Code>0 1 1</Code>
        </p>
      </Card>
      <RadioGroup onValueChange={onValueChange} value={answer}>
        {options.map((option) => (
          <div key={option} className="flex items-center space-x-2">
            <RadioGroupItem value={option} id={`q3-${option}`} />
            <Label htmlFor={`q3-${option}`}>{option}</Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}

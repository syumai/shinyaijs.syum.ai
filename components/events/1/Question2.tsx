import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Answers } from "./quiz";

type Props = {
  onAnswer: (answer: Answers[1]) => void;
  answer: Answers[1];
};

const options = [0, 1, 2, 3, 4] as const;
const isOption = (value: number): value is (typeof options)[number] =>
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
    <div>
      <h2 className="text-xl font-semibold mb-2">問題2</h2>
      <p className="mb-4">0から5の数字を選択してください。</p>
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

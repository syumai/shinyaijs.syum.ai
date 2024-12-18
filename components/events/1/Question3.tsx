import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Answers } from "./quiz";

type Props = {
  onAnswer: (answer: Answers[2]) => void;
  answer: Answers[2];
};

const options = ["A", "B"] as const;
const isOption = (value: string): value is (typeof options)[number] =>
  options.includes(value as any);

export default function Question3({ onAnswer, answer }: Props) {
  const onValueChange = (value: string) => {
    if (!isOption(value)) {
      return;
    }
    onAnswer(value);
  };
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">問題3</h2>
      <p className="mb-4">AまたはBを選択してください。</p>
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

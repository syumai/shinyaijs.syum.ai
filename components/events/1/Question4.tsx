import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Answers } from "./quiz";

type Props = {
  onAnswer: (answer: Answers[3]) => void;
  answer: Answers[3];
};

const options = ["A", "B", "C", "D"] as const;
const isOption = (value: string): value is (typeof options)[number] =>
  options.includes(value as any);

export default function Question4({ onAnswer, answer }: Props) {
  const onValueChange = (value: string) => {
    if (!isOption(value)) {
      return;
    }
    onAnswer(value);
  };
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">問題4</h2>
      <p className="mb-4">A, B, C, Dのいずれかを選択してください。</p>
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

import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Answers } from "./quiz";
import { CodeBlock } from "@/components/codeblock";
import { Code } from "@/components/ui/code";

type Props = {
  onAnswer: (answer: Answers[0]) => void;
  answer: Answers[0];
};

const defaultAnswer = ["", "", ""];

export default function Question1({ onAnswer, answer = defaultAnswer }: Props) {
  const handleChange = (index: number, value: string) => {
    const newAnswer = [...answer];
    newAnswer[index] = value;
    onAnswer(newAnswer);
  };

  return (
    <div className="space-y-4">
      <Card className="p-4 space-y-4">
        <h1 className="text-2xl font-bold">Question 1</h1>
        <p>
          以下のJavaScriptのコードについて、
          <Code>?</Code>
          の部分を任意の英数字に置き換えて、有効となるものを3つ挙げてください。
        </p>
        <p>
          実行については、ファイル名を
          <Code>script.mjs</Code>
          とし、Node.jsによって
          <Code>node script.mjs</Code>
          のコマンドで実行する (Moduleとして実行する) こととします。
        </p>
        <CodeBlock lang="javascript">
          {`? function () { console.log("Hello!"); };`}
        </CodeBlock>
      </Card>
      {answer.map((input, index) => (
        <Input
          key={index}
          value={input}
          onChange={(e) => handleChange(index, e.target.value)}
          placeholder={`回答 ${index + 1}`}
          className="mb-2"
          autoCorrect="off"
          autoCapitalize="off"
        />
      ))}
    </div>
  );
}

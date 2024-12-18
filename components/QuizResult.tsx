import { Button } from "@/components/ui/button"

type Props = {
  score: number
}

export default function Result({ score }: Props) {
  const handleShare = () => {
    // Xでシェアする処理を実装
    console.log('Sharing to X...')
  }

  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-2xl font-bold mb-4">クイズ結果</h1>
      <p className="text-xl mb-4">あなたのスコア: {score} / 4</p>
      <Button onClick={handleShare}>Xでシェアする</Button>
    </div>
  )
}


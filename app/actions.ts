"use server";

import { Answers as Events1Answers } from "@/components/events/1/quiz";
import { getCloudflareContext } from "@opennextjs/cloudflare";

type EventQuestionAnswer = {
  event_id: number;
  payload: string;
};

const difference = <T>(a: T[], b: T[]): T[] =>
  a.filter((val) => !b.includes(val));

export async function submitEvents1Answers(answers: Events1Answers) {
  if (!answers[0] || !answers[1] || !answers[2] || !answers[3]) {
    throw new Error("invalid answers");
  }

  const db = (await getCloudflareContext()).env.DB;
  const eventQuestionAnswer = await db
    .prepare("SELECT * FROM event_question_answers WHERE event_id = 1")
    .first<EventQuestionAnswer>();
  if (!eventQuestionAnswer) {
    throw new Error("unexpected error: event question answer not found");
  }
  const expectedAnswers = JSON.parse(
    eventQuestionAnswer.payload
  ) as Required<Events1Answers>;

  const results = [
    difference(answers[0], expectedAnswers[0]).length === 0,
    answers[1] === expectedAnswers[1],
    answers[2] === expectedAnswers[2],
    answers[3] === expectedAnswers[3],
  ];
  const score = results.filter((ok) => ok).length;
  return { results, score };
}

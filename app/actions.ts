"use server";

import { Answers as Events1Answers } from "@/components/events/1/quiz";

export async function submitEvents1Answers(answers: Events1Answers) {
  // TODO
  console.log({ answers });
  const score = 1;
  return { score };
}

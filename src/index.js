import { genkit } from "genkit";
import { googleAI } from "@genkit-ai/googleai";

const chat = genkit({
  plugins: [googleAI({ apiKey: "AIzaSyB9xt6r3Mhqy_Fc4dS8JisNIq09dAF1Qm4" })],
  model: googleAI.model("gemini-2.5-flash"),
});

export async function generateChat(prompt) {
  const result = await chat.generate({
    prompt: prompt,
    output: { format: "text" },
  });
  console.log(result.output);
}

generateChat("hello");

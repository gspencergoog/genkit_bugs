import { genkit } from "genkit";
import { googleAI } from "@genkit-ai/googleai";

export const ai = genkit({
  promptDir: "./prompts",
  plugins: [googleAI()],
});

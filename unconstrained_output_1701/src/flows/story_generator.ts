import { ai } from "../ai_instance";
import { z } from "genkit";
import {
  storyGeneratorInputSchema,
  storyGeneratorOutputSchema,
} from "../schemas";

export const storyGeneratorFlow = ai.defineFlow(
  {
    name: "storyGeneratorFlow",
    inputSchema: storyGeneratorInputSchema,
    outputSchema: storyGeneratorOutputSchema,
  },
  async (
    input: z.infer<typeof storyGeneratorInputSchema>
  ): Promise<z.infer<typeof storyGeneratorOutputSchema>> => {
    const { output: stories } = await ai.prompt("story_generator")(input);
    return stories;
  }
);

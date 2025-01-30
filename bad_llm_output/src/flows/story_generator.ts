import { ai } from "../ai_instance";
import { z } from "genkit";
import { storyRankerFlow } from "./story_ranker";
import { sortStoriesFlow } from "./sort_stories";
import { storyGeneratorInputSchema, sortStoriesOutputSchema } from "../schemas";

export const storyGeneratorFlow = ai.defineFlow(
  {
    name: "storyGeneratorFlow",
    inputSchema: storyGeneratorInputSchema,
    outputSchema: sortStoriesOutputSchema,
  },
  async (
    input: z.infer<typeof storyGeneratorInputSchema>
  ): Promise<z.infer<typeof sortStoriesOutputSchema>> => {
    const { output: stories } = await ai.prompt("story_generator")(input);
    const ranked = await storyRankerFlow(stories);
    const sorted = await sortStoriesFlow(ranked);
    return sorted;
  }
);

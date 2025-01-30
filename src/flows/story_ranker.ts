import { ai } from "../ai_instance";
import { z } from "genkit";
import { storyRankerInputSchema, storyRankerOutputSchema } from "../schemas";

export const storyRankerFlow = ai.defineFlow(
  {
    name: "storyRankerFlow",
    inputSchema: storyRankerInputSchema,
    outputSchema: storyRankerOutputSchema,
  },
  async (
    input: z.infer<typeof storyRankerInputSchema>
  ): Promise<z.infer<typeof storyRankerOutputSchema>> => {
    const { output } = await ai.prompt("story_ranker")(input);
    return output;
  }
);

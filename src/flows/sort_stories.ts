import { ai } from "../ai_instance";
import { z } from "genkit";
import { sortStoriesInputSchema, sortStoriesOutputSchema } from "../schemas";

export function sortStories(
  input: z.infer<typeof sortStoriesInputSchema>
): z.infer<typeof sortStoriesOutputSchema> {
  const sortedStories = [...input.rankedStories].sort(
    (a, b) => b.rank - a.rank
  );
  return { sortedStories };
}

export const sortStoriesFlow = ai.defineFlow(
  {
    name: "sortStoriesFlow",
    inputSchema: sortStoriesInputSchema,
    outputSchema: sortStoriesOutputSchema,
  },
  async (
    input: z.infer<typeof sortStoriesInputSchema>
  ): Promise<z.infer<typeof sortStoriesOutputSchema>> => {
    return sortStories(input);
  }
);

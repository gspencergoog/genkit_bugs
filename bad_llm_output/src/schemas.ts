import { z } from "genkit";
import { ai } from "./ai_instance";

export const storyRankerOutputSchema = z.object({
  rankedStories: z
    .array(
      z.object({
        story: z.string().describe("The story that was ranked."),
        rank: z
          .number()
          .describe("The rank of the story, from 1 to 5, 5 being best."),
      })
    )
    .describe("The list of stories with their ranks."),
});

export const storyGeneratorInputSchema = z.object({
  names: z
    .array(z.string())
    .describe("The list of character names to generate stories about."),
});

export const storyGeneratorOutputSchema = z.object({
  stories: z
    .array(z.string())
    .describe("The generated stories, one for each character name."),
});

export const storyRankerInputSchema = storyGeneratorOutputSchema;
export const sortStoriesInputSchema = z.object({
  rankedStories: z
    .array(
      z.object({
        story: z.string().describe("The story that was ranked."),
        rank: z
          .number()
          .describe("The rank of the story, from 1 to 5, 5 being best."),
      })
    )
    .describe("The list of stories with their ranks."),
});

export const sortStoriesOutputSchema = z.object({
  sortedStories: z
    .array(
      z.object({
        story: z.string().describe("The story that was ranked."),
        rank: z
          .number()
          .describe("The rank of the story, from 1 to 5, 5 being best."),
      })
    )
    .describe(
      "The list of stories with their ranks, sorted by rank, highest first."
    ),
});

ai.defineSchema("sortStoriesInputSchema", sortStoriesInputSchema);
ai.defineSchema("sortStoriesOutputSchema", sortStoriesOutputSchema);
ai.defineSchema("storyGeneratorInputSchema", storyGeneratorInputSchema);
ai.defineSchema("storyGeneratorOutputSchema", storyGeneratorOutputSchema);
ai.defineSchema("storyRankerInputSchema", storyRankerInputSchema);
ai.defineSchema("storyRankerOutputSchema", storyRankerOutputSchema);

import { z } from "genkit";
import { ai } from "./ai_instance";

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

ai.defineSchema("storyGeneratorInputSchema", storyGeneratorInputSchema);
ai.defineSchema("storyGeneratorOutputSchema", storyGeneratorOutputSchema);

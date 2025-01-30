"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortStoriesOutputSchema = exports.sortStoriesInputSchema = exports.storyRankerInputSchema = exports.storyGeneratorOutputSchema = exports.storyGeneratorInputSchema = exports.storyRankerOutputSchema = void 0;
const genkit_1 = require("genkit");
const ai_instance_1 = require("./ai_instance");
exports.storyRankerOutputSchema = genkit_1.z.object({
    rankedStories: genkit_1.z
        .array(genkit_1.z.object({
        story: genkit_1.z.string().describe("The story that was ranked."),
        rank: genkit_1.z
            .number()
            .describe("The rank of the story, from 1 to 5, 5 being best."),
    }))
        .describe("The list of stories with their ranks."),
});
exports.storyGeneratorInputSchema = genkit_1.z.object({
    names: genkit_1.z
        .array(genkit_1.z.string())
        .describe("The list of character names to generate stories about."),
});
exports.storyGeneratorOutputSchema = genkit_1.z.object({
    stories: genkit_1.z
        .array(genkit_1.z.string())
        .describe("The generated stories, one for each character name."),
});
exports.storyRankerInputSchema = exports.storyGeneratorOutputSchema;
exports.sortStoriesInputSchema = genkit_1.z.object({
    rankedStories: genkit_1.z
        .array(genkit_1.z.object({
        story: genkit_1.z.string().describe("The story that was ranked."),
        rank: genkit_1.z
            .number()
            .describe("The rank of the story, from 1 to 5, 5 being best."),
    }))
        .describe("The list of stories with their ranks."),
});
exports.sortStoriesOutputSchema = genkit_1.z.object({
    sortedStories: genkit_1.z
        .array(genkit_1.z.object({
        story: genkit_1.z.string().describe("The story that was ranked."),
        rank: genkit_1.z
            .number()
            .describe("The rank of the story, from 1 to 5, 5 being best."),
    }))
        .describe("The list of stories with their ranks, sorted by rank, highest first."),
});
ai_instance_1.ai.defineSchema("sortStoriesInputSchema", exports.sortStoriesInputSchema);
ai_instance_1.ai.defineSchema("sortStoriesOutputSchema", exports.sortStoriesOutputSchema);
ai_instance_1.ai.defineSchema("storyGeneratorInputSchema", exports.storyGeneratorInputSchema);
ai_instance_1.ai.defineSchema("storyGeneratorOutputSchema", exports.storyGeneratorOutputSchema);
ai_instance_1.ai.defineSchema("storyRankerInputSchema", exports.storyRankerInputSchema);
ai_instance_1.ai.defineSchema("storyRankerOutputSchema", exports.storyRankerOutputSchema);
//# sourceMappingURL=schemas.js.map
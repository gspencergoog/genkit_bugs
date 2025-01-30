"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storyGeneratorFlow = void 0;
const ai_instance_1 = require("../ai_instance");
const story_ranker_1 = require("./story_ranker");
const sort_stories_1 = require("./sort_stories");
const schemas_1 = require("../schemas");
exports.storyGeneratorFlow = ai_instance_1.ai.defineFlow({
    name: "storyGeneratorFlow",
    inputSchema: schemas_1.storyGeneratorInputSchema,
    outputSchema: schemas_1.sortStoriesOutputSchema,
}, async (input) => {
    const { output: stories } = await ai_instance_1.ai.prompt("story_generator")(input);
    const ranked = await (0, story_ranker_1.storyRankerFlow)(stories);
    const sorted = await (0, sort_stories_1.sortStoriesFlow)(ranked);
    return sorted;
});
//# sourceMappingURL=story_generator.js.map
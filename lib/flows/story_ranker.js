"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storyRankerFlow = void 0;
const ai_instance_1 = require("../ai_instance");
const schemas_1 = require("../schemas");
exports.storyRankerFlow = ai_instance_1.ai.defineFlow({
    name: "storyRankerFlow",
    inputSchema: schemas_1.storyRankerInputSchema,
    outputSchema: schemas_1.storyRankerOutputSchema,
}, async (input) => {
    const { output } = await ai_instance_1.ai.prompt("story_ranker")(input);
    return output;
});
//# sourceMappingURL=story_ranker.js.map
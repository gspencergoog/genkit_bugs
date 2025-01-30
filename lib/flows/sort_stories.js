"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortStoriesFlow = void 0;
exports.sortStories = sortStories;
const ai_instance_1 = require("../ai_instance");
const schemas_1 = require("../schemas");
function sortStories(input) {
    const sortedStories = [...input.rankedStories].sort((a, b) => b.rank - a.rank);
    return { sortedStories };
}
exports.sortStoriesFlow = ai_instance_1.ai.defineFlow({
    name: "sortStoriesFlow",
    inputSchema: schemas_1.sortStoriesInputSchema,
    outputSchema: schemas_1.sortStoriesOutputSchema,
}, async (input) => {
    return sortStories(input);
});
//# sourceMappingURL=sort_stories.js.map
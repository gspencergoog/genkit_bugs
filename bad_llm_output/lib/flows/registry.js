"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatedFlows = void 0;
const story_generator_1 = require("./story_generator");
const story_ranker_1 = require("./story_ranker");
const sort_stories_1 = require("./sort_stories");
exports.generatedFlows = [
    story_generator_1.storyGeneratorFlow,
    story_ranker_1.storyRankerFlow,
    sort_stories_1.sortStoriesFlow
];
//# sourceMappingURL=registry.js.map
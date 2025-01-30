import { storyGeneratorFlow } from "./story_generator";
import { storyRankerFlow } from "./story_ranker";
import { sortStoriesFlow } from "./sort_stories";

export const generatedFlows = [
  storyGeneratorFlow,
  storyRankerFlow,
  sortStoriesFlow
];

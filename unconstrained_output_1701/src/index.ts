import { startFlowServer } from "@genkit-ai/express";
import { storyGeneratorFlow } from "./flows/story_generator";

startFlowServer({
  flows: [storyGeneratorFlow],
  port: 3405,
});

import { generatedFlows } from "./flows/registry";
import { startFlowServer } from "@genkit-ai/express";
// This is just for referencing the tools symbols so that the imports won't
// appear to be unused. They need to be imported so that the tools will be
// defined, but this array is unused.
const availableTools = [];

startFlowServer({
  flows: generatedFlows,
  port: 3405,
});

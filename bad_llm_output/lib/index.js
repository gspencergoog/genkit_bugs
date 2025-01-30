"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const registry_1 = require("./flows/registry");
const express_1 = require("@genkit-ai/express");
// This is just for referencing the tools symbols so that the imports won't
// appear to be unused. They need to be imported so that the tools will be
// defined, but this array is unused.
const availableTools = [];
(0, express_1.startFlowServer)({
    flows: registry_1.generatedFlows,
    port: 3405,
});
//# sourceMappingURL=index.js.map
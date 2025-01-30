"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ai = void 0;
const genkit_1 = require("genkit");
const googleai_1 = require("@genkit-ai/googleai");
exports.ai = (0, genkit_1.genkit)({
    promptDir: "./prompts",
    plugins: [(0, googleai_1.googleAI)()],
});
//# sourceMappingURL=ai_instance.js.map
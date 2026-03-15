import { ToolCall } from '@langchain/core/messages/tool';
import { Flow, Step, ToolResponseType, ToolType } from '@picoflow/core';
export declare class SymptomsStep extends Step {
    constructor(flow: Flow, isActive?: boolean);
    getPrompt(): string;
    defineTool(): ToolType[];
    getTool(): string[];
    protected capture_symptoms(tool: ToolCall): Promise<ToolResponseType>;
    protected end_chat(_tool: ToolCall): Promise<ToolResponseType>;
}

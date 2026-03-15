import { ToolCall } from '@langchain/core/messages/tool';
import { Flow, Step, ToolResponseType, ToolType } from '@picoflow/core';
export declare class BookingStep extends Step {
    constructor(flow: Flow, isActive?: boolean);
    getPrompt(): string;
    defineTool(): ToolType[];
    getTool(): string[];
    protected book_appointment(tool: ToolCall): Promise<ToolResponseType>;
    protected end_chat(_tool: ToolCall): Promise<ToolResponseType>;
}

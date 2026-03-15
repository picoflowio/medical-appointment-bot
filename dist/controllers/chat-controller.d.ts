import type { FastifyReply } from 'fastify';
import { FlowEngine } from '@picoflow/core';
export declare class ChatController {
    private flowEngine;
    constructor(flowEngine: FlowEngine);
    run(res: FastifyReply, userMessage: string, flowName: string, config: object, sessionId?: string): Promise<void>;
    endChat(res: FastifyReply, sessionId?: string): Promise<void>;
}

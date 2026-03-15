"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const constants_1 = require("@picoflow/core/utils/constants");
const core_1 = require("@picoflow/core");
const core_2 = require("@picoflow/core");
const google_genai_1 = require("@langchain/google-genai");
const api_types_1 = require("./api-types");
const medical_flow_1 = require("../myflow/medical-flow/medical-flow");
let ChatController = class ChatController {
    flowEngine;
    constructor(flowEngine) {
        this.flowEngine = flowEngine;
        flowEngine.registerFlows({ MedicalFlow: medical_flow_1.MedicalFlow });
        flowEngine.registerModel(google_genai_1.ChatGoogleGenerativeAI, {
            model: 'gemini-2.5-pro',
            temperature: core_1.CoreConfig.llmTemperature,
            apiKey: core_1.CoreConfig.GeminiKey,
            maxRetries: core_1.CoreConfig.llmRetry,
        });
    }
    async run(res, userMessage, flowName, config, sessionId = '') {
        await this.flowEngine.run(res, flowName, userMessage, sessionId, config);
    }
    async endChat(res, sessionId = '') {
        const result = await this.flowEngine.endChat(sessionId);
        if (!result.success) {
            res.status(common_1.HttpStatus.BAD_REQUEST);
        }
        res.send(result);
    }
};
exports.ChatController = ChatController;
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)('run'),
    (0, swagger_1.ApiHeader)({
        name: 'CHAT_SESSION_ID',
        description: 'Chat session identifier',
        required: false,
    }),
    (0, swagger_1.ApiBody)({ type: api_types_1.ApiRunBodyDto }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Bot responded successfully',
        type: api_types_1.ApiRunResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Bot encountered problems',
        type: api_types_1.ApiRunResponse400Dto,
    }),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)(constants_1.K.message)),
    __param(2, (0, common_1.Body)(constants_1.K.flowName)),
    __param(3, (0, common_1.Body)('config')),
    __param(4, (0, common_1.Headers)(constants_1.K.ChatSessionID)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, Object, String]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "run", null);
__decorate([
    (0, common_1.Post)('end'),
    (0, swagger_1.ApiHeader)({
        name: 'CHAT_SESSION_ID',
        description: 'Chat session identifier',
        required: true,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Bot responded successfully',
        type: api_types_1.ApiEndResponseDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Bot encountered problems',
        type: api_types_1.ApiEndResponse400Dto,
    }),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Headers)(constants_1.K.ChatSessionID)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ChatController.prototype, "endChat", null);
exports.ChatController = ChatController = __decorate([
    (0, swagger_1.ApiTags)('ai'),
    (0, common_1.Controller)('ai'),
    __metadata("design:paramtypes", [core_2.FlowEngine])
], ChatController);
//# sourceMappingURL=chat-controller.js.map
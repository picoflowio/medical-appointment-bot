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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiEndResponse400Dto = exports.ApiEndResponseDto = exports.ApiRunResponse400Dto = exports.ApiRunResponseDto = exports.ApiRunBodyDto = exports.ApiConfigDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class ApiConfigDto {
    fileName;
}
exports.ApiConfigDto = ApiConfigDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        minLength: 1,
        description: 'file name for source file',
        example: 'hotel.pdf',
        required: true,
    }),
    __metadata("design:type", String)
], ApiConfigDto.prototype, "fileName", void 0);
class ApiRunBodyDto {
    userMessage;
    flowName;
    config;
}
exports.ApiRunBodyDto = ApiRunBodyDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        minLength: 1,
        description: 'First user message to AI',
        example: 'Hi',
        required: false,
    }),
    __metadata("design:type", String)
], ApiRunBodyDto.prototype, "userMessage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        minLength: 1,
        description: 'Name of the Flow',
        example: 'HotelFlow',
        required: true,
    }),
    __metadata("design:type", String)
], ApiRunBodyDto.prototype, "flowName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        minLength: 1,
        description: 'Configuration JSON',
        example: {
            fileName: '<optional additional config>',
        },
        required: false,
    }),
    __metadata("design:type", ApiConfigDto)
], ApiRunBodyDto.prototype, "config", void 0);
class ApiRunResponseDto {
    success;
    completed;
    message;
    session;
}
exports.ApiRunResponseDto = ApiRunResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'If AI call is good',
        example: true,
        required: true,
    }),
    __metadata("design:type", Boolean)
], ApiRunResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'If AI call is completed, conversational will take many trips to complete',
        example: true,
        required: true,
    }),
    __metadata("design:type", Boolean)
], ApiRunResponseDto.prototype, "completed", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'resulting AI response',
        example: "Hello! I can help you compare the current day temperatures of two cities. Please enter the names of two cities you'd like to compare.",
        required: true,
    }),
    __metadata("design:type", String)
], ApiRunResponseDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Session ID created for traceability',
        example: '6870216993a135e7deb762c7',
        required: true,
    }),
    __metadata("design:type", String)
], ApiRunResponseDto.prototype, "session", void 0);
class ApiRunResponse400Dto {
    success;
    completed;
    message;
}
exports.ApiRunResponse400Dto = ApiRunResponse400Dto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'If AI call is good',
        example: false,
        required: true,
    }),
    __metadata("design:type", Boolean)
], ApiRunResponse400Dto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'If AI call is completed, conversational will take many trips to complete',
        example: true,
        required: true,
    }),
    __metadata("design:type", Boolean)
], ApiRunResponse400Dto.prototype, "completed", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'resulting AI response',
        example: "FlowClass  'DemoFlow' not registered.",
        required: true,
    }),
    __metadata("design:type", String)
], ApiRunResponse400Dto.prototype, "message", void 0);
class ApiEndResponseDto {
    success;
    session;
}
exports.ApiEndResponseDto = ApiEndResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'If AI call is good',
        example: true,
        required: true,
    }),
    __metadata("design:type", Boolean)
], ApiEndResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Session ID created for traceability',
        example: '6870297e35bb57550b61d672',
        required: true,
    }),
    __metadata("design:type", String)
], ApiEndResponseDto.prototype, "session", void 0);
class ApiEndResponse400Dto {
    success;
    message;
    session;
}
exports.ApiEndResponse400Dto = ApiEndResponse400Dto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'If AI call is good',
        example: false,
        required: true,
    }),
    __metadata("design:type", Boolean)
], ApiEndResponse400Dto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'resulting AI response',
        example: 'Delete session 6870297e35bb57550b61d672 failed',
        required: true,
    }),
    __metadata("design:type", String)
], ApiEndResponse400Dto.prototype, "message", void 0);
//# sourceMappingURL=api-types.js.map
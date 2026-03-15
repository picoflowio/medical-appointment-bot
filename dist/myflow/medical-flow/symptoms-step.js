"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SymptomsStep = void 0;
const core_1 = require("@picoflow/core");
const zod_1 = require("zod");
const booking_step_1 = require("./booking-step");
class SymptomsStep extends core_1.Step {
    constructor(flow, isActive) {
        super(SymptomsStep, flow, isActive);
    }
    getPrompt() {
        return "You are a helpful medical receptionist. Ask the user for their symptoms and reason for visit. Once you have a clear reason, use the `capture_symptoms` tool.";
    }
    defineTool() {
        return [
            {
                name: 'capture_symptoms',
                description: 'Capture user symptoms to find an appropriate doctor',
                schema: zod_1.z.object({
                    symptoms: zod_1.z.string().describe('The reported symptoms or reason for visit'),
                }),
            },
        ];
    }
    getTool() {
        return ['capture_symptoms', 'end_chat'];
    }
    async capture_symptoms(tool) {
        const { symptoms } = tool.args;
        this.saveState({ symptoms });
        const doctors = [
            { name: 'Dr. Smith', specialty: 'General Practice', availableTimes: ['10:00 AM', '2:00 PM'] },
            { name: 'Dr. Jones', specialty: 'Specialist', availableTimes: ['11:00 AM', '3:00 PM'] }
        ];
        return {
            step: booking_step_1.BookingStep,
            state: { doctors }
        };
    }
    async end_chat(_tool) {
        return core_1.EndStep;
    }
}
exports.SymptomsStep = SymptomsStep;
//# sourceMappingURL=symptoms-step.js.map
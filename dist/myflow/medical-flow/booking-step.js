"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingStep = void 0;
const core_1 = require("@picoflow/core");
const zod_1 = require("zod");
class BookingStep extends core_1.Step {
    constructor(flow, isActive) {
        super(BookingStep, flow, isActive);
    }
    getPrompt() {
        const doctors = this.getState('doctors');
        const symptoms = this.getState('symptoms');
        return `You have the user's symptoms: ${symptoms}. Here are the available doctors: ${JSON.stringify(doctors)}. Help the user pick a doctor and an available time slot. Once they decide, use the 'book_appointment' tool.`;
    }
    defineTool() {
        return [
            {
                name: 'book_appointment',
                description: 'Book an appointment with the selected doctor at the chosen time.',
                schema: zod_1.z.object({
                    doctorName: zod_1.z.string().describe('Name of the selected doctor'),
                    timeSlot: zod_1.z.string().describe('The chosen time slot'),
                }),
            },
        ];
    }
    getTool() {
        return ['book_appointment', 'end_chat'];
    }
    async book_appointment(tool) {
        const { doctorName, timeSlot } = tool.args;
        this.saveState({ doctorName, timeSlot, booked: true });
        return {
            step: core_1.EndStep,
            tool: `Successfully booked with ${doctorName} at ${timeSlot}. Thank you!`,
        };
    }
    async end_chat(_tool) {
        return core_1.EndStep;
    }
}
exports.BookingStep = BookingStep;
//# sourceMappingURL=booking-step.js.map
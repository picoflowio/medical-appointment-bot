"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicalFlow = void 0;
const core_1 = require("@picoflow/core");
const symptoms_step_1 = require("./symptoms-step");
const booking_step_1 = require("./booking-step");
class MedicalFlow extends core_1.Flow {
    constructor() {
        super(MedicalFlow);
    }
    defineSteps() {
        const model = 'gemini-2.5-pro';
        return [
            new symptoms_step_1.SymptomsStep(this, true).setTemperature(0.5).useModel(model),
            new booking_step_1.BookingStep(this, false).useModel(model),
            new core_1.EndStep(this).useMemory('end').useModel(model),
        ];
    }
}
exports.MedicalFlow = MedicalFlow;
//# sourceMappingURL=medical-flow.js.map
import { EndStep, Flow, Step } from '@picoflow/core';
import { SymptomsStep } from './symptoms-step';
import { BookingStep } from './booking-step';

export class MedicalFlow extends Flow {
  public constructor() {
    super(MedicalFlow);
  }

  protected defineSteps(): Step[] {
    const model = 'gemini-2.5-pro';
    return [
      new SymptomsStep(this, true).setTemperature(0.5).useModel(model),
      new BookingStep(this, false).useModel(model),
      new EndStep(this).useMemory('end').useModel(model),
    ];
  }
}

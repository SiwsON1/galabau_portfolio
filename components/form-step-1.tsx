import React from 'react';
import { Control } from 'react-hook-form';
import { WireThickness1 } from './wire-thicknes-form-3';
import { WireMountingColor } from './wire-color';
import { Inputs } from './form';

// Przyjmujemy typ Inputs jako część naszego procesu typowania
interface StepWireThicknessProps {
  control: Control<Inputs>;
}

const StepWireThickness: React.FC<StepWireThicknessProps> = ({ control }) => (
  <div className="flex flex-col gap-y-10 items-center">
    <WireThickness1 control={control} />
    <WireMountingColor control={control} />
  </div>
);

export default StepWireThickness;
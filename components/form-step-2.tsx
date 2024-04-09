import React from 'react';
import { Control } from 'react-hook-form';
import { Inputs } from './form';
import { FenceCover } from './wire-cover';
import { WireMounting } from './wire-mounting';

// Przyjmujemy typ Inputs jako część naszego procesu typowania
interface StepWireMountingProps {
  control: Control<Inputs>;
}

const StepWireMounting: React.FC<StepWireMountingProps> = ({ control }) => (
  <div className="flex flex-col gap-y-10 items-center justify-center">
    <FenceCover control={control} />
    <WireMounting control={control} />
  </div>
);

export default StepWireMounting;
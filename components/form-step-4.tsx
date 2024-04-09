import React from 'react';
import { Control } from 'react-hook-form';
import { Inputs } from './form'; // Załóżmy, że formularz i typy są zdefiniowane w pliku form.ts
import { GateCheck } from './gate-checkbox';
import { GateForm } from './gate-form';
import { GateSize } from './gate-size';
import { GateWidth } from './gate-width';


interface StepGateProps {
  control: Control<Inputs>;
  gateNeeded?: boolean;
}

const StepGate: React.FC<StepGateProps> = ({ control, gateNeeded }) => (
  <div className="flex flex-col items-center w-full">
    <GateCheck control={control} />
    {gateNeeded && (
      <>
        <GateForm control={control} />
        <div className="flex flex-col md:flex-row justify-center gap-10 mt-10">
          <GateSize control={control} />
          <GateWidth control={control} />
        </div>
      </>
    )}
  </div>
);

export default StepGate;
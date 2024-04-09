import React from 'react';
import { Control } from 'react-hook-form';
import { Inputs } from './form';
import { WireLength } from './wire-length';
import { WireCorners } from './wire-corners';
import { WireSize } from './wire-size';


// Przyjmujemy typ Inputs jako część naszego procesu typowania
interface StepWireLengthProps {
  control: Control<Inputs>;
}

const StepWireLength: React.FC<StepWireLengthProps> = ({ control }) => (
    <div className="flex flex-col items-center justify-center w-full gap-10 p-10">

  <div className="w-full md:w-3/4 lg:w-1/4 mx-auto">
    <WireLength control={control} />
    <WireCorners control={control} />
  </div>
  <div className="w-full md:w-3/4 lg:w-1/4 mx-auto p-10">
  <WireSize control={control} />
</div>
</div>
);

export default StepWireLength;
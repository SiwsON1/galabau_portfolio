import React from 'react';
import { Control } from 'react-hook-form';
import { Inputs } from './form';
import { DeliveryForm } from './delivery-form';

// Przyjmujemy typ Inputs jako część naszego procesu typowania
interface StepWireDeliveryProps {
  control: Control<Inputs>;
}

const StepWireDelivery: React.FC<StepWireDeliveryProps> = ({ control }) => (
  <div className="flex flex-col items-center  w-full">
    <DeliveryForm control={control} />
  </div>
);

export default StepWireDelivery;
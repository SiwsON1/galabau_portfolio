import React from 'react';
import { Control } from 'react-hook-form';
import { Inputs } from './form'; // Załóżmy, że Inputs to Twój typ danych formularza
import { OrderSummary } from './order-summary'; // Upewnij się, że ścieżka do OrderSummary jest prawidłowa

interface StepOrderSummaryProps {
  price: number;
  formData: Inputs; // Tutaj używamy typu danych formularza
}

const StepOrderSummary: React.FC<StepOrderSummaryProps> = ({  price, formData }) => (
  <div className="flex flex-col gap-y-10 items-center">
    {/* Tutaj renderujesz OrderSummary z przekazanymi propsami */}
    <OrderSummary price={price} formData={formData} />
  </div>
);

export default StepOrderSummary;
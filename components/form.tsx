"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const FormSchema = z.object({
  height: z.enum(['830mm', '1230mm', '1830mm']),
  color: z.enum(['Grün', 'Anthrazit', 'Schwarz']),
});

type Inputs = z.infer<typeof FormSchema>;

const steps = [
  {
    id: 'Schritt 1',
    name: 'Höhenwahl',
    fields: ['height']
  },
  {
    id: 'Schritt 2',
    name: 'Farbauswahl',
    fields: ['color']
  },
  { id: 'Schritt 3', name: 'Abschluss' }
];

export default function FenceForm() {
    const [previousStep, setPreviousStep] = useState(0);
    const [currentStep, setCurrentStep] = useState(0);
    const delta = currentStep - previousStep;

    const form = useForm<Inputs>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
        height: '830mm',
        color: 'Grün',
      }
    });

    const { control, handleSubmit, formState: { errors } } = form;

    const processForm: SubmitHandler<Inputs> = data => {
      console.log(data);
    };

    const next = () => {
      if (currentStep < steps.length - 1) {
        setPreviousStep(currentStep);
        setCurrentStep(step => step + 1);
      }
    };

    const prev = () => {
      if (currentStep > 0) {
        setPreviousStep(currentStep);
        setCurrentStep(step => step - 1);
      }
    };

  return (
    <section className='flex flex-col justify-between p-24'>
      <nav aria-label='Progress'>
        <ol role='list' className='flex space-x-4 md:space-x-8'>
          {steps.map((step, index) => (
            <li key={step.name} className='flex-1'>
              <div className={`flex items-center space-x-2 p-2 transition-all duration-300 ease-in-out ${currentStep >= index ? 'bg-sky-600 text-white shadow-lg' : 'bg-gray-200 text-gray-500'} rounded-lg`}>
                <div className={`h-4 w-4 flex items-center justify-center rounded-full ${currentStep >= index ? 'bg-white text-sky-600' : 'bg-gray-300 text-gray-500'} shadow`}>
                  {index + 1}
                </div>
                <span className='text-sm font-medium'>
                  {step.name}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </nav>

      <Form {...form} >
      <form onSubmit={handleSubmit(processForm)} className="mt-12 py-12 space-y-8">
        {currentStep === 0 && (
          <motion.div
            initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <h2 className='text-base font-semibold leading-7 text-gray-900'>
              Höhenwahl
            </h2>
            <FormField
              control={control}
              name="height"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Höhe des Zauns</FormLabel>
                  <FormControl>
                    <Select {...field}>
                      <SelectTrigger>
                        <SelectValue placeholder="Wählen Sie eine Höhe" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="830mm">830mm</SelectItem>
                        <SelectItem value="1230mm">1230mm</SelectItem>
                        <SelectItem value="1830mm">1830mm</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  {errors.height && <FormMessage>{errors.height.message}</FormMessage>}
                </FormItem>
              )}
            />
          </motion.div>
        )}

        {currentStep === 1 && (
          <motion.div
            initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <h2 className='text-base font-semibold leading-7 text-gray-900'>
              Farbauswahl
            </h2>
            <FormField
              control={control}
              name="color"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Farbe des Zauns</FormLabel>
                  <FormControl>
                    <Select {...field}>
                      <SelectTrigger>
                        <SelectValue placeholder="Wählen Sie eine Farbe" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Grün">Grün</SelectItem>
                        <SelectItem value="Anthrazit">Anthrazit</SelectItem>
                        <SelectItem value="Schwarz">Schwarz</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  {errors.color && <FormMessage>{errors.color.message}</FormMessage>}
                </FormItem>
              )}
            />
          </motion.div>
        )}

        {currentStep === 2 && (
          <motion.div
            initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <h2 className='text-base font-semibold leading-7 text-gray-900'>
              Abschluss
            </h2>
            <p className='mt-1 text-sm leading-6 text-gray-600'>
              Vielen Dank für Ihre Angaben!
            </p>
          </motion.div>
        )}

<div className='mt-8 pt-5'>
  <div className='flex justify-between'>
    <button
      type='button'
      onClick={prev}
      disabled={currentStep === 0}
      className='rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth='1.5'
        stroke='currentColor'
        className='h-6 w-6'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M15.75 19.5L8.25 12l7.5-7.5'
        />
      </svg>
    </button>
    <button
      type='button'
      onClick={next}
      disabled={currentStep === steps.length - 1}
      className='rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth='1.5'
        stroke='currentColor'
        className='h-6 w-6'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M8.25 4.5l7.5 7.5-7.5 7.5'
        />
      </svg>
    </button>
  </div>
</div>
</form>
      </Form>
    </section>
  );
}
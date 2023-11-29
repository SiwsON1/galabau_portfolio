"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import { useState } from "react";
import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";
import * as z from "zod";
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
import { WireThickness } from "./wire-thickness-form";
import { FormDataSchema } from "@/lib/schema";
import { WireSize } from "./wire-size";
import { WireLength } from "./wire-length";
import { WireThickness1 } from "./wire-thicknes-form-3";
import { ColorSelection } from "./wire-color";
import { WireThickness5 } from "./colors";
import { WireCorners } from "./wire-corners";
import { UserForm } from "./user-form";
import { WireMounting } from "./wire-mounting";

type Inputs = z.infer<typeof FormDataSchema>;

type Step = {
  id: string;
  name: string;
  fields?: string[];
};

const steps = [
  {
    id: "Schritt 1",
    name: "Drahtstärke",
    fields: ["height"],
  },
  {
    id: "Schritt 2",
    name: "Farbauswahl",
    fields: ["color"],
  },
  { id: "Schritt 3", name: "Abschluss" },
  { id: "Schritt 4", name: "Use Client" },
];

export default function FenceForm() {
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [isFormValid, setIsFormValid] = useState(false);

  const delta = currentStep - previousStep;

  const form = useForm<Inputs>({
    resolver: zodResolver(FormDataSchema),
    defaultValues: {
      length: "",
      color: "",
      fenceSize: 0.63,
      drahtstaerke: "",
      corners: "",
      mounting: "",
      vorname: "",
      nachname: "",
      email: "",
      emailConfirm: "",
      telefon: "",
      postleitzahl: "",
      stadt: "",
      anmerkungen: "",
      datenschutz: false,
    },
  });

  console.log(form.watch());

  const {
    control,
    handleSubmit,
    getValues,

    formState: { errors },
  } = form;

  const processForm: SubmitHandler<Inputs> = (data) => {
    console.log("Form data:", data);
  };

  const next = () => {
    if (currentStep < steps.length - 1) {
      // Wyodrębnij aktywne pola dla bieżącego kroku
      const activeFields = steps[currentStep].fields || [];

      // Typowanie zmiennej currentData
      let currentData: Partial<Inputs> = {};

      if (activeFields.length > 0) {
        // Pobranie wartości tylko dla aktywnych pól
        currentData = getValues(activeFields as any) as Partial<Inputs>;
      }

      console.log("Dane z bieżącego kroku:", currentData);

      setPreviousStep(currentStep);
      setCurrentStep(currentStep + 1);
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step - 1);
    }
  };

  return (
    <section className="flex flex-col justify-between p-8">
      <nav aria-label="Progress">
        <ol role="list" className="hidden md:flex space-x-4 md:space-x-8">
          {steps.map((step, index) => (
            <li key={step.name} className="flex-1">
              <div
                className={`flex items-center space-x-2 p-2 transition-all duration-300 ease-in-out ${
                  currentStep >= index
                    ? "bg-blue1 text-white shadow-lg"
                    : "bg-gray-200 text-anthracit1"
                } rounded-lg`}
              >
                <div
                  className={`h-4 w-4 flex items-center justify-center rounded-full ${
                    currentStep >= index
                      ? "bg-white text-blue1"
                      : "bg-gray-300 text-anthracit1"
                  } shadow`}
                >
                  {index + 1}
                </div>
                <span className="text-sm font-medium">{step.name}</span>
              </div>
            </li>
          ))}
        </ol>
        {/* Pokaż kropki na małych ekranach, ukryj na średnich i większych */}
        <div className="md:hidden flex space-x-1 justify-center">
          {steps.map((step, index) => (
            <div
              key={step.name}
              className={`h-2 w-2 rounded-full ${
                currentStep >= index ? "bg-blue1" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </nav>

      <Form {...form}>
        <form
          onSubmit={handleSubmit(processForm)}
          className="mt-12 py-12 space-y-8"
        >
          {currentStep === 0 && (
            <motion.div
              initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="flex flex-col gap-y-10 items-center ">
                <WireThickness1 control={control} />
                <WireThickness5 control={control} />
              </div>
            </motion.div>
          )}
          {currentStep === 1 && (
            <motion.div
              initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="flex flex-col gap-y-10 items-center justify-center">
                <WireMounting control={control} />
              </div>
            </motion.div>
          )}
          {currentStep === 2 && (
  <motion.div
    initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
    className="flex flex-col items-center justify-center bg-center bg-cover relative"
  >
    {/* Kontener na WireSize i WireCorners */}
    <div className="flex flex-col md:flex-row items-center justify-center gap-20 p-4">
    <WireLength control={control} />
      <WireCorners control={control} />
    </div>

    {/* WireLength pod WireSize i WireCorners */}
    <div className="w-full p-4 mt-10">
    <WireSize control={control} />

    </div>
  </motion.div>
)}

          {currentStep === 3 && (
            <motion.div
              initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <UserForm control={control} />
            </motion.div>
          )}

          <div className="mt-8 pt-5">
            <div className="flex justify-between">
              <button
                type="button"
                onClick={prev}
                disabled={currentStep === 0}
                className="rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
              <button
                type="button"
                onClick={next}
                disabled={currentStep === steps.length - 1}
                className="rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <Button type="submit" disabled={currentStep !== steps.length - 1}>
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </section>
  );
}

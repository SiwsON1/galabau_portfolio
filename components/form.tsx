"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useForm, SubmitHandler, FieldName } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { FormDataSchema } from "@/lib/schema";

import { WireThickness1 } from "./wire-thicknes-form-3";

import { ArrowBigLeftDash, ArrowBigRightDash } from "lucide-react";

import { useEffect } from "react";

import axios from "axios";
import toast from "react-hot-toast";
import { ExtendedPrice } from "@/actions/get-prices";

import Loader from "./Loader";
import { calculatePrice } from "@/lib/calculateprice";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

import { CombinedPrices } from "@/app/(main)/page";
import dynamic from "next/dynamic";
import { UserForm } from "./user-form";
import OrderCompletion from "./order-completion";

const StepWireThickness = dynamic(() => import("./form-step-1"));
const StepWireMounting = dynamic(() => import("./form-step-2"));
const StepWireLength = dynamic(() => import("./form-step-3"));
const StepWireGate = dynamic(() => import("./form-step-4"));
const StepWireDelivery = dynamic(() => import("./form-step-5"));
const StepOrderSummary = dynamic(() => import('./form-step-6'));



interface FormProps {
  prices: CombinedPrices;
}
export type Inputs = z.infer<typeof FormDataSchema>;

type Step = {
  id: string;
  name: string;
  fields?: string[];
};

const steps = [
  {
    id: "Schritt 1",
    name: "Drahtstärke",
    fields: ["drahtstaerke", "color"],
  },
  {
    id: "Schritt 2",
    name: "Pfostentyp",
    fields: ["mounting", "fenceCover"],
  },
  { id: "Schritt 3", name: "Maße", fields: ["length", "corner", "fenceSize"] },
  {
    id: "Schritt 4",
    name: "Toranlage",
    fields: ["gate", "gateNeeded", "gateSize", "gateWidth"],
  },
  { id: "Schritt 5", name: "Lieferung", fields: ["delivery"] },
  { id: "Schritt 6", name: "Confirmation" },
  {
    id: "Schritt 7",
    name: "Use Client",
    fields: [
      "vorname",
      "nachname",
      "email",
      "emailConfirm",
      "telefon",
      "postleitzahl",
      "stadt",
      "anmerkungen",
      "datenschutz",
    ],
  },
  { id: "Schritt 8", name: "Ordered" },
];

const FenceForm: React.FC<FormProps> = ({ prices }) => {
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [isFormValid, setIsFormValid] = useState(false);
  const [price, setPrice] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  type PriceList = {
    [key: string]: { [key: string]: number[] };
  };

  const { executeRecaptcha } = useGoogleReCaptcha();

  const calculateTotalPrice = () => {
    const formData = getValues(); // Pobierz dane formularza
    console.log("Dane formularza:", formData);

    // Przygotuj dane do obliczenia ceny
    const standardPrices = prices.standardPrices;
    const additionalPrices = {
      corners: prices.additionalPrices.corners,
    };

    // Wywołaj zaimportowaną funkcję calculatePrice
    const totalPrice = calculatePrice(formData, { standardPrices });
    console.log("Łączna cena:", totalPrice);

    // Ustawienie końcowej ceny
    setPrice(totalPrice);
  };
  const delta = currentStep - previousStep;

  const form = useForm<Inputs>({
    resolver: zodResolver(FormDataSchema),
    defaultValues: {
      length: "",
      color: "",
      fenceSize: "",
      drahtstaerke: "",
      corner: "",
      fenceCover: "",
      mounting: "",
      gate: "",
      vorname: "",
      nachname: "",
      gateSize: "",
      gateWidth: "",
      email: "",
      emailConfirm: "",
      telefon: "",
      postleitzahl: "",
      stadt: "",
      anmerkungen: "",
      datenschutz: false,
      delivery: "",
    },
  });

  console.log(form.watch());

  const {
    control,
    handleSubmit,
    trigger,
    getValues,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = form;

  const gateNeeded = watch("gateNeeded");

  const processForm: SubmitHandler<Inputs> = async (data) => {
    // Jeśli brama nie jest potrzebna, ustaw wartość 'none'
    if (!data.gateNeeded) {
      data.gate = "none";
    }

    // Wykonaj reCAPTCHA przed wysłaniem formularza
    if (!executeRecaptcha) {
      console.log("Execute recaptcha not available");
      toast.error("Die reCAPTCHA-Überprüfung ist fehlgeschlagen");
      return;
    }

    const gRecaptchaToken = await executeRecaptcha("submitForm");

    try {
      // Dołącz token reCAPTCHA do danych formularza
      const formDataWithCaptcha = { ...data, gRecaptchaToken, price };

      toast.success("Ihre Bestellung wird bearbeitet");
      const formResponse = await axios.post("/api/forms", formDataWithCaptcha);

      if (formResponse.status === 200) {
        // Po pomyślnym przetworzeniu formularza, wysyłanie danych do API wysyłania e-maili
        await axios.post("/api/sendEmail", formDataWithCaptcha);

        toast.success("Bestellung erstellt und E-Mail gesendet");
        reset();
      } else {
        // Obsługa błędów odpowiedzi z API formularza
        toast.error(
          "Ein Fehler ist bei der Verarbeitung des Formulars aufgetreten"
        );
      }
    } catch (error) {
      // Obsługa innych błędów (np. związanych z siecią)
      console.error("Fehler:", error);
      toast.error(
        "Ein Fehler ist bei der Verarbeitung Ihrer Bestellung aufgetreten"
      );
    }
  };
  const drahtstaerke = watch("drahtstaerke");
  const color = watch("color");
  const length = watch("length");
  const corner = watch("corner");
  const fenceSize = watch("fenceSize");
  const mountingType = watch("mounting");

  useEffect(() => {
    // Wywołanie funkcji calculatePrice kiedykolwiek zmieniają się obserwowane wartości
    calculateTotalPrice();
  }, [drahtstaerke, color, length, corner, fenceSize, mountingType]); // Dodaj zmienne jako zależności

  type FieldName = keyof Inputs;

  const next = async () => {
    if (currentStep < steps.length - 1) {
      // Wyodrębnij aktywne pola dla bieżącego kroku
      const activeFields = steps[currentStep].fields || [];
      const output = await trigger(activeFields as FieldName[], {
        shouldFocus: true,
      });

      if (!output) return;

      if (currentStep < steps.length - 1) {
        if (currentStep === steps.length - 2) {
          setIsLoading(true);
          await handleSubmit(processForm)();
          setCurrentStep((step) => step + 1);
          setIsLoading(false);
        }
      }
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

  useEffect(() => {
    if (!gateNeeded) {
      setValue("gate", "none");
      setValue("gateSize", "");
      setValue("gateWidth", "");
    }
  }, [gateNeeded, setValue]);

  return (
    <section className="flex flex-col justify-between p-8">
      <nav aria-label="Progress">
        <ol role="list" className="hidden md:flex items-center justify-center">
          {steps.map((step, index) => (
            <li key={step.name} className="flex items-center">
              {/* Linia łącząca (dla wszystkich oprócz pierwszego kroku) */}
              {index !== 0 && (
                <div
                  className={`w-8 h-1 ${
                    currentStep > index ? "bg-blue-500" : "bg-gray-300"
                  }`}
                ></div>
              )}

              {/* Element kroku */}
              <div
                className={`flex items-center ${index !== 0 ? "ml-2" : ""} ${
                  index !== steps.length - 1 ? "mr-2" : ""
                } p-3 ${
                  currentStep >= index
                    ? "bg-blue1 text-white shadow-lg"
                    : "bg-gray-200 text-anthracit1"
                } rounded-full cursor-pointer`}
                onClick={() => {
                  /* funkcja nawigacji do konkretnego kroku */
                }}
              >
                <div
                  className={`h-6 w-6 flex items-center justify-center rounded-full ${
                    currentStep >= index
                      ? "bg-white text-blue1"
                      : "bg-gray-300 text-anthracit1"
                  } shadow`}
                >
                  {index + 1}
                </div>
                <span className="text-xs font-medium ml-2 hidden lg:inline">
                  {step.name}
                </span>
              </div>
            </li>
          ))}
        </ol>
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
          className="mt-12 py-8 space-y-8"
        >
          {currentStep === 0 && (
            <motion.div
              initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <StepWireThickness control={control} />
            </motion.div>
          )}
          {currentStep === 1 && (
            <motion.div
              initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <StepWireMounting control={control} />
            </motion.div>
          )}
          {currentStep === 2 && (
            <motion.div
              initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                <StepWireLength control={control} />
            </motion.div>
          )}

          {currentStep === 3 && (
            <motion.div
              initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
    <StepWireGate control={control} gateNeeded={gateNeeded} />

            </motion.div>
          )}

          {currentStep === 4 && (
            <motion.div
              initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                <StepWireDelivery control={control} />

            </motion.div>
          )}
          {currentStep === 5 && (
            <motion.div
              initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="flex  items-center justify-center">
                <StepOrderSummary price={price} formData={getValues()} />
              </div>
            </motion.div>
          )}

          {currentStep === 6 && (
            <motion.div
              initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {isLoading ? <Loader /> : <UserForm control={control} />}
            </motion.div>
          )}

          {currentStep === 7 && (
            <motion.div
              initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <OrderCompletion />
            </motion.div>
          )}
          <div className="mt-8 pt-5">
            <div className="flex justify-between">
              <button
                type="button"
                onClick={prev}
                disabled={currentStep === 0}
                className="rounded-lg h-11 px-8 py-2 bg-steelblue text-white font-semibold shadow-sm  hover:bg-darksteelblue disabled:cursor-not-allowed disabled:opacity-50"
              >
                <ArrowBigLeftDash />
              </button>

              <button
                type="button"
                onClick={next}
                className="rounded-lg h-11 px-8 py-2 bg-steelblue text-white font-semibold shadow-sm ring-1   hover:bg-darksteelblue disabled:cursor-not-allowed disabled:opacity-50"
              >
                <ArrowBigRightDash />
              </button>
            </div>
          </div>
        </form>
      </Form>
    </section>
  );
};
export default FenceForm;

"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import { useState } from "react";
import { motion } from "framer-motion";
import { useForm, SubmitHandler, FieldName } from "react-hook-form";
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
import { WireThickness5 } from "./colors";
import { WireCorners } from "./wire-corners";
import { UserForm } from "./user-form";
import { WireMounting } from "./wire-mounting";
import { ArrowBigLeftDash, ArrowBigRightDash } from "lucide-react";
import { WireMountingColor } from "./wire-color";
import { DeliveryForm } from "./delivery-form";
import { GateForm } from "./gate-form";
import { useEffect } from "react";
import { OrderSummary } from "./order-summary";
import axios from "axios";
import toast from "react-hot-toast";
import { ExtendedPrice } from "@/actions/get-prices";


interface FormProps {
  prices: ExtendedPrice[];
}
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
    fields: ["drahtstaerke", "color"],
  },
  {
    id: "Schritt 2",
    name: "Pfostentyp",
    fields: ["mounting"],
  },
  { id: "Schritt 3", name: "Maße", fields: ["length", "corners", "fenceSize"] },
  { id: "Schritt 4", name: "Toranlage", fields: ["gate"] },
  { id: "Schritt 5", name: "Lieferung", fields: ["delivery"] },
  { id: "Schritt 6", name: "Confirmation"},
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
  { id: "Schritt 8", name: "Ordered"},
];

const FenceForm: React.FC<FormProps> = ({ prices }) => {
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [isFormValid, setIsFormValid] = useState(false);
  const [price, setPrice] = useState(0);


  type PriceList = {
    [key: string]: { [key: string]: number[] }
  };



  const calculatePrice = () => {
    const formData = getValues();
    console.log("Dane formularza:", formData);

    const selectedPrice = prices.find(price =>
      price.drahtstaerke.name === formData.drahtstaerke &&
      price.color.name === formData.color &&
      price.fenceSize.name === formData.fenceSize
    );

    console.log('Wybrana cena:', selectedPrice);

    let basePrice = selectedPrice ? selectedPrice.price : 0;
    console.log('Cena bazowa:', basePrice);

    const totalPrice = basePrice * parseFloat(formData.length || '0');
    console.log('Łączna cena:', totalPrice);

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
      corners: "",
      mounting: "",
      gate: "",
      vorname: "",
      nachname: "",
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

  const processForm: SubmitHandler<Inputs> = async data => {
    try {

      const formDataWithPrice = { ...data, price };
      console.log("Wysyłane dane formularza:", formDataWithPrice);

      const response = await axios.post("/api/forms", formDataWithPrice);
      toast.success("Order created");
    } catch {
      toast.error("Something went wrong");
    }
  }
  const drahtstaerke = watch('drahtstaerke');
  const color = watch('color');
  const length = watch('length');
  const corners = watch('corners');
  const fenceSize = watch('fenceSize');

  useEffect(() => {
    // Wywołanie funkcji calculatePrice kiedykolwiek zmieniają się obserwowane wartości
    calculatePrice();
  }, [drahtstaerke, color, length, corners, fenceSize]); // Dodaj zmienne jako zależności

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
          await handleSubmit(processForm)();
          setCurrentStep((step) => step + 1);
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
                <span className="text-sm font-medium ml-2 hidden lg:inline">
                  {step.name}
                </span>
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
          className="mt-12 py-8 space-y-8"
        >
          {currentStep === 0 && (
            <motion.div
              initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="flex flex-col gap-y-10 items-center ">
                <WireThickness1 control={control} />
                <WireMountingColor control={control} />
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
            >
              {/* Kontener na WireSize i WireCorners */}
              <div className="flex flex-col items-center justify-center w-full gap-10 p-10">
                <div className="w-full md:w-3/4 lg:w-1/4 mx-auto">
                  <WireLength control={control} />
                  <WireCorners control={control} />
                </div>
              </div>

              {/* WireLength pod WireSize i WireCorners */}
              <div className="w-full md:w-3/4 lg:w-1/4 mx-auto p-10">
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
              <div className="flex flex-col items-center  w-full  ">
                <GateForm control={control} />
              </div>
            </motion.div>
          )}

          {currentStep === 4 && (
            <motion.div
              initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="flex flex-col items-center  w-full  ">
                <DeliveryForm control={control} />
              </div>
            </motion.div>
          )}
          {currentStep === 5 && (
            <motion.div
              initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                              <OrderSummary price={price} formData={getValues()} />

            </motion.div>
          )}

          {currentStep === 6 && (
            <motion.div
              initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <UserForm control={control} />
            </motion.div>
          )}

{currentStep === 7 && (
            <motion.div
              initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div>
                Good job ordering
              </div>
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
}
export default FenceForm;

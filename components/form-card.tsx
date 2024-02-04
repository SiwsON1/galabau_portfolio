"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Form from "./form";
import React, { useRef } from 'react';

import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import { ExtendedPrice } from "@/actions/get-prices";
import { CombinedPrices } from "@/app/(main)/page";
import { ConfettiProvider } from "./providers/confetti-provider";

interface FormCardProps {
  prices: CombinedPrices;
}

const FormCard: React.FC<FormCardProps> = ({ prices }) => {

    return (
        <section id="konfigurator" >
            <div className="mx-auto p-4 md:p-12 w-full">
            <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-col justify-center text-center mb-10 gap-y-8 mt-20"
        >
          <h1 className="text-5xl font-bold mb-3 leading-relaxed">
            - Der Zaunkonfigurator -
          </h1>

        </motion.div>
                <Card className="shadow-xl">
                    <CardContent>
                        <Form prices={prices} />
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};

export default FormCard;
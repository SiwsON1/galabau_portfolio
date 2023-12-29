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

import { ExtendedPrice } from "@/actions/get-prices";
import { CombinedPrices } from "@/app/(main)/page";
import { ConfettiProvider } from "./providers/confetti-provider";

interface FormCardProps {
  prices: CombinedPrices;
}

const FormCard: React.FC<FormCardProps> = ({ prices }) => {

    return (
        <section id="konfigurator" > {/* Dodajemy ref do sekcji */}
            <div className="mx-auto p-4 md:p-12 w-full">
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
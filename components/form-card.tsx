import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Form from "./form";
import { ExtendedPrice } from "@/actions/get-prices";

interface FormCardProps {
  prices: ExtendedPrice[];
}

const FormCard: React.FC<FormCardProps> = ({ prices }) => {
    return (
        <section id="konfigurator">
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
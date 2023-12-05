import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Form from "./form";

const FormCard = () => {
    return (
        <div className="mx-auto p-4 md:p-12 w-full">
            <Card className="shadow-xl">
                <CardContent>
                    <Form />
                </CardContent>
            </Card>
        </div>
    );
}

export default FormCard;

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
        <div className="mx-auto  w-1/2 p-4 ">
<Card className="shadow-md">
<CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
</CardHeader>
<CardContent>
    <Form />
</CardContent>
<CardFooter>
    <p>Card Footer</p>
</CardFooter>
</Card>
        </div>

      );
}

export default FormCard;

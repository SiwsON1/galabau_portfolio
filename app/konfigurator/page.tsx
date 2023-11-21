import Image from 'next/image';
import { WireThickness } from '@/components/wire-thickness-form';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const Konfigurator = () => {
    return (
        <div className="p-24 ">
            <div className="c">
                <div className="flex-none">
                    {/* Tutaj dodaj obrazek używając komponentu Image */}
                    <Image
                        src="/fence.jpg" // Zastąp ścieżką do twojego obrazka
                        alt="Opis obrazka"
                        width={300} // Ustaw odpowiednią szerokość
                        height={200} // Ustaw odpowiednią wysokość
                    />
                </div>
                <div className="flex-grow">
                    <Card>
                        <CardHeader>
                            <CardTitle>Card Title</CardTitle>
                            <CardDescription>Card Description</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <WireThickness />
                        </CardContent>
                        <CardFooter>
                            <p>Card Footer</p>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Konfigurator;
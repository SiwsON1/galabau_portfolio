import React from 'react';
import { useFormContext } from "react-hook-form";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

interface OrderSummaryProps {
    price: number;
    formData: any; // TODO: Zastąpić 'any' odpowiednim typem z 'z.infer'
}

export function OrderSummary({ price, formData }: OrderSummaryProps) {
    const isMontage = formData.delivery === 'montage';

    return (
        <Table className='w-1/2 mx-auto'>
            <TableCaption>Bestellübersicht</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="text-xl">Option</TableHead>
                    <TableHead className="text-right text-xl">Wert</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell>Farbe</TableCell>
                    <TableCell className="text-right">{formData.color}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Größe</TableCell>
                    <TableCell className="text-right">{formData.fenceSize}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Länge</TableCell>
                    <TableCell className="text-right">{formData.length}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Drahtstärke</TableCell>
                    <TableCell className="text-right">{formData.drahtstaerke}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Ecken</TableCell>
                    <TableCell className="text-right">{formData.corner}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Montageart</TableCell>
                    <TableCell className="text-right">{formData.mounting}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Tor</TableCell>
                    <TableCell className="text-right">{formData.gate}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Lieferung</TableCell>
                    <TableCell className="text-right">{formData.delivery}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Betrag</TableCell>
                    <TableCell className="text-right">
                        {isMontage ? `${price} € (ohne Montage)` : `${price} €`}
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
}
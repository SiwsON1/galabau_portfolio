"use client";
import React, { useState, useEffect } from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getPrices, ExtendedPrice } from '@/actions/get-prices';
import { Input } from '@/components/ui/input';
import { Badge } from "@/components/ui/badge";
import { Button } from '@/components/ui/button';
import toast from 'react-hot-toast';

interface Filters {
  drahtstaerke: string;
  fenceSize: string;
  color: string;
}

const PriceEditor: React.FC = () => {
  const [prices, setPrices] = useState<ExtendedPrice[]>([]);
  const [filteredPrices, setFilteredPrices] = useState<ExtendedPrice[]>([]);
  const [drahtstaerke, setDrahtstaerke] = useState<string>('');
  const [fenceSize, setFenceSize] = useState<string>('');
  const [color, setColor] = useState<string>('');
  const [editedPrices, setEditedPrices] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await fetch('/api/prices');
        if (!response.ok) {
          throw new Error('Problem z pobraniem cen');
        }
        const data = await response.json();
        setPrices(data);
        filterPrices(data, drahtstaerke, fenceSize, color);
      } catch (error) {
        console.error("Błąd podczas pobierania cen:", error);
      }
    };
    fetchPrices();
  }, [drahtstaerke, fenceSize, color]);

  const filterPrices = (pricesData: ExtendedPrice[], drahtstaerke: string, fenceSize: string, color: string) => {
    let filtered = pricesData.filter(price =>
      (!drahtstaerke || price.drahtstaerke.name.replace(/-/g, '/') === drahtstaerke) &&
      (!fenceSize || price.fenceSize.name === fenceSize) &&
      (!color || price.color.name === color)
    );
    setFilteredPrices(filtered);
  };

  const handlePriceChange = (id: string, value: string) => {
    setEditedPrices(prev => ({ ...prev, [id]: value }));
  };
  const savePriceUpdates = async (id: string, newPrice: string) => {
    try {
      const response = await fetch(`/api/prices/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newPrice: parseFloat(newPrice) }),
      });

      if (!response.ok) {
        throw new Error('Problem z aktualizacją ceny');
      }

      const updatedPrice = await response.json(); // Oczekiwanie na odpowiedź JSON

      // Opcjonalnie: Logowanie zaktualizowanej ceny do konsoli lub wyświetlanie potwierdzenia na UI
      toast.success('Cena została zaktualizowana');
      await refreshPrices(); // Odświeżenie cen po zakończeniu aktualizacji
    } catch (error) {
      console.error('Błąd podczas aktualizacji ceny:', error);
      toast.error('Nie udało się zaktualizować ceny');
    }
  };

  // Funkcja do odświeżenia cen
  const refreshPrices = async () => {
    try {
      const response = await fetch('/api/prices');
      if (!response.ok) {
        throw new Error('Problem z pobraniem cen');
      }
      const data = await response.json();
      setPrices(data);
      filterPrices(data, drahtstaerke, fenceSize, color);
    } catch (error) {
      console.error("Błąd podczas odświeżania cen:", error);
    }
  };

  return (
    <div>
      <div className="flex gap-4 ml-20">
        <Select onValueChange={setDrahtstaerke}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Drahtstärke" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="6/5/6">Stärke 6/5/6</SelectItem>
              <SelectItem value="8/6/8">Stärke 8/6/8</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select onValueChange={setFenceSize}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Größe des Zauns" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="1.03">1.03m</SelectItem>
              <SelectItem value="1.23">1.23m</SelectItem>
              <SelectItem value="1.43">1.43m</SelectItem>
              <SelectItem value="1.63">1.63m</SelectItem>
              <SelectItem value="1.83">1.83m</SelectItem>
              <SelectItem value="2.03">2.03m</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select onValueChange={setColor}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Die passende Farbe" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="Feuerverzinkt">Feuerverzinkt</SelectItem>
              <SelectItem value="RAL 6005 grün">RAL 6005 grün</SelectItem>
              <SelectItem value="RAL 7016 anthrazit">RAL 7016 anthrazit</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="mt-4 ml-20">
        {filteredPrices.map((price, index) => (
          <div key={index} className="flex items-center gap-4 p-2 mb-8 border-b border-gray-200">
            <div className="flex gap-2">
              <Badge>{price.drahtstaerke.name}</Badge>
              <Badge>{price.fenceSize.name}</Badge>
              <Badge>{price.color.name}</Badge>
            </div>
            <Input
              type="number"
              className="w-[150px]"
              value={editedPrices[price.id] ?? price.price.toString()}
              borderStyle="underline"
              focusColor="blue"
              onChange={(e) => handlePriceChange(price.id, e.target.value)}
            />
              <Button
  variant="blue"
  onClick={() => savePriceUpdates(price.id, editedPrices[price.id] ?? price.price.toString())}>
  Zaktualizuj
</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceEditor;
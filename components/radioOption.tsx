import { RadioGroupItem } from "@/components/ui/radio-group";
import Image from "next/image";


interface RadioOptionProps {
    value: string;
    label: string;
    selectedValue: string;
    colorCode?: string;
    imageSrc?: string;
  }

  export const RadioOption = ({ value, label, selectedValue, colorCode, imageSrc }: RadioOptionProps) => {
    return (
      <div
        className={`relative h-[180px] w-[260px]  border-2 rounded-md border-gray-300 cursor-pointer ${selectedValue === value ? "border-steelblue" : ""}`}
        style={{ backgroundColor: colorCode }}
      >
        <RadioGroupItem
          value={value}
          id={value}
          className="peer sr-only"
        />

        <label
          htmlFor={value}
          className="w-full h-full flex justify-center items-center cursor-pointer"
          style={{ position: "relative", overflow: "hidden" }}
        >
          {imageSrc && <Image src={imageSrc} alt={label} layout="fill" objectFit="cover" />}
          <span className="absolute bottom-0 left-0 w-full text-center bg-white bg-opacity-75 py-1">{label}</span>
        </label>
      </div>
    );
  };

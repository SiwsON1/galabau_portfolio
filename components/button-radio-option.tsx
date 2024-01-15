import { RadioGroupItem } from "@/components/ui/radio-group";

interface ButtonRadioOptionProps {
  value: string;
  label: string;
  selectedValue: string;
}

export const ButtonRadioOption = ({ value, label, selectedValue }: ButtonRadioOptionProps) => {
  return (
    <div
      className={`relative h-10 w-24 border-2 rounded-lg border-gray-300 cursor-pointer flex justify-center items-center ${selectedValue === value ? "bg-steelblue text-white" : "bg-white"}`}
    >
      <RadioGroupItem
        value={value}
        id={value}
        className="peer sr-only"
      />

      <label
        htmlFor={value}
        className="w-full h-full flex justify-center items-center cursor-pointer"
      >
        {label}
      </label>
    </div>
  );
};
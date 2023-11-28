import React, { useState } from "react";
import Image from "next/image";

interface ImageWithBorderProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

function ImageWithBorder({ src, alt, width, height }: ImageWithBorderProps) {
  const [isSelected, setIsSelected] = useState(false);

  const toggleSelection = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div
      className={`relative border-2 border-gray-300 cursor-pointer ${
        isSelected ? "border-blue-500" : ""
      }`}
      onClick={toggleSelection}
    >
      <div className="rounded-md overflow-hidden">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          layout="responsive"
        />
      </div>
    </div>
  );
}

export default ImageWithBorder;
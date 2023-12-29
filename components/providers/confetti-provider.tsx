import React, { useEffect, useState } from 'react';
import ReactConfetti from 'react-confetti';
import { useConfettiStore } from "@/hooks/use-confetti-store";

interface ConfettiProviderProps {
    formRef: React.RefObject<HTMLDivElement>;
  }

  export const ConfettiProvider: React.FC<ConfettiProviderProps> = ({ formRef }) => {
    const confetti = useConfettiStore();
    const [confettiSource, setConfettiSource] = useState({ x: 0, y: 0, w: 0, h: 0 });

    useEffect(() => {
      if (formRef.current) {
        const rect = formRef.current.getBoundingClientRect();
        setConfettiSource({
          x: rect.left,
          y: rect.top,
          w: rect.width,
          h: rect.height
        });
      }
    }, [formRef]);

    if (!confetti.isOpen) return null;

    return (
      <ReactConfetti
        width={window.innerWidth}
        height={window.innerHeight}
        confettiSource={confettiSource}
        numberOfPieces={500}
        recycle={false}
        onConfettiComplete={() => confetti.onClose()}
      />
    );
  };
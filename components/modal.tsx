"use client";
import { useState, useCallback, useRef, useEffect, MouseEvent, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

interface ModalProps {
  children: ReactNode;
}

export default function Modal({ children }: ModalProps) {
  const overlay = useRef<HTMLDivElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [scrollPosition, setScrollPosition] = useState(0);

  const onDismiss = useCallback(() => {
    closeModal();
    router.back();
  }, [router]);

  const onClick = useCallback(
    (e: MouseEvent) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        onDismiss();
      }
    },
    [onDismiss, overlay, wrapper]
  );

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => { // Użyj globalnego KeyboardEvent
      if (e.key === 'Escape') {
        onDismiss();
      }
    },
    [onDismiss]
  );

  useEffect(() => {
    // Zapisz pozycję i zablokuj przewijanie przy montowaniu komponentu
    setScrollPosition(window.pageYOffset);
    document.body.style.overflow = 'hidden';

    document.addEventListener('keydown', onKeyDown as EventListener); // Rzutowanie na EventListener
    return () => {
      document.removeEventListener('keydown', onKeyDown as EventListener); // Rzutowanie na EventListener

      // Przywróć przewijanie przy demontowaniu komponentu
      document.body.style.overflow = 'unset';
      window.scrollTo(0, scrollPosition);
    };
  }, [onKeyDown, scrollPosition]);

  const closeModal = () => {
    // Funkcja do przywracania przewijania, ale nie jest wywoływana bezpośrednio w useEffect
    document.body.style.overflow = 'unset';
    window.scrollTo(0, scrollPosition);
  };

  return (
    <div
      ref={overlay}
      className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60"
      onClick={onClick}
    >
      <div
        ref={wrapper}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full sm:w-10/12 md:w-8/12 lg:w-1/2 p-6"
      >
        {children}
      </div>
    </div>
  );
}
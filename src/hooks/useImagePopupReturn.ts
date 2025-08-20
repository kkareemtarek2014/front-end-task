import { useState, useCallback } from "react";

interface UseImagePopupReturn {
  isOpen: boolean;
  images: string[];
  openPopup: (images: string[], initialIndex?: number) => void;
  closePopup: () => void;
}

export const useImagePopup = (): UseImagePopupReturn => {
  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [initialImageIndex, setInitialImageIndex] = useState(0);

  const openPopup = useCallback(
    (newImages: string[], initialIndex: number = 0) => {
      setImages(newImages);
      setInitialImageIndex(initialIndex);
      setIsOpen(true);
    },
    []
  );

  const closePopup = useCallback(() => {
    setIsOpen(false);
  }, []);

  return {
    isOpen,
    images,
    openPopup,
    closePopup,
  };
};

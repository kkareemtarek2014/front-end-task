import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Arrow } from "../icons/Arrow";
import { CloseIcon } from "../icons/CloseIcon";

interface ImagePopupProps {
  images: string[];
  isOpen: boolean;
  onClose: () => void;
  initialImageIndex?: number;
}

export const ImagePopup = ({
  images,
  isOpen,
  onClose,
  initialImageIndex = 0,
}: ImagePopupProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(initialImageIndex);

  const validImages = images.filter((img) => img && img.trim() !== "");

  useEffect(() => {
    if (validImages.length > 0) {
      const safeIndex = Math.min(initialImageIndex, validImages.length - 1);
      setCurrentImageIndex(Math.max(0, safeIndex));
    }
  }, [initialImageIndex, validImages.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          e.preventDefault();
          handlePrevious();
          break;
        case "ArrowRight":
          e.preventDefault();
          handleNext();
          break;
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handlePrevious = useCallback(() => {
    if (validImages.length === 0) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? validImages.length - 1 : prev - 1
    );
  }, [validImages.length]);

  const handleNext = useCallback(() => {
    if (validImages.length === 0) return;
    setCurrentImageIndex((prev) =>
      prev === validImages.length - 1 ? 0 : prev + 1
    );
  }, [validImages.length]);

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    },
    [onClose]
  );

  if (
    !isOpen ||
    validImages.length === 0 ||
    currentImageIndex >= validImages.length
  ) {
    return null;
  }

  const currentImage = validImages[currentImageIndex];

  if (!currentImage || currentImage.trim() === "") {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
      onClick={handleBackdropClick}
    >
      <div className="relative max-w-[1184px] max-h-[600px] w-full mx-4">
        {validImages.length > 1 && (
          <>
            <button
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 px-4 py-2  hover:bg-black text-white rounded-full flex items-center justify-center  transition-all duration-200"
              aria-label="Previous image"
            >
              <Arrow className="w-5 h-8 text-white rotate-180" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10  px-4 py-2   hover:bg-black text-white rounded-full flex items-center justify-center  transition-all duration-200"
              aria-label="Next image"
            >
              <Arrow className="w-5 h-8 text-white" />
            </button>
          </>
        )}

        <div className="relative w-full h-full  lg:w-[960px] mx-auto  flex items-center justify-center">
          <Image
            src={currentImage}
            alt={`Image ${currentImageIndex + 1} of ${validImages.length}`}
            width={960}
            height={600}
            className=" object-fill"
            loading="lazy"
          />
          <button
            onClick={onClose}
            className="absolute top-[12px] right-[17px] z-10 w-8 h-8 bg-black  text-white rounded-full flex items-center justify-center hover:bg-opacity-75 transition-all duration-200"
            aria-label="Close popup"
          >
            <CloseIcon className="w-3 h-3 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

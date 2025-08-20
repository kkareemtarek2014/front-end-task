import Image from "next/image";
import { Unit } from "@/types";
import { getStatusBadgeClassesMobile } from "../general/StatusBadge";
import { ImagePopup } from "../general/ImagePopup";
import { useState } from "react";

export const MobileUnitCard = ({ unit }: { unit: Unit }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleImageClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="flex flex-col items-start p-3 gap-3 w-full h-[110px] bg-white border border-borderColor rounded-lg">
      <div className="flex flex-row items-center gap-3 w-full h-10">
        <div
          className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
          onClick={handleImageClick}
        >
          <Image
            src={unit.photos[0] || "/logo.svg"}
            alt={`Unit ${unit.id}`}
            width={40}
            height={40}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1 w-[175px] h-[21px]">
          <span className="font-normal text-[16px] leading-[21px] text-black">
            {unit.type}
          </span>
        </div>

        <div
          className={`flex flex-row justify-center items-end px-2 py-1 w-20 h-[22px] rounded ${getStatusBadgeClassesMobile(
            unit.status
          )}`}
        >
          <span className="font-medium text-[11px] leading-[14px] text-center">
            {unit.status}
          </span>
        </div>
      </div>

      <div className="flex flex-row justify-between items-center gap-6 w-full h-[34px]">
        <div className="flex flex-col justify-center items-center gap-[2px] w-[78px] h-[34px]">
          <span className="font-normal text-[14px] leading-[18px] text-center text-black">
            {unit.id}
          </span>
          <span className="font-medium text-[11px] leading-[14px] text-center text-[#9E9E9E]">
            Unit ID
          </span>
        </div>

        <div className="w-8 h-0 border-t border-[#9E9E9E] opacity-24 rotate-90"></div>

        <div className="flex flex-col justify-center items-center gap-[2px] w-[78px] h-[34px]">
          <span className="font-normal text-[14px] leading-[18px] text-center text-black">
            {unit.bua}
          </span>
          <span className="font-medium text-[11px] leading-[14px] text-center text-[#9E9E9E]">
            BUA
          </span>
        </div>

        <div className="w-8 h-0 border-t border-[#9E9E9E] opacity-24 rotate-90"></div>

        <div className="flex flex-col justify-center items-center gap-[2px] w-[78px] h-[34px]">
          <span className="font-normal text-[14px] leading-[18px] text-center text-black">
            {unit.totalPrice.replace("EGP ", "").replace(",", ".")}
          </span>
          <span className="font-medium text-[11px] leading-[14px] text-center text-[#9E9E9E]">
            Price
          </span>
        </div>
      </div>

      <ImagePopup
        images={unit.photos}
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        initialImageIndex={0}
      />
    </div>
  );
};

import Image from "next/image";
import { UnitsTableProps } from "@/types";
import StatusBadge from "@/components/general/StatusBadge";
import { ImagePopup } from "@/components/general/ImagePopup";
import { useImagePopup } from "@/hooks/useImagePopupReturn";

export const UnitsTable = ({ units }: UnitsTableProps) => {
  const { isOpen, images, openPopup, closePopup } = useImagePopup();

  if (units.length === 0) {
    return <div>No units found</div>;
  }

  return (
    <div className={`bg-white rounded-lg overflow-hidden `}>
      <table className="w-full rounded-lg border border-borderColor">
        <thead className="bg-white">
          <tr className="border-b border-gray-200">
            <th className="py-4 px-6 text-sm font-medium text-center text-black">
              Unit ID
            </th>
            <th className="py-4 px-6 text-sm font-medium text-center text-black">
              Unit Type
            </th>
            <th className="py-4 px-6 text-sm font-medium text-center text-black">
              BUA
            </th>
            <th className="py-4 px-6 text-sm font-medium text-center text-black">
              Status
            </th>
            <th className="py-4 px-6 text-sm font-medium text-center text-black">
              Total Price
            </th>
            <th className="py-4 px-6 text-sm font-medium text-center text-black">
              Photos
            </th>
          </tr>
        </thead>
        <tbody>
          {units.map((unit, index) => (
            <tr
              key={`${unit.id}-${index}`}
              className={`border-b border-gray-200 hover:bg-gray-50 ${
                index % 2 === 1 ? "bg-primary" : "bg-white"
              }`}
            >
              <td className="py-4 px-6 text-sm font-medium text-center text-black">
                {unit.id}
              </td>
              <td className="py-4 px-6 text-sm text-center text-black capitalize">
                {unit.type}
              </td>
              <td className="py-4 px-6 text-sm text-center text-black">
                {unit.bua}
              </td>
              <td className="py-4 px-6 text-center">
                <StatusBadge status={unit.status} />
              </td>
              <td className="py-4 px-6 text-sm text-center text-black font-medium">
                {unit.totalPrice}
              </td>
              <td className="py-4 px-6">
                {unit.photos.length > 0 && (
                  <div
                    className="w-10 h-10   overflow-hidden mx-auto bg-gray-400  cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => openPopup(unit.photos, 0)}
                  >
                    <Image
                      src={unit.photos[0] || "/logo.svg"}
                      alt={`Unit ${unit.id}`}
                      width={40}
                      height={40}
                      className="w-full h-full object-fill"
                    />
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ImagePopup images={images} isOpen={isOpen} onClose={closePopup} />
    </div>
  );
};

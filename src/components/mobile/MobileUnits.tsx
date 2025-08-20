import { FilterOptions, Unit } from "@/types";
import { MobileUnitCard } from "@/components/mobile/MobileUnitCard";
import { MobileSearchAndFilters } from "./MobileSearchAndFilters";
import { MobileTitle } from "./MobileTitle";
interface MobileUnitsProps {
  units: Unit[];
  onFilterChange?: (filters: Partial<FilterOptions>) => void;
}

export const MobileUnits = ({ units, onFilterChange }: MobileUnitsProps) => {
  return (
    <div className="flex flex-col items-start gap-4 w-full min-h-[566px] px-4 pt-[74px] pb-6">
      <MobileTitle title="Units" />

      <MobileSearchAndFilters onFilterChange={onFilterChange} />

      <div className="flex flex-col items-start gap-4 w-full">
        <div className="flex flex-col items-start gap-3 w-full">
          {units.length === 0 && (
            <div className="flex flex-col items-center justify-center w-full h-full">
              <span className="font-normal text-base  text-black">
                No units found
              </span>
            </div>
          )}
          {units.map((unit, index) => (
            <MobileUnitCard key={index} unit={unit} />
          ))}
        </div>
      </div>
    </div>
  );
};

import { Unit } from "@/types";

interface StatusBadgeProps {
  status: Unit["status"];
}

const StatusBadge = ({ status }: StatusBadgeProps) => {
  const getStatusClasses = () => {
    switch (status) {
      case "available":
        return "bg-[#2419BE] text-white px-3 py-1 rounded text-xs font-medium w-[80px] text-center relative flex items-center justify-center mx-auto capitalize";
      case "sold":
        return "bg-[#D3EFDA] text-[#0D572D] px-3 py-1 rounded text-xs font-medium w-[80px] text-center relative flex items-center justify-center mx-auto capitalize";
      case "reserved":
        return "bg-black text-white px-3 py-1 rounded text-xs font-medium w-[80px] text-center relative flex items-center justify-center mx-auto capitalize";
      case "unavailable":
        return "bg-borderColor text-[#616161] px-3 py-1 rounded text-xs font-medium w-[80px] text-center relative flex items-center justify-center mx-auto capitalize";
      default:
        return "bg-borderColor text-[#616161] px-3 py-1 rounded text-xs font-medium w-[80px] text-center relative flex items-center justify-center mx-auto capitalize";
    }
  };

  return <span className={getStatusClasses()}>{status}</span>;
};

export const getStatusBadgeClassesMobile = (status: Unit["status"]) => {
  switch (status) {
    case "available":
      return "bg-[#2419BE] text-white capitalize";
    case "sold":
      return "bg-[#D3EFDA] text-[#0D572D] capitalize";
    case "reserved":
      return "bg-black text-white capitalize";
    case "unavailable":
      return "bg-borderColor text-[#616161] capitalize";
    default:
      return "bg-borderColor text-[#616161] capitalize";
  }
};

export default StatusBadge;

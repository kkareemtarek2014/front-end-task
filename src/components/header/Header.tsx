import { DesktopHeader } from "./DesktopHeader";
import { MobileHeader } from "../mobile/MobileHeader";

export const Header = () => {
  return (
    <>
      <DesktopHeader />
      <MobileHeader />
    </>
  );
};

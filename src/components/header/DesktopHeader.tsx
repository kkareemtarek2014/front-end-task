import Image from "next/image";

export const DesktopHeader = () => {
  return (
    <header className="relative bg-black lg:block hidden">
      <nav className="max-w-[1376px] mx-auto px-2 lg:px-0 py-3">
        <div className="w-121.09 h-24 flex-none order-0">
          <Image src="/logo.svg" alt="logo" width={121.09} height={24} />
        </div>
      </nav>
    </header>
  );
};

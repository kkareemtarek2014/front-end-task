export const MobileTitle = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-row items-center gap-2 w-full px-4 py-[13px] bg-white">
      <h1 className="flex-1 text-2xl font-bold text-black leading-[31px]">
        {title}
      </h1>
    </div>
  );
};

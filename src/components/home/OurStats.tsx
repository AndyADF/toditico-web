import OurStatsCard from "./OurStatsCard";

export default function OurStats() {
  const data: { type: "sales" | "customers" | "products"; number: number }[] = [
    {
      type: "sales",
      number: 4500,
    },
    {
      type: "customers",
      number: 2000,
    },
    {
      type: "products",
      number: 600,
    },
  ];

  return (
    <div className="px-6 pb-12 pt-6 md:px-[10px] md:pt-[48px] md:pb-[80px] md:w-[520px]">
      <p className="text-h1 text-primary font-bold text-center mb-6 md:mb-12 md:text-h1-tablet">
        Nuestros logros en números
      </p>
      <div className="flex flex-col gap-4 items-center">
        {data.map(({ type, number }) => (
          <OurStatsCard {...{ type, number }} key={type} />
        ))}
      </div>
    </div>
  );
}

import OurStatsCard from "./OurStatsCard";

type Props = {
  sales: number;
  customers: number;
  products: number;
};

export default function OurStats({ sales, customers, products }: Props) {
  const data: { type: "sales" | "customers" | "products"; number: number }[] = [
    {
      type: "sales",
      number: sales,
    },
    {
      type: "customers",
      number: customers,
    },
    {
      type: "products",
      number: products,
    },
  ];

  return (
    <div className="px-6 pb-12 pt-6 md:px-[10px] md:pt-[48px] md:pb-[80px] md:w-[520px] xl:mx-auto xl:max-w-[1472px] xl:w-auto">
      <p className="text-h1 text-primary font-bold text-center mb-6 md:mb-12 md:text-h1-tablet xl:text-h2-desktop">
        Nuestros logros en números
      </p>
      <div className="flex flex-col gap-4 items-stretch w-full xl:flex-row">
        {data.map(({ type, number }) => (
          <OurStatsCard {...{ type, number }} key={type} />
        ))}
      </div>
    </div>
  );
}

interface BenefitItemProps {
  title: string;
  description: string;
  numberItem: string;
}

export function BenefitItem({ title, description, numberItem }: BenefitItemProps) {
  return (
    <div className="flex flex-col justify-center gap-2">
      <div className="flex text-center bg-amber-800 rounded-full w-14">
        <div className="rounded-full w-5 h-5 m-1 bg-white text-black text-sm">
          {numberItem}
        </div>
      </div>
      <h4 className="text-white text-xl font-bold md:text-2xl">{title}</h4>
      <p className="text-slate-200 text-justify">{description}</p>
    </div>
  );
}

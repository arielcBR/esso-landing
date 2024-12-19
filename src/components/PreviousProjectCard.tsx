interface PreviousProjectCardProps {
  image: string;
  title: string;
  description: string;
}

export function PreviousProjectCard({
  image,
  title,
  description,
}: PreviousProjectCardProps) {
  return (
    <div className="flex flex-col items-center gap-4 pb-6 border-b border-white w-full last:border-b-0">
      <p className="font-bold text-lg text-center text-white md:text-2xl">{title}</p>
      <p className="text-sm text-center text-white md:text-base">{description}</p>
      <img className="rounded-3xl w-full" src={image} alt="" />
    </div>
  );
}

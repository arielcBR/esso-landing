interface PreviousProjectCardProps {
  image: string;
  title: string;
  description: string;
  reverse?: boolean;
}

export function PreviousProjectCard({
  image,
  title,
  description,
  reverse = false,
}: PreviousProjectCardProps) {
  const classContent = reverse
    ? "flex flex-col items-center gap-4 pb-6 border-b border-white w-full last:border-b-0 xl:flex-row-reverse"
    : "flex flex-col items-center gap-4 pb-6 border-b border-white w-full last:border-b-0 xl:flex-row";

  return (
    <div className={classContent}>
      <div className="flex flex-col gap-4 xl:w-1/2">
        <p className="font-bold text-lg text-center text-white md:text-2xl">
          {title}
        </p>
        <p className="text-sm text-center text-white md:text-base">
          {description}
        </p>
      </div>
      <img className="rounded-3xl w-full xl:w-1/2" src={image} alt="" />
    </div>
  );
}

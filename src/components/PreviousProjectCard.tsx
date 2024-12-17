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
    <div className="flex flex-col items-center gap-4 pb-6 border-b border-white w-full">
      <p className="font-bold text-lg text-center text-white">{title}</p>
      <p className="text-sm text-center text-white">{description}</p>
      <img className="rounded-3xl w-full" src={image} alt="" />
    </div>
  );
}
